import Vue from 'vue'
import { WgApiGet } from '@/utils/WgApi'

const state = { 
  status: '', 
  profile: {} 
}

const getters = {
  isProfileLoaded: state => Object.keys(state.profile).length > 0,
}

const actions = {
  fetchProfile ({commit, rootState}) {
    return new Promise((resolve, reject) => {
      commit('fetchProfile')
      WgApiGet({ url: 'wg_user_fetch_by_id.php' }, { 
        token: rootState.admin.auth.token 
      }).then(resp => {
          commit('success', resp)
          resolve(resp)
        })
        .catch(err => {
          commit('error', err)
          reject(err)
        })
    })
  },
}

const mutations = {
  fetchProfile (state) {
    state.status = 'loading'
  },
  success (state, user) {
    Vue.set(state, 'profile', user)
    state.status = 'success'
  },
  error (state) {
    Vue.set(state, 'user', {})
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
