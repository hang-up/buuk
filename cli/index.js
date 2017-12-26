#!/usr/bin/env node

// Imports.
const commander = require('commander')
const shell = require('shelljs')
const chalk = require('chalk')
const cp = require('cp-file').sync
const jsonfile = require('jsonfile')
const fs = require('fs')
const inquirer = require('inquirer')
const questions = require('./questions')



// Define App.
commander
    .version('0.0.1')
    .description('Buuk CLI')


/**
 * Command: Init
 *
 * Usage: init|i [options] <folder>
 * Initialize buuk entry and output folders
 * Options:
 *      -h, --help  output usage information
 *
 */
commander
    .command('init <folder>')
    .alias('i')
    .description('Initialize buuk entry and output folders')
    .action(folder => {
        try {

            if (fs.existsSync(folder)) {

                inquirer.prompt([
                    {
                        type: 'confirm',
                        name: 'folderDoesExist',
                        message: 'The folder you have specified already exists. Override it?',
                        default: false
                    }
                ]).then(a => {
                    if (!a.folderDoesExist) {
                        process.exit(1)
                    }
                    else {
                        _scaffoldDestinationFolder(folder)
                    }
                }).catch(e => console.warn(e));
            }
            else {
                _scaffoldDestinationFolder(folder)
            }
        }
        catch(e) {
            console.log(chalk.red('Error when trying to initialize Buuk project. See log below:'))
            console.log(e)
        }
    })


/**
 * Command: Build
 *
 * TODO: Actually code it.
 *
 */
commander
    .command('build')
    .alias('b')
    .description('Bundle your documentation')


// Parse options.
commander.parse(process.argv)


/**
 * Internal method used to scaffold buuk output folder.
 *
 * @param folder
 * @private
 */
function _scaffoldDestinationFolder(folder) {
    inquirer.prompt(questions).then(answers => {
        // Create path object.
        let path = { "base_path": `${shell.pwd().stdout}/${folder}` }

        // Create destination folder.
        shell.mkdir('-p', folder)
        shell.cd(folder)
        shell.mkdir('-p', 'docs')
        shell.cd('..')

        // Write object to json file.
        answers = {...answers, articles: {}}
        jsonfile.writeFileSync(`${__dirname}/manifest.json`, answers, {spaces: 2, EOL: '\r\n'})

        // Copy file to end folder.
        cp(`${__dirname}/manifest.json`, `${shell.pwd().stdout}/${folder}/manifest.json`)

        // Save base path in an .buukrc file
        jsonfile.writeFileSync(`${__dirname}/.buukrc`, path, {spaces: 2, EOL: '\r\n'})
        cp(`${__dirname}/.buukrc`, `${shell.pwd().stdout}/${folder}/.buukrc`)

        // Notice.
        console.log(chalk.green('Buuk initialized!'))
    }).catch(e => console.warn(e));
}