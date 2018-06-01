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
  {"status":1,"themes":[{"title":"Default","default":[{"type":"background-color","value":"#CCCCCC"},{"type":"font-family","value":"Avenir"},{"type":"font-size","value":"16px"}],"colors":[{"type":"light","value":"#F0F0F0"},{"type":"neutral","value":"#C5C5C5"},{"type":"dark","value":"#0F0F0F"},{"type":"error","value":"#ff4444"},{"type":"warning","value":"#ffbb33"},{"type":"success","value":"#00C851"},{"type":"info","value":"#33b5e5"}],"headings":[{"type":"h1","value":"2.6em"},{"type":"h2","value":"2.4em"},{"type":"h3","value":"2em"},{"type":"h4","value":"1.6em"},{"type":"h5","value":"1.4em"},{"type":"h6","value":"1.2em"}],"typo":[{"type":"p","value":"1em"},{"type":"span","value":"0.9em"},{"type":"small","value":"0.8em"}],"border":[{"type":"radius","value":"5px"},{"type":"width","value":"2px"}],"shadow":[{"type":"x","value":"5px"},{"type":"y","value":"2px"},{"type":"blur","value":"10px"}]}]}
]

const state = {
  status: '',
  themes: [],
  current: null
}

const getters = {
  getThemes: state => state.themes,
  getCurrentTheme: state => state.current
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
    Vue.set(state, 'current', state.themes[theme.index]); 
    Object.keys(state.current).forEach(option => { 
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
