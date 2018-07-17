import { WgApiGet } from '@/utils/WgApi'

const state = { 
  status: '' 
}

const getters = {}

const actions = {
  fetchData ({commit}, id) {
    return new Promise((resolve, reject) => {
      commit('fetchData')
      if (localStorage.getItem('wg-content-home')) {
        commit('success')
        resolve(JSON.parse(localStorage.getItem('wg-content-home')))
        return   
      }
      WgApiGet({ url: 'wg_home_example.php' }, {
        id: id
      }).then(resp => {
          commit('success')
          localStorage.setItem('wg-content-home', JSON.stringify(resp))
          resolve(resp)
        })
        .catch(err => {
          commit('error')
          reject(err)
        })
    })
  },
}

const mutations = {
  fetchData (state) {
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
