const path = require('path')

module.exports = {
  build: {
    root: path.resolve(__dirname, '..', 'dist'),
    publicPath: '/assets/'
  }
}
