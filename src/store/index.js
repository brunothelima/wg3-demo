import Vue from 'vue'
import Vuex from 'vuex'
import WgUser from './modules/WgUser'
import WgAuth from './modules/WgAuth'
import WgTheme from './modules/WgTheme'
import WgForm from './modules/WgForm'
import WgPost from './modules/wg-post/WgPost'
import WgPostRelated from './modules/wg-post/WgPostRelated'
import WgReadMore from './modules/wg-post/WgReadMore'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    WgUser,
    WgAuth,
    WgTheme,
    WgForm,
    WgPost,
    WgPostRelated,
    WgReadMore,
  },
  strict: debug,
})
