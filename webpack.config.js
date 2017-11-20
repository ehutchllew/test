module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style-loader!css-loader"}
        ],
        rules: [{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}]
    }
}