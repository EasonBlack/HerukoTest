module.exports = {
    entry: "./client/app.js",
    output: {
        path: './build',
        filename: 'bundle.js',
        publicPath: '/build'
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/, exclude: /node_modules/, loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}