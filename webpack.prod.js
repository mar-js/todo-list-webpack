const HTML_WEBPACK_PLUGIN = require('html-webpack-plugin')
const COPY_WEBPACK_PLUGIN = require("copy-webpack-plugin");
const TERSER_WEBPACK_PLUGIN = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
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
  resolve: {
    extensions: ['.ts', '.js'],
    preferRelative: true
  },
  devServer: {
    static: PATH.join(__dirname, "dist"),
    compress: true,
    port: 4000,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TERSER_WEBPACK_PLUGIN(),
    ]
  },
  plugins: [
    new HTML_WEBPACK_PLUGIN({
      title: 'Todo List Webpack',
      // filename: 'index.html',
      template: 'src/index.html'
    }),
    new COPY_WEBPACK_PLUGIN({
      patterns: [
        { from: 'src/assets/', to: 'assets/' }
      ]
    })
  ]
}
