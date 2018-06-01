import 'es6-promise/auto'

import Vue from 'vue'
import { 
  WG_FORM_POST_ATTEMPT,
  WG_FORM_POST_VALIDATION_ERROR,
  WG_FORM_POST_VALIDATION_SUCCESS,
  WG_FORM_POST_REQUEST,
  WG_FORM_POST_REQUEST_SUCCESS,
  WG_FORM_POST_REQUEST_ERROR
} from '@/store/actions/WgForm'
import WgApiCall from '@/utils/WgApi'

const getAttemptByStamp = (state, stamp) => {
 return state.attempts.filter(att => att.stamp === stamp)[0]
}

const state = {
  attempts: [],
}

const getters = {}

const actions = {
  [WG_FORM_POST_REQUEST]: ({commit, dispatch}, action, form) => {
    return new Promise((resolve, reject) => {
      commit(WG_FORM_POST_REQUEST, form)
      WgApiCall({url: form.action, method: 'POST', ...form})
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
  [WG_FORM_POST_ATTEMPT]: (state, form) => {
    state.attempts.push({
        stamp: form.stamp,
        data: form.data,
        status: 'post_request_attempt'
    });
  },
  [WG_FORM_POST_VALIDATION_SUCCESS]: (state, form) => {
    var attempt = getAttemptByStamp(state, form.stamp);
    Vue.set(attempt, 'data', form.data)
    Vue.set(attempt, 'status', 'post_request_validation_success')
  },
  [WG_FORM_POST_VALIDATION_ERROR]: (state, form) => {     
    var attempt = getAttemptByStamp(state, form.stamp);
    Vue.set(attempt, 'data', form.data)
    Vue.set(attempt, 'status', 'post_request_validation_error')
  },
  [WG_FORM_POST_REQUEST]: (state, form) => {
    var attempt = getAttemptByStamp(state, form.stamp);
    Vue.set(attempt, 'data', form.data)
    Vue.set(attempt, 'status', 'post_request_loading')
  },
  [WG_FORM_POST_REQUEST_SUCCESS]: (state, form) => {
    var attempt = getAttemptByStamp(state, form.stamp);
    Vue.set(attempt, 'data', form.data)
    Vue.set(attempt, 'status', 'post_request_success')
  },
  [WG_FORM_POST_REQUEST_ERROR]: (state, form) => {
    var attempt = getAttemptByStamp(state, form.stamp);
    Vue.set(attempt, 'data', form.data)
    Vue.set(attempt, 'status', 'post_request_error')
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
