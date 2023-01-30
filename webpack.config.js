/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: 'src/index.ts',
  mode: 'development',
  output: {
    clean: true,
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: { sources: false }
      },
      {
        test: /\.css$/,
        exclude: /styles.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: [ '@babel/preset-env' ] }
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    modules: [ path.resolve(__dirname, 'src'), 'node_modules' ],
    extensions: [ '.ts', '.js' ],
    preferRelative: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Todo List Webpack',
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/assets/',
          to: 'assets/'
        }
      ]
    })
  ]
}
