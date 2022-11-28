import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

// const Global = `
// global.navigator = { userAgent: 'node.js', };
// `

// https://blog.csdn.net/zz_jesse/article/details/124642247
export default {
  input: './src/index.ts',
  output: [
    {
      file: './cjs/index.js',
      format: 'cjs'
      // banner: Global
    }
  ],
  external: (id: string) => {
    return id.indexOf('commander') !== -1
  },
  plugins: [
    resolve({
      extensions: ['.ts']
    }),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    terser()
  ]
}
