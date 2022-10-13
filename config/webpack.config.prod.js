const webpackMerge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.config.base");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const webpckConfig = webpackMerge.merge(baseWebpackConfig, {
    mode: "production",
    stats: { children: false, warnings: false },
    optimization: {
        minimizer: [
            new TerserWebpackPlugin({
                terserOptions: {
                    warnings: false,
                    compress: {
                        warnings: false,
                        drop_console: false,
                        // drop_code: false,
                        drop_debugger: true
                    },
                    output: {
                        comments: false,
                        beautify: false
                    },
                    mangle: false
                },
                parallel: true,
                // sourceMap: true
            })
        ], splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: 'initial',
                    minChunks: 3,
                    enforce: true
                },
            },
        },


    }
})
module.exports = webpckConfig;