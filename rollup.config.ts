import rollupResolve from '@rollup/plugin-node-resolve'
import { resolve as pathResolve } from 'path'

import ts from 'rollup-plugin-typescript2'
// import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import { defineConfig, OutputOptions, Plugin, RollupOptions } from 'rollup'
import { targets } from './scripts/utils'

// const Global = `
// global.navigator = { userAgent: 'node.js', };
// `

const rollupOptions: RollupOptions[] = []

const createConfig = ({
  input,
  output,
  pkg,
  plugins = []
}: {
  input: string
  output: OutputOptions
  pkg: any
  plugins?: Plugin[]
}): RollupOptions => {
  const tsPlugin = ts({
    check: process.env.NODE_ENV === 'production',
    tsconfig: pathResolve(__dirname, 'tsconfig.json'),
    cacheRoot: pathResolve(__dirname, 'node_modules/.rts2_cache'),
    tsconfigOverride: {
      compilerOptions: {
        sourceMap: output.sourcemap,
        declaration: true,
        declarationMap: true
      },
      exclude: ['**/__tests__', 'rollup.config.ts']
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
        extensions: ['.ts']
      }),
      tsPlugin,
      commonjs(),
      terser({
        // module: false,
        compress: {
          ecma: 2015,
          pure_getters: true
        },
        safari10: true
      }),
      ...plugins
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
  const outputConfig: { cjs: OutputOptions } = {
    cjs: {
      file: resolve('dist', `${target}.cjs.js`),
      format: 'cjs'
    }
  }
  const pkg = require(resolve('package.json'))
  const packageConfigs = createConfig({
    input: resolve('src', 'index.ts'),
    output: outputConfig.cjs,
    pkg
  })
  rollupOptions.push(packageConfigs)
})

export default defineConfig(rollupOptions)
