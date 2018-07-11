import Vue from 'vue'
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
        page: state.page
      }).then(resp => {
          commit('success', resp.items)
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
  success (state, items) {
    state.status = 'success'
    Vue.set(state, 'list', state.list.concat(items))
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
