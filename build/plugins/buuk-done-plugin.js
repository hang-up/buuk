var ncp = require('ncp').ncp
var chalk = require('chalk')

function BuukDonePlugin() {

}

/**
 * Plugin to copy compiled /dist under the context folder.
 *
 * @param compiler
 */
BuukDonePlugin.prototype.apply = function (compiler) {
    compiler.plugin("done", function (stats) {
        // Copy /dist from stats.outputPath to stats.context
        ncp(compiler.outputPath, `${compiler.context}/dist`, function(e) {
            if (e) {
                return console.error(e)
            }
            console.log(chalk.cyan('  Build complete.\n'))
            console.log(chalk.yellow(
                '  Tip: built files are under /dist and meant to be served over an HTTP server.\n' +
                '  Opening index.html over file:// won\'t work.\n'
            ))
        })
    })
}

module.exports = BuukDonePlugin