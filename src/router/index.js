import Vue from 'vue'
import Router from 'vue-router'
import WgAdmin from '@/components/WgAdmin'
import WgAdminLogin from '@/components/WgAdminLogin'
import WgAdminUser from '@/components/WgAdminUser'
import store from '@/store'

Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next('/login')
    return
  }
  next()
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: WgAdmin,
      beforeEnter: ifNotAuthenticated,
      children: [
        { path: '/user', component: WgAdminUser, },
      ]
    },
    { 
      path: '/login', 
      component: WgAdminLogin, 
    },
  ],
})
