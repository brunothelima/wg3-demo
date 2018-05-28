import Vue from 'vue'
import Vuex from 'vuex'
import WgUser from './modules/WgUser'
import WgAuth from './modules/WgAuth'
import WgUi from './modules/WgUi'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    WgUser,
    WgAuth,
    WgUi,
  },
  strict: debug,
})
