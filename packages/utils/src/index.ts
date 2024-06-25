import glob from 'glob'
import path from 'path'
import fs from 'fs'


interface MockData {
  apiPath: string;
  jsonStr: string;
}

export const getMockData = (dir: string): MockData[] => {
  const paths = glob.sync(path.resolve(process.cwd(), dir, '**/*.json'))

  return paths.map(path => {
    const [, relativePath] = path.split(dir)
    const apiPath = relativePath.replace(/.json/, '')

    return {
      apiPath,
      jsonStr: fs.readFileSync(path).toString()
    }
  })
}
