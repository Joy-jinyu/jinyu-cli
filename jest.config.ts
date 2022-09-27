// jest 默认是支持直接使用 ts 来写 config
// 安装依赖 yarn add -D jest ts-jest @types/jest
import type { Config } from '@jest/types'

// https://kulshekhar.github.io/ts-jest/docs/next/guides/esm-support/
const config: Config.InitialOptions = {
  // preset: 'ts-jest/presets/default-esm', 使用之后会导致`exports is not defined`
  // preset: 'ts-jest', 使用之后会导致`exports is not defined`
  collectCoverage: true,
  testEnvironment: 'node',
  // 使jest支持esm
  extensionsToTreatAsEsm: ['.ts']
  // 需要研究一下
  // transform: {
  //   '\\.[jt]s?$': [
  //     'ts-jest',
  //     {
  //       useESM: true
  //     }
  //   ]
  // }
}

export default config
