import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: './src/index.ts',
  output: [
    {
      file: './bin/index.cjs.js',
      format: 'cjs'
    },
    {
      file: './bin/index.esm.js',
      format: 'esm'
    }
  ],
  external: (id: string) => {
    return id.indexOf('commander') !== -1
  },
  plugins: [
    resolve({
      extensions: ['.ts']
    }),
    babel({ babelHelpers: 'bundled' })
  ]
}
