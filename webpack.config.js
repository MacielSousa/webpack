const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{
            test: /\.$?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', //Reponsavel por adicionar dentro da DOM o CSS injetando a tag <style>
                'css-loader', //interpretatr @import, url()...
                'sass-loader',
            ]
        }]
    }
}