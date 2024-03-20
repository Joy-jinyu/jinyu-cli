## 一、注意点
+ 编译后的文件需要添加一行 `#! /usr/bin/env node`
```
@rollup/plugin-node-resolve 和 @rollup/plugin-commonjs 插件让 Rollup 能够处理 Node.js 风格的模块。
rollup-plugin-typescript2 是 Rollup 的 TypeScript 插件，用于处理 TypeScript 文件。
@babel/core 是 Babel 的核心包。
@babel/preset-env、@babel/preset-react 和 @babel/preset-typescript 分别是 Babel 的预设，用于转译 JavaScript、React JSX 和 TypeScript。
```

---

## babel
***babelHelpers 的选项：***
+ "bundled": 这是默认行为，在每个文件中局部引入必要的帮助程序代码。这可能导致相同的帮助程序代码在最终的 bundle 中多次出现，增加了文件大小。

+ "runtime": 需要配合 @babel/plugin-transform-runtime 插件使用。它会将帮助程序和内置的 polyfills 更改为从 @babel/runtime 包引用，减少了冗余代码，可以减小最终包的体积。适合应用程序和库。

+ "external" 或 "inline": 这两个选项较少见，具体行为可能依赖于你使用的构建工具。通常情况下，不建议在大多数项目中使用。

+ "false": 不自动插入帮助程序代码。这种情况下，如果你的代码需要这些帮助程序，你必须手动添加它们，这通常不推荐因为很容易遗漏。

---

## rollup
+ 支持.ts文件的配置文件
`--configPlugin @rollup/plugin-typescript`
+ 支持sourcemap
`---sourcemap`
+ 传环境变量
`--environment TARGETS:hooks` *** 接收 *** `process.env.TARGETS`

## jest
+ [支持es module](https://jestjs.io/docs/ecmascript-modules)
`NODE_OPTIONS=--experimental-vm-modules`
+ 同时支持不报waring
"NODE_OPTIONS='--experimental-vm-modules --no-warnings'

## pnpm
pnpm --filter <package_selector> <command>
+ @ovometajs/cli
