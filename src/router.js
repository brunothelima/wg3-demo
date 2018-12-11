import Vue from 'vue'
import Router from 'vue-router'
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
      component: () => import('@/layouts/WgAdmin'),
      beforeEnter: isUnauthorized,
      children: [
        { 
          path: '', 
          component: () => import('@/pages/wg-admin/WgUser') 
        },
        { 
          path: '/admin/login', 
          component: () =>  import('@/pages/wg-admin/WgLogin') 
        },
        { 
          path: '/admin/theme', 
          component: () => import('@/pages/wg-admin/WgTheme') 
        },
      ]
    },
  ],
})
