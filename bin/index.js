#! /usr/bin/env node
"use strict";

var _commander = require("commander");

const program = new _commander.Command();
program.name('jinyu-cli').description('jinyu cli tools').version('0.0.1');
program.command('hello').description('hello commander').argument('<string>', 'console name').option('-n, --name', 'show you name').option('-s, --separator <char>', 'separator character', ',').action((str, options) => {
  if (options.name) {
    console.log(`hello ${str}, it's happy to meet you!`);
  }
});
program.parse(process.argv);