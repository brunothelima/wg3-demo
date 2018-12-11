import Vue from 'vue'
import VueI18n from 'vue-i18n'
import WgApp from '@/WgApp.vue'
import router from '@/router'
import store from '@/store'

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'pt',
})

const app = new Vue({
  render: h => h(WgApp),
  router,
  store,
  i18n,
})

if (process.env.NODE_ENV !== 'production') {
  setTimeout(() => { app.$mount('#wgApp') }, 500)
} else {
  app.$mount('#wgApp')
}
