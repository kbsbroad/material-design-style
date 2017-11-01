module.exports = ({ file, env }) => ({
  // sugrass는 indent 방식으로 블록을 구분하니 주의
  parser: file.extname === '.sss' ? 'sugarss' : false,
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {},
    'cssnano':  env === 'production' ? {} : false
  }
})
