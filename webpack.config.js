const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const config = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.png/,
                type: 'asset/resource'
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        static: './dist',
        hot: true,
    },
    plugins: [
        new ESLintPlugin(),
        new HtmlWebpackPlugin({
            hash: false,
            minify: false,
            inject: false,
            title: 'SuperSlimo',
            filename: 'index.html',
            template: 'src/index.tmpl'
        }),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        config.mode = 'development';
        return config;
    }
    if (argv.mode === 'production') {
        config.mode = 'production';
        delete config.devtool;
        config.plugins[1].hash = true;
        config.plugins[1].minify = true;
        return config;
    }
};