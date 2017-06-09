var ora = require('ora')
var chalk = require('chalk')
var webpack = require('webpack')
var webpackConfig

// Load the right webpack config file.
switch (process.env.NODE_ENV) {
    case 'offline':
        webpackConfig = require('./webpack.pwa.config')
        break

    case 'production':
        webpackConfig = require('./webpack.config')
        break
}

/*
    Start spinning!
 */
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