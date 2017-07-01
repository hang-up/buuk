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
                "/manifest.json",
                "/dist/vendor.js",
                "/dist/bundle.js",
                "/dist/manifest.js",
                "/dist/fonts/roboto/Roboto-Regular.woff2",
                "/dist/fonts/roboto/Roboto-Light.woff2",
                "/dist/fonts/roboto/Roboto-Medium.woff2",
                "https://fonts.gstatic.com/s/materialicons/v22/2fcrYFNaTjcS6g4U3t-Y5UEw0lE80llgEseQY3FEmqw.woff2"
            ],
        })
    ]
})

module.exports = pwaConfig