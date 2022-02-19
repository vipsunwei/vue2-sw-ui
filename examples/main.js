import Vue from 'vue'
import App from './App.vue'

// 完整引入
import swui from '../lib/sw-vue-ui/sw-vue-ui.umd.min.js'
Vue.use(swui)

// 按需引入
// import { SwLoading } from '../packages/index'
// Vue.use(SwLoading)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
