const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: `index.js`,
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                options: {
                    cacheDirectory: true,
                    presets: [
                        '@babel/preset-env',
                    ],
                },
                loader: 'babel-loader',
            },
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            extractComments: false,
            terserOptions: {
                format: {
                    comments: false,
                },
            },
        })],
    },
};
