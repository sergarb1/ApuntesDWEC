const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: {
    './part1': './src/js/part1.js',
    './part2': './src/js/part2.js',
    './part3': './src/js/part3.js',
    './part4': './src/js/part4.js',
    './part5': './src/js/part5.js',
    './part6': './src/js/part6.js',
    './part7': './src/js/part7.js',
    './part8': './src/js/part8.js',
    './part9': './src/js/part9.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production',
  // devtool: 'eval-source-map',
  devServer: {
    publicPath: '/',
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true, // Mira cambios en /dist
    writeToDisk: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new CopyPlugin(
      [
        { from: 'src/html', to: './', force: true }, // Cogen la direccion destino de contentBase
        { from: 'src/css', to: './', force: true },
        { from: 'src/assets', to: './assets', force: true }
      ]
    ),
    new ESLintPlugin()
  ]
}
