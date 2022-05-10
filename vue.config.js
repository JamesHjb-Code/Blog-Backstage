const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// 自动导入elementPlus组件库
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
// 修改webpack配置
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  configureWebpack: config => {
    config.plugins.push(AutoImport({
      resolvers: [ElementPlusResolver()]
    }))
    config.plugins.push(Components({
      resolvers: [ElementPlusResolver()]
    }))
  },
  chainWebpack: config => {
    // 处理
    config.module.rules.delete('svg') // 重点:删除默认配置中处理svg,
    config.module
        .rule('svg-sprite-loader')
        .test(/\.svg$/)
        .include
        .add(resolve('src/assets/icons')) // 处理svg目录
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
            symbolId: 'icon-[name]'
        })
  }
}
