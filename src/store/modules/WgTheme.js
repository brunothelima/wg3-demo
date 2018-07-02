import Vue from 'vue'

import { 
  WG_THEME_REQUEST, 
  WG_THEME_ERROR, 
  WG_THEME_SUCCESS,
  WG_THEME_SET_CSS_PROPS,
} from '@/store/actions/WgTheme'

import { setCCP, getCCP } from '@/utils/WgCCP'

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
  [WG_THEME_SET_CSS_PROPS]: (state, payload) => {
    Vue.set(state, 'theme', payload.props) 
    let css = `${payload.scope} {`
    Object.keys(payload.props).forEach(prop => {
      css += getCCP(prop, payload.props[prop])
    }); 
    css += '}'
    let head = document.head || document.getElementsByTagName('head')[0]
    let style = document.createElement('style')
    style.type = 'text/css'
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
