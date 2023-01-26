/* eslint-disable @typescript-eslint/no-var-requires */
const TerserWebpackPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: 'src/index.ts',
  mode: 'production',
  output: {
    clean: true,
    filename: 'main.[contenthash].js'
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
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader'
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
      }
    ]
  },
  resolve: {
    modules: [ path.resolve(__dirname, 'src'), 'node_modules' ],
    extensions: [ '.ts', '.js' ],
    preferRelative: true
  },
  optimization: {
    minimize: true,
    minimizer: [ new TerserWebpackPlugin() ]
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
