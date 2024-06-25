import { Command } from 'commander'
import chalk from 'chalk'

const { log } = console

const helloAction = async (
  str: string
) => {
  log(`hello ${chalk.bold.red(str)}, it's happy to meet you!`)
}

export const registerHello = (program: Command) => {
  program
    .command('hello')
    .description('hello commander')
    .argument('<string>', 'console name')
    .action(helloAction)
}
