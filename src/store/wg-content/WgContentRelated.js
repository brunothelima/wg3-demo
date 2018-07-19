import { WgApiGet } from '@/utils/WgApi'

const state = { 
  status: '' 
}

const getters = {}

const actions = {
  fetchByContentId ({commit}, id) {
    return new Promise((resolve, reject) => {
      commit('fetchByContentId')
      if (localStorage.getItem('wg-content-related')) {
        commit('success')
        resolve(JSON.parse(localStorage.getItem('wg-content-related')))
        return   
      }
      WgApiGet({ url: 'wg_content_related_fetch_by_id.php' }, {
        id: id
      }).then(resp => {
          commit('success')
          localStorage.setItem('wg-content-related', JSON.stringify(resp.items))
          resolve(resp.items)
        })
        .catch(err => {
          commit('error')
          reject(err)
        })
    })
  },
}

const mutations = {
  fetchByContentId (state) {
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
}
