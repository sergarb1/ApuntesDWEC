// Importamos bibliotecas
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'production',
    //devtool: 'eval-source-map',
    devServer: {
        publicPath: "/",
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        watchContentBase: true, // Mira cambios en /dist
        writeToDisk: true,
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        // this will apply to both plain `.js` files
        // AND `<script>` blocks in `.vue` files
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // this will apply to both plain `.css` files
        // AND `<style>` blocks in `.vue` files
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader'
          ]
        }
      ]
    },
    plugins: [ 
        new CopyPlugin(
            [
                { from: 'src/html', to: './', force: true }, // Cogen la direccion destino de contentBase
                { from: 'src/css', to: './', force: true },
            ]
        ),
        new VueLoaderPlugin()
  ],
};