const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('../config')

const IS_PROD = process.env.NODE_ENV === 'production'
const CSS_FILENAME_PATTERN = `[name]${IS_PROD ? '.min' : ''}.css`

const resolve = (...args) => {
  return path.resolve(__dirname, '..', ...args)
}

const webpackConfig = {
  entry: resolve('src', 'main.css'),
  output: {
    path: config.build.root,
    publicPath: config.build.publicPath,
    filename: CSS_FILENAME_PATTERN
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 }},
            { loader: 'postcss-loader' }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(CSS_FILENAME_PATTERN)
  ]
}

module.exports = webpackConfig
