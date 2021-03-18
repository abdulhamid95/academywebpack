const path = require('path');
const HtmlWebpackPligin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: {
        filename: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist')
    },

    module: {
        rules : [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader",
                    "sass-loader"
                 ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',        
            },
        ]
    },

    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPligin({
            filename: "index.html",
            template: "./src/index.html"
        }),
        

    ],
}