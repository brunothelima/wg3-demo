import Vue from 'vue'

import { 
  WG_THEME_REQUEST, 
  WG_THEME_ERROR, 
  WG_THEME_SUCCESS,
  WG_THEME_SET_CSS_PROPS,
} from '@/store/actions/WgTheme'

import WgApiCall from '@/utils/WgApi'

function camelCaseToDash (str) {
  return str
      .replace(/[^a-zA-Z0-9]+/g, '-')
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/([0-9])([^0-9])/g, '$1-$2')
      .replace(/([^0-9])([0-9])/g, '$1-$2')
      .replace(/-+/g, '-')
      .toLowerCase();
}

function setFontSizeCCP (target, name, value) {
  target.style.setProperty(name, `${value}px`)
  target.style.setProperty(`${name}-l`, `calc(var(${name}) + 2px)`)
  target.style.setProperty(`${name}-xl`, `calc(var(${name}) + 4px)`)
  target.style.setProperty(`${name}-s`, `calc(var(${name}) - 2px)`)
  target.style.setProperty(`${name}-xs`, `calc(var(${name}) - 4px)`)
}

function setProgressiveCCP (target, name, value) {
  target.style.setProperty(name, `${value}px`)
  target.style.setProperty(`${name}-l`, `calc(var(${name}) * 2)`)
  target.style.setProperty(`${name}-xl`, `calc(var(${name}) * 3)`)
  target.style.setProperty(`${name}-xxl`, `calc(var(${name}) * 4)`)
}

function setTransitionDurationCCP (target, name, value) {
  target.style.setProperty(name, `${value}ms`)
  target.style.setProperty(`${name}-faster`, `calc(var(${name}) / 2)`)
  target.style.setProperty(`${name}-slower`, `calc(var(${name}) * 2)`)
}

function setCCPs (target, CCPs) { 
  Object.keys(CCPs).forEach(CCP => {
    let CCPValue = CCPs[CCP]
    let CCPName = `--wg-${camelCaseToDash(CCP)}`
    if (['fontSize', 'headingSize'].indexOf(CCP) > -1) {
      setFontSizeCCP(target, CCPName, CCPValue)
    } else if (['gutter', 'borderRadius'].indexOf(CCP) > -1) {
      setProgressiveCCP(target, CCPName, CCPValue)
    } else if (['transitionDuration'].indexOf(CCP) > -1) {
      setTransitionDurationCCP(target, CCPName, CCPValue)
    } else {
      if (typeof CCPValue === 'number') {
        CCPValue += 'px'
      }
      target.style.setProperty(CCPName, CCPValue)
    }
  });
}

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
    setCCPs(payload.target, payload.props)
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
