var ora = require('ora')
var chalk = require('chalk')
var webpack = require('webpack')
var mv = require('mv')
var rimraf = require('rimraf')
var webpackConfig
var spinMessage

// Load the right webpack config file.
switch (process.env.NODE_ENV) {
    case 'offline':
        webpackConfig = require('./webpack.pwa.config')
        spinMessage = "building progressive web app"
        break

    case 'production':
        webpackConfig = require('./webpack.config')
        spinMessage = "building for production"
        break
}

/*
    Start spinning!
 */
var spinner = ora(spinMessage)
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

    if (process.env.NODE_ENV === 'offline') {
        spinner.info('Copying service worker to root...')
        mv('dist/sw.js', './sw.js', function(err) {
            console.log(chalk.cyan('Service worker moved.\n'))
            spinner.succeed('Build complete.')
        });
    }
    else {
        spinner.succeed('Deleting sw...')
        // mv('dist/sw.js', './sw.js', function(err) {
        //     console.log(chalk.cyan('Service worker deleted.\n'))
        //     spinner.succeed('Build complete.')
        // });
    }
})