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
  ]
}
