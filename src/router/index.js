// 职责:创建一个router实例,导出给main使用
// 引入vue
import Vue from 'vue'
// 引入router模块
import VueRouter from 'vue-router'
// 注册路由
Vue.use(VueRouter)
// 创建一个路由实例
const router = new VueRouter({
  routes: []
})

export default router
