var path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        antmBCBS: './src/projects/anthemMedicaid/anthemMedicaid.js'
    },
    output: {
        path: path.join(__dirname, 'src', 'bundle'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style-loader!css-loader"}
        ],
        rules: [{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}]
    }
}