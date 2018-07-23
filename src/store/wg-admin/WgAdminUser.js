import Vue from 'vue'
import { WgApiGet } from '@/utils/WgApi'

const state = { 
  status: '', 
  profile: JSON.parse(localStorage.getItem('wg-admin-user-profile'))
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
          localStorage.setItem('wg-admin-user-profile', JSON.stringify(profile))
          resolve()
        })
        .catch(err => {
          commit('error')
          commit('setProfile', {})
          localStorage.removeItem('wg-admin-user-profile')
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
