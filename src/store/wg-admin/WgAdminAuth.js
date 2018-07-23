import { WgApiGet } from '@/utils/WgApi'

const state = { 
  status: '',
  token: localStorage.getItem('wg-admin-auth-token'), 
}

const getters = {
  isAuthenticated: state => !!state.token,
}

const actions = {
  fetchToken ({commit}, loginData) {
    commit('fetchToken')
    return new Promise((resolve, reject) => {
      WgApiGet({ url: 'wg_login.php'}, loginData)
        .then(response => {
          commit('success')
          commit('setToken', response.token)
          localStorage.setItem('wg-admin-auth-token', response.token)
          resolve()
        })
        .catch(err => {
          commit('error')
          commit('setToken', '')
          localStorage.removeItem('wg-admin-auth-token')
          reject(err)
        })
    })
  },
}

const mutations = {
  fetchToken (state) {
    state.status = 'loading'
  },
  setToken (state, token) {
    state.token = token
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
