const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: __dirname + '/src/main.js',
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: __dirname + '/online',
        filename: 'js/bundle.[hash:7].js'
    },
    devServer: {
        open: true,
        hot: true,
        port: 8080,
        contentBase: __dirname + '/src',
        compress: true
    },
    plugins: [
        new htmlWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html'
        }),
        new ExtractTextPlugin('css/[name].[hash:7].css'),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                exclude: /node_modules/,
                options: {
                    limit: 10000,                           //10000B
                    name: 'img/[name].[hash:7].[ext]',
                    publicPath: '../'
                }
            }
        ]
    }
}