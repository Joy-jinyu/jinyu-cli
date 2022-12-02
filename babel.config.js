module.exports = {
  presets: [
    '@babel/preset-typescript',
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        modules: false // 对ES6的模块文件不做转化，以便使用tree shaking、sideEffects等
      }
    ]
  ],
  // 支持es6的语法
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: {
          version: 3,
          proposals: true
        },
        useESModules: true
      }
    ]
  ]
}
