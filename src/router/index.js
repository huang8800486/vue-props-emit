import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Home from '@/components/home'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    { 
      path: '/', 
      redirect: '/index'    // 默认就跳转此页面
    }, 
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
