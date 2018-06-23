const path = require('path');

module.exports = {
    entry: './webpack/app.js',
    output: {
        path: path.resolve(__dirname, 'assets/javascripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    }
};