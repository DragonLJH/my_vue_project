import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import user from '@/components/user'
import homepage from '@/components/homepage'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Login'
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: homepage
    }
  ], linkActiveClass: 'myactive'
})
