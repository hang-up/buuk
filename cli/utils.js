// Imports.
const shell = require('shelljs')
const chalk = require('chalk')
const cp = require('cp-file').sync
const jsonfile = require('jsonfile')
const inquirer = require('inquirer')
const questions = require('./questions')
const fs = require('fs')

module.exports = {
    /**
     * Internal method used to scaffold buuk output folder.
     *
     * @param folder
     * @private
     */
    _scaffoldDestinationFolder(folder) {
        inquirer.prompt(questions).then(answers => {

            // Create destination folder.
            shell.mkdir('-p', folder)
            shell.cd(folder)
            shell.mkdir('-p', 'static')
            shell.cd('static')
            shell.mkdir('-p', 'img')
            shell.cd('..')
            shell.mkdir('-p', 'docs')
            shell.cd('..')

            /*
                3 files to create:
                    - manifest.json
                    - buuk-config.js
                    - .buukrc.json
             */

            /*
                Manifest.json
              */
            const manifest = { articles: {} }
            jsonfile.writeFileSync(`${__dirname}/manifest.json`, manifest, {spaces: 2, EOL: '\r\n'})
            cp(`${__dirname}/manifest.json`, `${shell.pwd().stdout}/${folder}/manifest.json`)


            /*
                buuk-config.js
             */
            const config = {
                /*
                  name and sub are displayed on the default homepage.
                  short_name is displayed at app startup and on top of the navbar.
                  description should provide additional details about what the Bük is.
                 */
                "name": answers.name,
                "short_name": answers.short_name,
                "description": answers.description,

                /*
                    Custom homepage. References a markdown file under /docs by its slug.
                 */
                "homepage": null,

                /*
                    TODO: support multilang for hardcoded string AND language switch
                 */
                "language": null,

                /*
                    Toolbar / sidebar active color.
                 */
                "theme_color": null,

                /*
                    Renderer Options.
                    - breaks { boolean | true }: Enable GFM line breaks.
                    - strict { boolean | false }: Conforms to markdown.pl as much as possible. Setting this to true might resolve obscure scenarios.
                    - ignore_html { boolean | false }: Sanitizes the output, ignores any html inputted.
                    - smart_typo { boolean | false }: Subtle changes to typographic punctuation (quotes, dashes, ...)
                    - template { string | 'wiki' }: Defines the output layout.
                 */
                renderer: {
                    breaks: true,
                    strict: false,
                    ignore_html: false,
                    smart_typo: false,
                    template: 'wiki'
                },

                /*
                    TODO: Summary of articles
                 */
                "summarize_api_key": null

            }
            fs.writeFileSync(`${__dirname}/buuk-config.js`, `module.exports = ${ JSON.stringify(config, null, 4) }`, err  => {
                if (err) {
                    return console.warn('ERROR: buuk-config.js not created!')
                }
            })
            cp(`${__dirname}/buuk-config.js`, `${shell.pwd().stdout}/${folder}/buuk-config.js`)


            /*
                .buukrc.json
             */
            const path = { "base_path": `${shell.pwd().stdout}/${folder}` }
            jsonfile.writeFileSync(`${__dirname}/.buukrc.json`, path, {spaces: 2, EOL: '\r\n'})
            cp(`${__dirname}/.buukrc.json`, `${shell.pwd().stdout}/${folder}/.buukrc.json`)


            // Notice.
            console.log(chalk.green('Buuk initialized!'))
        }).catch(e => console.warn(e));
    }
}

