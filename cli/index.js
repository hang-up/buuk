#!/usr/bin/env node


const commander = require('commander')
const shell = require('shelljs')
const chalk = require('chalk')
const cp = require('cp-file').sync
const jsonfile = require('jsonfile')
const fs = require('fs')

const inquirer = require('inquirer')

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Project name',
        default: 'Buuk'
    },

    {
        type: 'input',
        name: 'short_name',
        message: 'Project short name: fewer than 12 characters to not be truncated on homescreens',
        default: 'Buuk'
    },

    {
        type: 'input',
        name: 'description',
        message: 'Project description',
        default: 'A Buuk project.'
    }
]



// App.
commander
    .version('0.0.1')
    .description('Buuk CLI')

// Init
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
                    if (!a.folderDoesExist) process.exit(1)
                    else {
                        inquirer.prompt(questions).then(answers => {

                            // Create destination folder.
                            shell.mkdir('-p', folder)
                            shell.cd(folder)
                            shell.mkdir('-p', 'docs')
                            shell.cd('..')

                            // Write manifest file.
                            answers = {...answers, articles: {}}

                            jsonfile.writeFileSync(`${__dirname}/manifest.json`, answers, {spaces: 2, EOL: '\r\n'})
                            cp(`${__dirname}/manifest.json`, `${shell.pwd().stdout}/${folder}/manifest.json`)
                            console.log(chalk.green('Buuk initialized!'))
                        });
                    }
                }).catch(e => console.log(e));
            }
            else {
                inquirer.prompt(questions).then(answers => {

                    // Create destination folder.
                    shell.mkdir('-p', folder)
                    shell.cd(folder)
                    shell.mkdir('-p', 'docs')
                    shell.cd('..')

                    // Write manifest file.
                    answers = {...answers, articles: {}}

                    jsonfile.writeFileSync(`${__dirname}/manifest.json`, answers, {spaces: 2, EOL: '\r\n'})
                    cp(`${__dirname}/manifest.json`, `${shell.pwd().stdout}/${folder}/manifest.json`)
                    console.log(chalk.green('Buuk initialized!'))
                })
                    .catch(e => console.log(e));
            }
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