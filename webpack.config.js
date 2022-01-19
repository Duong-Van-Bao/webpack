const path = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'ehandy.js',
        path: path.resolve(__dirname, 'dist'),
    }
}