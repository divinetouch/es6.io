const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const nodeEnv = process.env.NODE_ENV || 'production'

module.exports = {
    devtool: 'source-map',
    mode: nodeEnv === 'productiion' ? 'proudction' : 'development',
    entry: {
        filename: './app.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: 'dist',
        historyApiFallback: true,
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                loaders: ['babel-loader']
            }
        ]
    },
    optimization: {
        // https://webpack.js.org/configuration/optimization/#optimization-minimizer
        minimizer: [
            //https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
            new UglifyJsPlugin({
                test: /\.js($|\?)/i,
                cache: false,
                parallel: true,
                sourceMap: true
            })
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(nodeEnv)}
        })
    ]
}