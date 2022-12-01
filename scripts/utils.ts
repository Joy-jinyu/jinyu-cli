import { existsSync, readdirSync, statSync } from 'fs'
import { resolve } from 'path'

export const targets = readdirSync('packages').filter(
  (f) =>
    // 当前是一个目录
    statSync(resolve('packages', f)).isDirectory() &&
    // 目录下存在package.json文件
    existsSync(resolve('packages', f, 'package.json'))
)
