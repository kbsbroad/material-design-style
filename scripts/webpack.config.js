const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const webpackConfig = {
  context: path.resolve(__dirname, '..', 'src'),
  entry: 'index.js',
  output: {

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
