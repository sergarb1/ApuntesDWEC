const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'main.js',
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
