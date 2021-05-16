const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const env = process.env.NODE_ENV!=undefined ? process.env.NODE_ENV : "production";


console.log(process.env.NODE_ENV)
console.log(process.env.GLOBAL_VAR)


const config= {
    entry: "./src/app.js",
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        inline: true,
        contentBase: '/',
        historyApiFallback: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/temp.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
    ],


    mode : env,
    devtool : env=="development" ? "eval"  : false,

}

module.exports = config;
