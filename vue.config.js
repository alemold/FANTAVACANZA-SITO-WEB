module.exports = {
  publicPath: './',
  lintOnSave: false,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.ttf$/,
          use: 'file-loader'
        }
      ]
    }
  },
  productionSourceMap: false,
  filenameHashing: true,
  css: {
    extract: true,
    sourceMap: false
  }
};