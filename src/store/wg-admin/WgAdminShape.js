const state = { 
  type: 'gradient',
  position: 'right',
  visible: false
}

const getters = {
  isVisible: state => state.visible,
}

const actions = {}

const mutations = {
  setType (state, type) {
    state.type = type
  },
  setPosition (state, position) {
    state.position = position
  },
  toggle (state) {
    state.visible = !state.visible
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
