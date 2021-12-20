const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'index.[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'XDML-写代码啦',
            template: 'src/assets/index.html'
        })
    ],
    module: {
        rules: [{
                test: /\.(png|svg|jpg|gif)$/i,
                use: ['file-loader']
            },
            {
                test: /\.styl$/i,
                loader: ["style-loader", "css-loader", "stylus-loader"]
            },
            {
                test: /\.less$/i,
                loader: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            // Prefer `dart-sass`
                            implementation: require('dart-sass'),
                        },
                    },
                ],
            },
        ],
    },
}