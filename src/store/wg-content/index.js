import { WgApiGet } from '@/utils/WgApi'

import WgContentList from './WgContentList'
import WgContentRelated from './WgContentRelated'
import WgContentHome from './WgContentHome'

const state = { 
  status: '', 
}

const getters = { }

const actions = {
  fetchById ({commit}, id) {
    return new Promise((resolve, reject) => { 
      commit('fetchById')
      if (localStorage.getItem('wg-content-post')) {
        commit('success')
        resolve(JSON.parse(localStorage.getItem('wg-content-post')))
        return   
      }
      WgApiGet({ url: 'wg_content_fetch_by_id.php' }, {
        id: id
      }).then(resp => {
          commit('success', resp)
          localStorage.setItem('wg-content-post', JSON.stringify(resp.content))
          resolve(resp.content)
        })
        .catch(err => {
          commit('error')
          reject(err)
        })
    })
  },
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
    list: WgContentList,
    related: WgContentRelated,
    home: WgContentHome,
  }
}
