const webpack = require('webpack')
const rimraf = require('rimraf')
const Promise = require('bluebird')
const chalk = require('chalk')
const webpackConfig = require('./webpack.config')
const config = require('../config')

const rm = Promise.promisify(rimraf)
const pWebpack = Promise.promisify(webpack)

rm(config.build.root)
  .then(() => pWebpack(webpackConfig))
  .then(stats => {
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      return Promise.reject(new Error('Build failed with errors'))
    }
  })
  .catch(err => {
    const msg = err.message ? err.message : 'Error occurs'

    console.log(chalk.red(msg + '\n'))
    process.exit(1)
  })
