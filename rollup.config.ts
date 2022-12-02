import { resolve as pathResolve } from 'path'

import postcss from 'rollup-plugin-postcss'
import { babel } from '@rollup/plugin-babel'
import { defineConfig, OutputOptions, RollupOptions } from 'rollup'
import { targets, babelSupportModules, createConfig, distHasEsm } from './scripts'
import { existsSync, rmSync } from 'fs'

// const Global = `
// global.navigator = { userAgent: 'node.js', };
// `

const rollupOptions: RollupOptions[] = []

/**
 * * [书写配置文件可以使用ts写法](https://rollupjs.org/guide/en/#--configplugin-plugin)
 * * [rollup常用的插件]（https://blog.csdn.net/zz_jesse/article/details/124642247）
 */
targets.forEach((target) => {
  const resolve = (...args: string[]) => pathResolve('packages', target, ...args)
  if (existsSync(resolve('dist'))) rmSync(resolve('dist'), { recursive: true, force: true })

  const outputConfig: { cjs: OutputOptions; esm: OutputOptions } = {
    cjs: {
      file: resolve('dist', `index.cjs.js`),
      format: 'cjs'
    },
    esm: {
      file: resolve('dist', `index.esm.js`),
      format: `esm`
    }
  }
  const pkg = require(resolve('package.json'))
  const packageConfigs = createConfig({
    input: resolve('src', 'index.ts'),
    output: distHasEsm.includes(target) ? [outputConfig.cjs, outputConfig.esm] : [outputConfig.cjs],
    pkg,
    plugins: babelSupportModules.includes(target)
      ? [postcss(), babel({ babelHelpers: 'runtime', extensions: ['.tsx', '.ts'] })]
      : [],
    target
  })
  rollupOptions.push(packageConfigs)
})

export default defineConfig(rollupOptions)
