const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exprots = {
  chainWebpack: config => {
    config.plugins.delete('prefetch') // vue cli에서 prefetch 기능을 끕니다.
  }
}
