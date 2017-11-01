const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('../config')

const resolve = (...args) => {
  return path.resolve(__dirname, '..', ...args)
}

const webpackConfig = {
  entry: resolve('src', 'main.js'),
  output: {
    path: config.build.root
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
    new ExtractTextPlugin('[name].css')
  ]
}

module.exports = webpackConfig
