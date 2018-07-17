import { WgApiGet } from '@/utils/WgApi'

const state = { 
  status: '',
  token: localStorage.getItem('wg-admin-auth-token'), 
}

const getters = {
  isAuthenticated: state => !!state.token,
}

const actions = {
  login ({commit}, loginData) {
    return new Promise((resolve, reject) => {
      commit('login')
      WgApiGet({ url: 'wg_auth_login.php'}, loginData)
        .then(resp => {
          localStorage.setItem('wg-admin-auth-token', resp.token)
          commit('success', resp)
          resolve(resp)
        })
        .catch(err => {
          commit('error', err)
          reject(err)
        })
    })
  },
  logout ({commit}) {
    return new Promise((resolve) => {
      localStorage.removeItem('wg-admin-auth-token')
      commit('logout')
      resolve()
    })
  }
}

const mutations = {
  login (state) {
    state.status = 'loading'
  },
  logout (state) {
    state.token = ''
  },
  success (state, resp) {
    state.status = 'success'
    state.token = resp.token
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
