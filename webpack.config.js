const webpack = require('webpack')

module.exports = {
     mode: 'development',
     entry: './src/principal.js',
     output: {
          filename: 'principal.js',
          path: __dirname + '/public'
     },
     module: {
          rules: [{
               test: /\.css$/,
               use: [
                    'style-loader', //Reponsavel por adicionar dentro da DOM o CSS injetando a tag <style>
                    'css-loader' //interpretatr @import, url()...
               ]
          }]
     }
}