import 'es6-promise/auto'

import Vue from 'vue'
import { 
  WG_UI_THEMES_REQUEST, 
  WG_UI_THEMES_ERROR, 
  WG_UI_THEMES_SUCCESS, 
  WG_UI_SET_THEME_CSS, 
} from '@/store/actions/WgUi'
import WgApiCall from '@/utils/WgApi'

const defaultTheme = [
  {id: 'light', hex: '#F0F0F0'},
  {id: 'neutral', hex: '#C5C5C5'},
  {id: 'dark', hex: '#0F0F0F'},
  {id: 'error', hex: '#ff4444'},
  {id: 'warning', hex: '#ffbb33'},
  {id: 'success', hex: '#00C851'},
  {id: 'info', hex: '#33b5e5'},
]

const state = {
  status: '',
  themes: []
}

const getters = {
  getThemes: state => state.themes
}

const actions = {
  [WG_UI_THEMES_REQUEST]: ({commit, dispatch}, user) => {
    return new Promise((resolve, reject) => {
      commit(WG_UI_THEMES_REQUEST)
      WgApiCall({url: 'wg_themes_request.php', method: 'GET'})
      .then(resp => {
        commit(WG_UI_THEMES_SUCCESS, resp.themes)
        resolve(resp.themes)
      })
      .catch(err => {
        commit(WG_UI_THEMES_ERROR)
        reject()
      })
    })
  },
}

const mutations = {
  [WG_UI_THEMES_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [WG_UI_THEMES_ERROR]: (state) => {
    state.status = 'error';
    Vue.set(state, 'themes', [defaultTheme]);  
  },
  [WG_UI_THEMES_SUCCESS]: (state, themes) => {
    state.status = 'success';
    Vue.set(state, 'themes', themes);
  },
  [WG_UI_SET_THEME_CSS]: (state, theme) => {
    Object.keys(state.themes[theme.index]).forEach(option => { 
      if (option.indexOf(['title']) <= -1) {
        state.themes[theme.index][option].map(prop => {
          theme.target.style.setProperty(`--${option}-${prop.type}`, prop.value)
        })
      }
    })
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
