const HTML_WEBPACK_PLUGIN = require('html-webpack-plugin')
const MINI_CSS_EXTRACT_PLUGIN = require('mini-css-extract-plugin');
const COPY_WEBPACK_PLUGIN = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    clean: true
  },
  watch: true,
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
      }
    ]
  },
  optimization: {},
  plugins: [
    new HTML_WEBPACK_PLUGIN({
      title: 'Todo List Webpack',
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new MINI_CSS_EXTRACT_PLUGIN({
      filename: '[name].css',
      ignoreOrder: false
    }),
    new COPY_WEBPACK_PLUGIN({
      patterns: [
        { from: 'src/assets/', to: 'assets/' }
      ]
    })
  ]
}
