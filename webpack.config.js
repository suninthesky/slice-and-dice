const path = require('path');

module.exports = {
    entry: './javascript/app.js',
    output: {
        path: path.resolve(__dirname, 'dist/javascripts'),
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