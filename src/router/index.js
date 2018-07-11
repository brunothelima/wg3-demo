import Vue from 'vue'
import Router from 'vue-router'
import WgAdmin from '@/components/WgAdmin'
import WgUser from '@/components/wg-admin/WgUser'
import WgLogin from '@/components/wg-admin/WgLogin'
import WgTheme from '@/components/wg-admin/wg-theme/WgTheme'
import store from '@/store'

Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {  
  let authFallBackUrl = '/admin/login'
  if (!store.getters['admin/auth/isAuthenticated'] 
    && to.path != authFallBackUrl) {
      next(authFallBackUrl)
      return
  }
  next()
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/admin',
      component: WgAdmin,
      beforeEnter: ifNotAuthenticated,
      children: [
        { path: '', component: WgUser,},
        { path: '/admin/theme', component: WgTheme },
        { path: '/admin/login', component: WgLogin },
      ]
    },
  ],
})
