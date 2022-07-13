const HTML_WEBPACK_PLUGIN = require('html-webpack-plugin')
const MINI_CSS_EXTRACT_PLUGIN = require('mini-css-extract-plugin');
const COPY_WEBPACK_PLUGIN = require("copy-webpack-plugin");
const CSS_MINIMIZER_WEBPACK_PLUGIN = require('css-minimizer-webpack-plugin');
const TERSER_WEBPACK_PLUGIN = require('terser-webpack-plugin');

module.exports = {
  mode: "production",
  output: {
    clean: true,
    filename: 'main.[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          sources: false
        }
      },
      {
        test: /\.css$/,
        exclude: /styles.css$/,
        use: [ 'style-loader', 'css-loader']
      },
      {
        test: /styles.css$/,
        use: [ MINI_CSS_EXTRACT_PLUGIN.loader, 'css-loader' ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader'
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CSS_MINIMIZER_WEBPACK_PLUGIN(),
      new TERSER_WEBPACK_PLUGIN(),
    ]
  },
  plugins: [
    new HTML_WEBPACK_PLUGIN({
      title: 'Todo List Webpack',
      // filename: 'index.html',
      template: 'src/index.html'
    }),
    new MINI_CSS_EXTRACT_PLUGIN({
      filename: '[name].[fullhash].css',
      ignoreOrder: false
    }),
    new COPY_WEBPACK_PLUGIN({
      patterns: [
        { from: 'src/assets/', to: 'assets/' }
      ]
    })
  ]
}
