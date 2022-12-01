// jest 默认是支持直接使用 ts 来写 config
// 安装依赖 yarn add -D jest ts-jest @types/jest
import type { Config } from 'jest'

// https://kulshekhar.github.io/ts-jest/docs/next/guides/esm-support/
const config: Config = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  globals: {
    __DEV__: true,
    __TEST__: true,
    __VERSION__: require('./package.json').version,
    __BROWSER__: false,
    __GLOBAL__: false,
    __ESM_BUNDLER__: true,
    __ESM_BROWSER__: false,
    __NODE_JS__: true,
    __SSR__: true,
    __FEATURE_OPTIONS_API__: true,
    __FEATURE_SUSPENSE__: true,
    __FEATURE_PROD_DEVTOOLS__: false,
    __COMPAT__: true
  },
  // 使jest支持esm
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  // 需要研究一下
  transform: {
    // '^.+\\.[tj]sx?$': [
    //   'ts-jest',
    //   {
    //     target: 'esnext',
    //     sourceMap: true,
    //     useESM: true
    //   }
    // ],
    '^.+\\.[tj]sx?$': 'babel-jest' // added this line
  },
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'lcov', 'text'],
  collectCoverageFrom: [
    'packages/*/src/**/*.ts'
    // // DOM transitions are tested via e2e so no coverage is collected
    // '!packages/runtime-dom/src/components/Transition*',
    // // only called in browsers
    // '!packages/vue/src/devCheck.ts',
    // // only used as a build entry
    // '!packages/vue/src/runtime.ts',
    // // mostly just entries
    // '!packages/vue-compat/**'
  ],
  watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  // moduleNameMapper: {
  //   // '@vue/compat': '<rootDir>/packages/vue-compat/src',
  //   // '^@vue/(.*?)$': '<rootDir>/packages/$1/src'
  // },
  rootDir: __dirname,
  testMatch: ['<rootDir>/packages/**/__tests__/**/*spec.[jt]s?(x)']
}

export default config
