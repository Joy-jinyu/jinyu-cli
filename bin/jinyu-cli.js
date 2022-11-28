#!/usr/bin/env node
const importLocal = require('import-local')
const chalk = require('chalk')

if (importLocal(__dirname)) {
  console.log(`Using local version of ${chalk.green('jinyu-cli')}`)
}

module.exports = require('../index')
module.exports.default = module.exports
