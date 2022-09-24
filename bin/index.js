#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var program = new commander_1.Command();
program.name('jinyu-cli').description('jinyu cli tools').version('0.0.1');
program
    .command('hello')
    .description('hello commander')
    .argument('<string>', 'console string')
    .option('--name')
    .option('-s, --separator <char>', 'separator character', ',')
    .action(function (str, options) {
    if (options.name) {
        console.log("hello ".concat(str, ", it's happy to meet you!"));
    }
});
program.parse(process.argv);
