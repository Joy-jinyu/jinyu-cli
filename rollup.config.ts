import rollupResolve from '@rollup/plugin-node-resolve'
import { resolve as pathResolve } from 'path'

import ts from 'rollup-plugin-typescript2'
// import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import { babel } from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import { defineConfig, OutputOptions, Plugin, RollupOptions } from 'rollup'
import { targets } from './scripts/utils'
import { existsSync, rmSync } from 'fs'

// const Global = `
// global.navigator = { userAgent: 'node.js', };
// `

const rollupOptions: RollupOptions[] = []

const createConfig = ({
  input,
  output,
  pkg,
  plugins = [],
  target
}: {
  input: string
  output: OutputOptions
  pkg: any
  plugins?: Plugin[]
  target: string
}): RollupOptions => {
  const tsPlugin = ts({
    check: process.env.NODE_ENV === 'production',
    tsconfig: pathResolve(__dirname, 'tsconfig.json'),
    cacheRoot: pathResolve(__dirname, 'node_modules/.rts2_cache'),
    tsconfigOverride: {
      include: [`packages/${target}/src`],
      exclude: ['rollup.config.ts', 'packages/*/__tests__']
    }
  })

  let external = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    ...['path', 'url', 'stream'] // for @vue/compiler-sfc / server-renderer
  ]

  return {
    input,
    // Global and Browser ESM builds inlines everything so that they can be
    // used alone.
    external,
    plugins: [
      // json({
      //   namedExports: false
      // }),
      rollupResolve({
        extensions: ['.ts', '.tsx']
      }),
      tsPlugin,
      commonjs(),
      ...plugins,
      terser({
        // module: false,
        compress: {
          ecma: 2015,
          pure_getters: true
        },
        safari10: true
      })
    ],
    output,
    onwarn: (msg: any, warn) => {
      if (!/Circular/.test(msg)) {
        warn(msg)
      }
    },
    treeshake: {
      moduleSideEffects: false
    }
  }
}

/**
 * * [书写配置文件可以使用ts写法](https://rollupjs.org/guide/en/#--configplugin-plugin)
 * * [rollup常用的插件]（https://blog.csdn.net/zz_jesse/article/details/124642247）
 */
targets.forEach((target) => {
  const resolve = (...args: string[]) => pathResolve('packages', target, ...args)
  if (existsSync(resolve('dist'))) rmSync(resolve('dist'), { recursive: true, force: true })

  const outputConfig: { cjs: OutputOptions } = {
    cjs: {
      file: resolve('dist', `index.cjs.js`),
      format: 'cjs'
    }
  }
  const pkg = require(resolve('package.json'))
  const packageConfigs = createConfig({
    input: resolve('src', 'index.ts'),
    output: outputConfig.cjs,
    pkg,
    plugins: ['components'].includes(target)
      ? [postcss(), babel({ babelHelpers: 'runtime', extensions: ['.tsx', '.ts'] })]
      : [],
    target
  })
  rollupOptions.push(packageConfigs)
})

export default defineConfig(rollupOptions)
