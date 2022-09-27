import { describe, expect } from '@jest/globals'
import { execa } from 'execa'

describe('test jinyu-cli hello', () => {
  test('run hello -n joy out has joy', async () => {
    const result = await execa('git', ['--version'])
    expect(result.stdout).toBe('joy')
  })
})
