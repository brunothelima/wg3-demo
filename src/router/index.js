import Vue from 'vue'
import Router from 'vue-router'
import WgContainer from '@/components/WgContainer'
import WgLogin from '@/components/wg-auth/WgLogin'
import WgUser from '@/components/wg-auth/WgUser'
import WgUi from '@/components/wg-ui/WgUi'
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
      component: WgContainer,
      beforeEnter: ifNotAuthenticated,
      children: [
        { path: '', component: WgUser },
        { path: '/wg-ui', component: WgUi },
      ]
    },
    { 
      path: '/login', 
      component: WgLogin, 
    },
  ],
})
