import { 
  WG_POST_RELATED_REQUEST, 
  WG_POST_RELATED_SUCCESS, 
  WG_POST_RELATED_ERROR, 
} from '@/store/actions/wg-post/WgPostRelated'

import WgApiCall from '@/utils/WgApi'

const state = { status: '' }

const getters = {
  postRelatedStatus: state => state.status,
}

const actions = {
  [WG_POST_RELATED_REQUEST]: ({commit}, postId = null) => {    
    return new Promise((resolve, reject) => {
      commit(WG_POST_RELATED_REQUEST)
      WgApiCall({url: 'wg_post_related_example.php'}, {id: postId})
      .then(resp => {
        commit(WG_POST_RELATED_SUCCESS)
        resolve(resp.posts)
      })
      .catch(err => {
        commit(WG_POST_RELATED_ERROR)
        reject(err)
      })
    })
  },
}

const mutations = {
  [WG_POST_RELATED_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [WG_POST_RELATED_SUCCESS]: (state) => {
    state.status = 'success'
  },
  [WG_POST_RELATED_ERROR]: (state) => {
    state.status = 'error'
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
