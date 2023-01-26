import { Configuration } from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

const CONFIG: Configuration = {
  entry: './src/index.ts',
  mode: 'development',
  output: {
    clean: true,
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  watch: true,
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
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
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

export default CONFIG
