import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

// 导入创建好的router模块,'@'是cue-cli提供的src路径别名
// index.js 省略了, 在目录下默认索引文件(默认加载文件index名称)
// 如果同时存在index.js,index.vue,index,json优先级和书写顺序一致,默认目前只支持这三种文件
import router from '@/router'

Vue.use(ElementUI)
// 下面这句代码会阻止显示显示生产模式的消息
Vue.config.productionTip = false

new Vue({
  // 使用router
  router,
  render: h => h(App)
}).$mount('#app')
