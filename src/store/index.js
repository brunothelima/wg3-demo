import Vue from 'vue'
import Vuex from 'vuex'

import WgAdmin from './wg-admin/'
import WgContent from './wg-content/'
import WgForm from './wg-form/'
import WgTheme from './wg-theme/'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  modules: {
    admin: WgAdmin,
    content: WgContent,
    form: WgForm,
    theme: WgTheme,
  },
})
