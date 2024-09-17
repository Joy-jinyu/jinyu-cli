import { existsSync, readdirSync, statSync } from 'fs'
import { resolve as pathResolve } from 'path'

import { OutputOptions, Plugin, RollupOptions } from 'rollup'
import commonjs from '@rollup/plugin-commonjs'
import rollupResolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
// import json from '@rollup/plugin-json'
// import ts from 'rollup-plugin-typescript2'

const babelExternal = [
  '@babel/runtime/regenerator',
  '@babel/runtime/helpers/asyncToGenerator',
  '@babel/runtime/helpers/slicedToArray',
  '@babel/runtime/helpers/extends',
  '@babel/runtime/helpers/toConsumableArray',
  '@babel/runtime/helpers/defineProperty'
]

export const getTargets = (envTargets: string[]) => {
  return readdirSync('packages').filter(
    (f) =>
      envTargets.includes(f) &&
      // 当前是一个目录
      statSync(pathResolve('packages', f)).isDirectory() &&
      // 目录下存在package.json文件
      existsSync(pathResolve('packages', f, 'package.json'))
  )
}

export const createConfig = ({
  input,
  output,
  pkg,
  plugins = []
}: {
  input: string
  output: OutputOptions[]
  pkg: any
  plugins?: Plugin[]
}): RollupOptions => {

  const external = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
    ...['path', 'url', 'stream'],
    ...babelExternal
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
      // tsPlugin,
      commonjs(),
      ...plugins,
      terser({
        // module: false,
        compress: {
          ecma: 2020,
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
