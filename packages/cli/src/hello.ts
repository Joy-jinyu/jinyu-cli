import { Command } from 'commander'
import chalk from 'chalk'

const { log } = console

const helloAction = async (
  str: string,
  options: {
    name: string
  }
) => {
  if (options.name) {
    log(`hello ${chalk.bold.red(str)}, it's happy to meet you!`)
  }
}

export const registerHello = (program: Command) => {
  program
    .command('hello')
    .description('hello commander')
    .argument('<string>', 'console name')
    .option('-n, --name', 'show you name')
    .option('-s, --separator <char>', 'separator character', ',')
    .action(helloAction)
}
