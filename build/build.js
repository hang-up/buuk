var ora = require('ora')
var chalk = require('chalk')
var webpackConfig = require('./webpack.config')
var webpack = require('webpack')


var spinner = ora('building for production...')
spinner.start()

// Webpack
webpack(webpackConfig, function (err, stats) {
    if (err) throw err
    process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n')

    console.log(chalk.cyan('Build complete.\n'))

    spinner.stop()
})