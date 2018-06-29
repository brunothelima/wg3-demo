import Vue from 'vue'

import { 
  WG_THEME_REQUEST, 
  WG_THEME_ERROR, 
  WG_THEME_SUCCESS,
  WG_THEME_SET_CSS_PROPS,
} from '@/store/actions/WgTheme'

import { 
  camelCaseToDash,
  setFontSizeCCP,
  setProgressiveCCP,
  setTransitionDurationCCP,
  setBoxShadowCCP,
  setColorsCCP
} from '@/utils/WgCCP'

import WgApiCall from '@/utils/WgApi'

function setCCP (target, CCPKey, CCPValue) { 
  let CCPName = `--wg-${camelCaseToDash(CCPKey)}`
  if (['fontSize', 'headingSize'].indexOf(CCPKey) > -1) {
    setFontSizeCCP(target, CCPName, CCPValue)
  } else if (['gutter', 'borderRadius'].indexOf(CCPKey) > -1) {
    setProgressiveCCP(target, CCPName, CCPValue)
  } else if (['boxShadow'].indexOf(CCPKey) > -1) {
    setBoxShadowCCP(target, CCPName, CCPValue)
  } else if (['transitionDuration'].indexOf(CCPKey) > -1) {
    setTransitionDurationCCP(target, CCPName, CCPValue)
  } else if (['colorPrimary', 'colorSecondary'].indexOf(CCPKey) > -1) {
    setColorsCCP(target, CCPName, CCPValue)
  } else {
    if (typeof CCPValue === 'number') {
      CCPValue += 'px'
    }
    target.style.setProperty(CCPName, CCPValue)
  }
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
    Object.keys(payload.props).forEach(CCPKey => {
      Vue.set(state.theme, CCPKey, payload.props[CCPKey]) 
      setCCP(payload.target, CCPKey, payload.props[CCPKey])
    }); 
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
