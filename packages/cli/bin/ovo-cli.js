#!/usr/bin/env node
const importLocal = require('import-local')
const chalk = require('chalk')

if (importLocal(__dirname)) {
  console.log(`Using local version of ${chalk.green('ovo-cli')}`)
}

module.exports = require('../lib/index.js')

module.exports.default = module.exports
