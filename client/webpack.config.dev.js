var path = require("path");

module.exports = {
    entry: {
        app: [
            "./app.js",
        ]
    },
    output: {
        path: path.join(__dirname, '../build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [{
            test: /\.js$/,
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

