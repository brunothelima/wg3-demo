import { WgApiGet } from '@/utils/WgApi'

const state = { 
  status: '',
  page: 0,
  list: []
}

const getters = {}

const actions = {
  paginate ({commit, state}, filters) {
    return new Promise((resolve, reject) => { 
      commit('paginate')
      WgApiGet({ url: 'wg_content_list_paginate.php' }, {
        page: state.page,
        ...filters
      }).then(resp => {
          commit('success')
          localStorage.setItem('wg-content-list', JSON.stringify(resp.items))
          resolve(resp.items)
        })
        .catch(err => {
          commit('error')
          reject(err)
        })
    })
  },
}

const mutations = {
  paginate (state, page) {
    state.status = 'loading'
    state.page = page || state.page + 1
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
