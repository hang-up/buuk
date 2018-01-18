// Imports.
const shell = require('shelljs')
const chalk = require('chalk')
const cp = require('cp-file').sync
const jsonfile = require('jsonfile')
const inquirer = require('inquirer')
const questions = require('./questions')

module.exports = {
    /**
     * Internal method used to scaffold buuk output folder.
     *
     * @param folder
     * @private
     */
    _scaffoldDestinationFolder(folder) {
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
            jsonfile.writeFileSync(`${__dirname}/.buukrc.json`, path, {spaces: 2, EOL: '\r\n'})
            cp(`${__dirname}/.buukrc.json`, `${shell.pwd().stdout}/${folder}/.buukrc.json`)

            // Notice.
            console.log(chalk.green('Buuk initialized!'))
        }).catch(e => console.warn(e));
    }
}

