import { Command } from 'commander'

import { registerHello } from './hello'
import { registerMock } from './mock'

const program = new Command()

program.name('ovo-cli').description('ovo cli tools').version('0.0.4')
registerHello(program)
registerMock(program)
program.parse(process.argv)

