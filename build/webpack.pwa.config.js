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
                additional: [
                    ':externals:'
                ],
                optional:[]
            },

            // Removes warning for about `additional` section usage
            safeToUseOptionalCaches: true,

            externals: [
                "/",
                "/dist/vendor.js",
                "/dist/bundle.js",
                "/dist/manifest.js"
            ],
        })
    ]
})

module.exports = pwaConfig