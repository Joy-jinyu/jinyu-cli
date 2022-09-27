module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        targets: '> 0.25%, not dead'
      }
    ],
    '@babel/preset-typescript'
  ],
  // 支持es6的语法
  plugins: ['@babel/plugin-transform-runtime']
}
