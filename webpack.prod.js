import path from 'path'
import TerserWebpackPlugin from 'terser-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

module.exports = {
  entry: './src/index.ts',
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
    extensions: [ '.ts', '.js' ],
    preferRelative: true
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 4000
  },
  optimization: {
    minimize: true,
    minimizer: [ new TerserWebpackPlugin() ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Todo List Webpack',
      // filename: 'index.html',
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
