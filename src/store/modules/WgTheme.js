import Vue from 'vue'

import { 
  WG_THEME_REQUEST, 
  WG_THEME_ERROR, 
  WG_THEME_SUCCESS,
  WG_THEME_SET_PROPS,
  WG_THEME_SET_TARGET,
  WG_THEME_SET_BRAKEPOINT_PREVIEW,
} from '@/store/actions/WgTheme'

import { setCCPs } from '@/utils/WgCCP'

import WgApiCall from '@/utils/WgApi'

const state = {
  status: '',
  theme: {},
  target: {},
  brakepointPreview: 'large',
}

const getters = {
  WgThemeRequestStatus: state => state.status,
  WgThemeCurrentTheme: state => state.theme,
  WgThemeCurrentTarget: state => state.target,
  WgThemeCurrentBrakepointPreview: state => state.brakepointPreview
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
  [WG_THEME_SET_TARGET]: (state, target) => {
    Vue.set(state, 'target', target);  
  },
  [WG_THEME_SET_PROPS]: (state, newProps) => {
    Object.keys(newProps).forEach(prop => {
      Vue.set(state.theme, prop, newProps[prop]) 
    }); 
    setCCPs(state.target, state.theme)
  },
  [WG_THEME_SET_BRAKEPOINT_PREVIEW]: (state, brakepoint) => {
    state.brakepointPreview = brakepoint
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
