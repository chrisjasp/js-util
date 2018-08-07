var path = require('path');

export default () => (
    {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'ctjs-util.js',
            libraryTarget: 'umd',
            library: 'ctjs-util'
        },
        module: {
            rules: [
                {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
            ]
        },
    }
);