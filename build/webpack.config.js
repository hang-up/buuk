var path = require('path')
var webpack = require('webpack')

// Include this to visualize output content.
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
    entry: {
        'bundle': './src/main.js',
        'vendor': ['lodash', 'markdown-it-highlightjs', 'jquery', 'materialize-css/dist/js/materialize.min']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this nessessary.
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules\/(?!(markdown-it-highlightjs|markdown-it-mermaid)\/).*/, // https://github.com/webpack/webpack/issues/2031
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ["env", {
                                "modules": false
                            }]
                        ],
                        plugins: [require('babel-plugin-transform-object-rest-spread')]
                    }
                }
            },
            {
                test: /\.(sass|scss)$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.md/,
                use: 'raw-loader'
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'jquery': 'jquery/dist/jquery.min.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    plugins: [
        // https://github.com/Dogfalo/materialize/issues/1229#issuecomment-269185997
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: "jquery",
            'window.$': 'jquery',
            'window.jQuery': 'jquery',
        })
        // new BundleAnalyzerPlugin()
    ],
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'pwa') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: function (module) {
                // This prevents stylesheet resources with the .css or .scss extension
                // from being moved from their original chunk to the vendor chunk
                if(module.resource && (/^.*\.(css|scss)$/).test(module.resource)) {
                    return false;
                }
                return module.context && module.context.indexOf("node_modules") !== -1;
            }
        }),
        // Moved webpack bootstrap logic into a separate file.
        // https://webpack.js.org/plugins/commons-chunk-plugin/#manifest-file
        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest",
            minChunks: Infinity
        }),
        // Look through all lazy loaded chunks, and if we find the same module appearing across 2 chunks,
        // move them into a separate async commons chunk.
        new webpack.optimize.CommonsChunkPlugin({
            minChunks: 2,
            async: true,
            children: true
         }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}
