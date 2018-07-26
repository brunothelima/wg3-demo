module.exports = {
  baseUrl: '/wg3',
  css: {
    loaderOptions: {
      sass: {
        data: '@import "src/assets/scss/_wg-app.scss";'
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule("i18n")
      .resourceQuery(/blockType=i18n/)
      .use("i18n")
        .loader("@kazupon/vue-i18n-loader")
        .end()
  }
}