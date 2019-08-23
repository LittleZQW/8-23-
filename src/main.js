import Vue from 'vue'
import App from './App.vue'

// 它会阻止你显示显示生产模式的消息
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
