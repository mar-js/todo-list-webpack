const PATH = require('path')
const HTML_WEBPACK_PLUGIN = require('html-webpack-plugin')
const COPY_WEBPACK_PLUGIN = require("copy-webpack-plugin");

module.exports = {
  entry: './src/index.ts',
  mode: "development",
  output: {
    clean: true,
    filename: 'bundle.js',
    path: PATH.resolve(__dirname, 'dist'),
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
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    preferRelative: true
  },
  plugins: [
    new HTML_WEBPACK_PLUGIN({
      title: 'Todo List Webpack',
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new COPY_WEBPACK_PLUGIN({
      patterns: [
        { from: 'src/assets/', to: 'assets/' }
      ]
    })
  ]
}
