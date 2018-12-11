import Vue from 'vue'
import { setCCPs } from '@/utils/WgCCP'

const state = { 
  theme: {},
  target: {},
  preview: 'large',
  view: 'list'
}

const getters = {}

const actions = {}

const mutations = {
  setTheme (state, props) {
    Vue.set(state, 'theme', Object.assign(state.theme, props))
    setCCPs(state.target, state.theme)
  },
  setTarget (state, target) {
    Vue.set(state, 'target', target)
  },
  setPreview (state, preview) {
    state.preview = preview
  },
  setView (state, view) {
    state.view = view
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
