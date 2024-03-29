import { WgApiGet } from '@/utils/WgApi'

import WgThemeEditor from './WgThemeEditor'

const state = { 
  status: '', 
}

const getters = { }

const actions = {
  fetchById ({commit}, id) {
    return new Promise((resolve, reject) => { 
      commit('fetchById')
      WgApiGet({ url: 'wg_theme_fetch_by_id.php' }, {
        id: id
      }).then(resp => {
          commit('success')
          resolve(resp)
        })
        .catch(err => {
          commit('error')
          reject(err)
        })
    })
  }
}

const mutations = {
  fetchById (state) {
    state.status = 'loading'
  },
  success (state) {
    state.status = 'success'
  },
  error (state) {
    state.status = 'error'
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  modules: {
    editor: WgThemeEditor,
  }
}
