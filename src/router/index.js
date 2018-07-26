import Vue from 'vue'
import Router from 'vue-router'
import WgAdmin from '@/components/WgAdmin'
import WgUser from '@/components/wg-admin/WgUser'
import WgLogin from '@/components/wg-admin/WgLogin'
import WgTheme from '@/components/wg-admin/wg-theme/WgTheme'
import store from '@/store'

Vue.use(Router)

const isUnauthorized = (to, from, next) => {  
  let fallback = '/admin/login'
  if (!store.getters['admin/auth/isAuthenticated'] 
    && to.path != fallback) {
      next(fallback)
      return
  }
  next()
}

export default new Router({
  mode: 'history',
  // base: '/wg3/',
  routes: [
    {
      path: '/admin',
      component: WgAdmin,
      beforeEnter: isUnauthorized,
      children: [
        { path: '', component: WgUser,},
        { path: '/admin/login', component: WgLogin },
        { path: '/admin/theme', component: WgTheme },
      ]
    },
  ],
})
