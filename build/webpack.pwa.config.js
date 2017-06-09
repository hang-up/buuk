var config = require('./webpack.config')
var merge = require('webpack-merge')
var OfflinePlugin = require('offline-plugin');

// Extends webpack plugins.
var pwaConfig = merge(config, {
    plugins: [
        new OfflinePlugin({
            publicPath: '/dist/',
            ServiceWorker: {
                navigateFallbackURL: '/',
                events: true
            },
            externals: [
                'index.html'
            ],
        })
    ]
})

module.exports = pwaConfig