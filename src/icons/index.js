import SvgIcon from '@/components/SvgIcon/_svg-icon.vue'
/*
  遍历所有本地svg图标文件，同时获取图标文件
*/
const svgRequired = require.context('./svg', false, /\.svg$/)
svgRequired.keys().forEach(item => {
  svgRequired(item)
})

export default (app) => {
  app.component('svg-icon', SvgIcon)
}
