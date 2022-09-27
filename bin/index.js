"use strict";

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.function.name.js");

var _commander = require("commander");

var program = new _commander.Command();
program.name('jinyu-cli').description('jinyu cli tools').version('0.0.1');
program.command('hello').description('hello commander').argument('<string>', 'console name').option('-n, --name', 'show you name').option('-s, --separator <char>', 'separator character', ',').action(function (str, options) {
  if (options.name) {
    console.log("hello ".concat(str, ", it's happy to meet you!"));
  }
});
program.parse(process.argv);