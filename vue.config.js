const path = require('path')
module.exports = {
  outputDir: 'lib/sw-vue-ui',
  lintOnSave: false,
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },

  chainWebpack: config => {
    // 设置快捷目录别名
    config.resolve.alias.set('utils', path.resolve(__dirname, 'utils'))
    config.module
      .rule('js')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => ({ ...options, limit: 10240 }))
  },
  configureWebpack: config => {
    config.devtool = 'source-map'
    config.externals = {
      vue: {
        root: 'Vue',
        commonjs: 'Vue',
        commonjs2: 'Vue',
        amd: 'Vue'
      }
    }
  }
}
