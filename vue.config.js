module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'FantaVacanza',
      favicon: 'src/assets/images/logo.png'
    }
  },
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