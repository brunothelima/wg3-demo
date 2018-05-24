import { WG_USER_REQUEST, WG_USER_ERROR, WG_USER_SUCCESS } from '@/store/actions/WgUser'
import { WG_AUTH_LOGOUT } from '@/store/actions/WgAuth'
import Vue from 'vue'
import WgApiCall from '@/utils/WgApi'

const state = { status: '', profile: {} }

const getters = {
  getProfile: state => state.profile,
  isProfileLoaded: state => !!state.profile.name,
}

const actions = {
  [WG_USER_REQUEST]: ({commit, dispatch}) => {
    commit(WG_USER_REQUEST)
    WgApiCall({url: 'user/me'})
      .then(resp => {
        commit(WG_USER_SUCCESS, resp)
      })
      .catch(resp => {
        commit(WG_USER_ERROR)
        // if resp is unauthorized, logout, to
        dispatch(WG_AUTH_LOGOUT)
      })
  },
}

const mutations = {
  [WG_USER_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [WG_USER_SUCCESS]: (state, resp) => {
    state.status = 'success'
    Vue.set(state, 'profile', resp)
  },
  [WG_USER_ERROR]: (state) => {
    state.status = 'error'
  },
  [WG_AUTH_LOGOUT]: (state) => {
    state.profile = {}
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
