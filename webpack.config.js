const webpack = require('webpack')
const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },

            {
                test: /\.(css|less)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                    },
                ]
            },
        ],
    },

    plugins: [
        new webpack.SourceMapDevToolPlugin({}),

        new MiniCssExtractPlugin({
            filename: 'bundle.css',
        })
    ],
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin(),
    // ],
    //
    // optimization: {
    //     splitChunks: {
    //         chunks: 'async',
    //         minChunks: 2,
    //     },
    //     minimizer: [
    //         new UglifyJsPlugin({
    //             uglifyOptions: {
    //                 compress: false,
    //                 mangle: true,
    //                 output: {
    //                     comments: false,
    //                 },
    //             },
    //             sourceMap: true,
    //         }),
    //     ],
    // },
}
