// 职责:创建一个router实例,导出给main使用
// 引入vue
import Vue from 'vue'
// 引入router模块
import VueRouter from 'vue-router'

import Login from '@/views/login'
// 注册路由
Vue.use(VueRouter)
// 创建一个路由实例
const router = new VueRouter({
  routes: [
    // name选项的作用:path路径值的别名,path路径值可以帮助找到对应的路由规则,
    // 跳转方便,$router.push('/login) 或者 $router.push({name:'login}),路径如果太长,就可以起一个name别名进行跳转.
    { path: '/', name: 'login', component: Login },

    { path: '/login', name: 'login', component: Login }
  ]
})

export default router
