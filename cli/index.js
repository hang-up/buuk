#!/usr/bin/env node


const commander = require('commander')
const shell = require('shelljs')
const chalk = require('chalk')
const cp = require('cp-file').sync

// App.
commander
    .version('0.0.1')
    .description('Documentation generator')

// Init
commander
    .command('init <folder>')
    .alias('i')
    .description('Initialize buuk entry and output folders')
    .action(folder => {
        try {
            // TODO: user input for name of the app and check if folder already exists

            // Create destination folder
            shell.mkdir('-p', folder)
            shell.cd(folder)
            shell.mkdir('-p', 'docs')
            shell.cd('..')

            // Templated init folder.
            cp(`${__dirname}/manifest.json`, `${shell.pwd().stdout}/${folder}/manifest.json`)
            console.log(chalk.green('Buuk initialized!'))
        }
        catch(e) {
            console.log(chalk.red('Error when trying to initialize Buuk. See log below:'))
            console.log(e)
        }
    })

// Build
commander
    .command('build')
    .alias('b')
    .description('Bundle your documentation')

commander.parse(process.argv)