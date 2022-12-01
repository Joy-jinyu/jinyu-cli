import { execa } from 'execa'

describe('test ovo-cli hello', () => {
  test('run hello -n ovo out has ovo', async () => {
    const result = await execa('git', ['--version'])
    expect(result.stdout).toBe('ovo')
  })
})
