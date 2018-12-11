import Vue from 'vue'
import { WgApiGet } from '@/utils/WgApi'

const state = { 
  status: '', 
  profile: null
}

const getters = {
  isProfileLoaded: state => !!state.profile,
}

const actions = {
  fetchProfile ({commit, rootState}) {
    commit('fetchProfile')
    return new Promise((resolve, reject) => {
      WgApiGet({ url: 'wg_user_fetch_by_id.php' }, { 
        token: rootState.admin.auth.token 
      }).then(profile => {
          commit('success')
          commit('setProfile', profile)
          resolve()
        })
        .catch(err => {
          commit('error')
          commit('setProfile', {})
          reject(err)
        })
    })
  },
}

const mutations = {
  fetchProfile (state) {
    state.status = 'loading'
  },
  setProfile (state, profile) {
    Vue.set(state, 'profile', profile)
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
