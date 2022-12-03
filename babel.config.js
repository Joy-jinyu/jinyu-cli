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
  // todo 支持es6的语法(有这个会导致jest跑不成功，因为cjs.js也会被babel掉)
  // plugins: [
  //   [
  //     '@babel/plugin-transform-runtime',
  //     {
  //       corejs: {
  //         version: 3,
  //         proposals: true
  //       },
  //       useESModules: true
  //     }
  //   ]
  // ]
}
