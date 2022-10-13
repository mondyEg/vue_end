// webpack.config.js
const path = require('path')
const webpack = require("webpack")

const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const utils = require("./utils.js")
const webpackConfig = {
    mode: 'development',
    entry: {
        server: path.join(utils.APP_PATH, '/index.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: utils.DIST_PATH
    },
    devtool: 'eval-cheap-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: [path.join(utils.APP_PATH, 'node_modules')]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "prod") ? "'production'" : "'development'"
            }
        })
    ],
    externals: [nodeExternals()],
    target: 'node',
}

module.exports = webpackConfig