import Vue from 'vue'
import WgApp from '@/WgApp.vue'
import VueLazyload from 'vue-lazyload'
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false
Vue.use(VueLazyload)

const app = new Vue({
  render: h => h(WgApp),
  router,
  store,
})

if (process.env.NODE_ENV !== 'production') {
  setTimeout(() => { app.$mount('#wgApp'); }, 500);
} else {
  app.$mount('#wgApp');
}
