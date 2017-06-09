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
                'index.html',
                'https://fonts.googleapis.com/icon?family=Material+Icons',
                'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.11.0/styles/github.min.css'
            ],
        })
    ]
})

module.exports = pwaConfig