import Vue from 'vue'

import { 
  WG_THEME_REQUEST, 
  WG_THEME_ERROR, 
  WG_THEME_SUCCESS,
} from '@/store/actions/WgTheme'

import WgApiCall from '@/utils/WgApi'

const state = {
  status: '',
  theme: {},
}

const getters = {
  WgThemeRequestStatus: state => state.status,
  WgThemeCurrentTheme: state => state.theme,
}

const actions = {
  [WG_THEME_REQUEST]: ({commit}, data) => {
    return new Promise((resolve, reject) => {
      commit(WG_THEME_REQUEST)
      WgApiCall({url: 'wg_theme_request.php', method: 'GET', ...data})
        .then(resp => {
          commit(WG_THEME_SUCCESS, resp)
          resolve(resp)
        })
        .catch(err => {
          commit(WG_THEME_ERROR, err)
          reject(err)
        })
    })
  },
}

const mutations = {
  [WG_THEME_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [WG_THEME_SUCCESS]: (state, theme) => {
    state.status = 'success';
    Vue.set(state, 'theme', theme);
  },
  [WG_THEME_ERROR]: (state) => {
    state.status = 'error';
    Vue.set(state, 'theme', {});  
  },
  [WG_THEME_SET_CSS_PROP]: (state, prop) => {
    state.status = 'error';
    Vue.set(state.theme, prop.name, prop.value);  
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
