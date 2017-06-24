var ora = require('ora')
var webpack = require('webpack')
var mv = require('mv')
var del = require('del')
var webpackConfig
var spinMessage

// Load the right webpack config file.
switch (process.env.NODE_ENV) {
    case 'pwa':
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

    if (process.env.NODE_ENV === 'pwa') {
        spinner.info('Moving service worker to root...')
        mv('dist/sw.js', './sw.js', function(err) {
            spinner.info('Service worker moved')
            spinner.succeed('Build complete.')
        });
    }
    else if (process.env.NODE_ENV === 'production') {
        spinner.warn('Deleting sw...')
        try {
            del(['sw.js']).then(function(paths) {
                spinner.info('Service worker deleted')
                spinner.succeed('Build complete.')
            });
        }
        catch (e) {
            spinner.info('No service worker found.')
            spinner.succeed('Build complete.')
        }
    }
})