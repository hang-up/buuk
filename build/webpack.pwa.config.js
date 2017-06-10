var config = require('./webpack.config')
var merge = require('webpack-merge')
var OfflinePlugin = require('offline-plugin');

// Extends webpack plugins.
var pwaConfig = merge(config, {
    plugins: [
        new OfflinePlugin({
            publicPath: '/',
            ServiceWorker: {
                navigateFallbackURL: '/',
                events: true
            },
            caches: {
                main: [
                    "/"
                ],
                additional: [],
                optional:[]
            },
            externals: [
                "/dist/vendor.js",
                "/dist/bundle.js",
                '/'
            ],
        })
    ]
})

module.exports = pwaConfig