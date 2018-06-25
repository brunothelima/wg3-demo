import { 
  WG_FORM_POST_REQUEST,
  WG_FORM_POST_REQUEST_SUCCESS,
  WG_FORM_POST_REQUEST_ERROR
} from '@/store/actions/WgForm'

import WgApiCall from '@/utils/WgApi'

const state = {
  status: '',
}

const getters = {
  formStatus: state => state.status,
}

const actions = {
  [WG_FORM_POST_REQUEST]: ({commit}, action, form) => {
    return new Promise((resolve, reject) => {
      commit(WG_FORM_POST_REQUEST, form)
      WgApiCall({url: action, method: 'POST', ...form})
        .then(resp => {
          commit(WG_FORM_POST_REQUEST_SUCCESS, form)
          resolve(resp)
        })
        .catch(err => {
          commit(WG_FORM_POST_REQUEST_ERROR, form)
          reject(err)
        })
    })
  },
}

const mutations = {
  [WG_FORM_POST_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [WG_FORM_POST_REQUEST_SUCCESS]: (state) => {
    state.status = 'success'
  },
  [WG_FORM_POST_REQUEST_ERROR]: (state) => {
    state.status = 'error'
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
