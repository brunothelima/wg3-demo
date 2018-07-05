import { 
  WG_POST_REQUEST, 
  WG_POST_ERROR, 
  WG_POST_SUCCESS 
} from '@/store/actions/wg-post/WgPost'

import WgApiCall from '@/utils/WgApi'

const state = { status: ''}

const getters = {
  WgPostStatus: state => state.status,
}

const actions = {
  [WG_POST_REQUEST]: ({commit}, postId = null) => {
    return new Promise((resolve, reject) => {
      commit(WG_POST_REQUEST)
      WgApiCall({url: 'wg_post_example.php'}, {id: postId})
      .then(resp => {
        commit(WG_POST_SUCCESS)
        resolve(resp.content)
      })
      .catch(err => {
        commit(WG_POST_ERROR)
        reject(err)
      })
    })
  },
}

const mutations = {
  [WG_POST_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [WG_POST_SUCCESS]: (state) => {
    state.status = 'success'
  },
  [WG_POST_ERROR]: (state) => {
    state.status = 'error'
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
