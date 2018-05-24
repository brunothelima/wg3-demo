import Vue from 'vue'
import Router from 'vue-router'
import WgUser from '@/components/WgUser'
import WgHome from '@/components/WgHome'
import WgLogin from '@/components/WgLogin'
import store from '@/store'

Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'WgHome',
      component: WgHome,
    },
    {
      path: '/account',
      name: 'WgUser',
      component: WgUser,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/login',
      name: 'WgLogin',
      component: WgLogin,
      beforeEnter: ifNotAuthenticated,
    },
  ],
})
