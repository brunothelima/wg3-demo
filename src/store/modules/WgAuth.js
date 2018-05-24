import 'es6-promise/auto'

import { WG_AUTH_REQUEST, WG_AUTH_ERROR, WG_AUTH_SUCCESS, WG_AUTH_LOGOUT } from '@/store/actions/WgAuth'
import { WG_USER_REQUEST } from '@/store/actions/WgUser'
import WgApiCall from '@/utils/WgApi'

const state = { token: localStorage.getItem('wg-user-token') || '', status: '', hasLoadedOnce: false }

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
  hasLoadedOnce: state => state.hasLoadedOnce,
}

const actions = {
  [WG_AUTH_REQUEST]: ({commit, dispatch}, user) => {
    return new Promise((resolve, reject) => {
      commit(WG_AUTH_REQUEST)
      WgApiCall({url: 'wg_auth_request.php', data: user, method: 'POST'})
      .then(resp => {
        localStorage.setItem('wg-user-token', resp.token)
        commit(WG_AUTH_SUCCESS, resp)
        dispatch(WG_USER_REQUEST)
        resolve(resp)
      })
      .catch(err => {
        commit(WG_AUTH_ERROR, err)
        localStorage.removeItem('wg-user-token')
        reject(err)
      })
    })
  },
  [WG_AUTH_LOGOUT]: ({commit}) => {
    return new Promise((resolve) => {
      commit(WG_AUTH_LOGOUT)
      localStorage.removeItem('wg-user-token')
      resolve()
    })
  }
}

const mutations = {
  [WG_AUTH_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [WG_AUTH_SUCCESS]: (state, resp) => {
    state.status = 'success'
    state.token = resp.token
    state.hasLoadedOnce = true
  },
  [WG_AUTH_ERROR]: (state) => {
    state.status = 'error'
    state.hasLoadedOnce = true
  },
  [WG_AUTH_LOGOUT]: (state) => {
    state.token = ''
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
