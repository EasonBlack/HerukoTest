var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:5000',
        "./client/app.js"
    ],
    output: {
        path: path.join(__dirname, '../build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader?presets[]=es2015']
            },
            {
                test: /\.html$/,
                loaders: ['html-loader']
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                loader: 'url-loader?limit=30000&name=/[hash].[ext]'
            }
        ]
    }
};