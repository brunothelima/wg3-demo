import { WgApiPost } from '@/utils/WgApi'

const state = { 
  status: '', 
}

const getters = {}

const actions = {
  submit ({commit}, data) {
    return new Promise((resolve, reject) => { 
      commit('submit')
      WgApiPost({ url: 'wg_newsletter_request.php' }, data).then(resp => {
        commit('success', resp)
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
  submit (state) {
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
