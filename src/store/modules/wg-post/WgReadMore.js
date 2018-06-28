import { 
  WG_READ_MORE_REQUEST, 
  WG_READ_MORE_SUCCESS, 
  WG_READ_MORE_ERROR, 
} from '@/store/actions/wg-post/WgReadMore'

import WgApiCall from '@/utils/WgApi'

const state = { status: '' }

const getters = {
  WgReadMoreStatus: state => state.status,
}

const actions = {
  [WG_READ_MORE_REQUEST]: ({commit}, postId = null) => {    
    return new Promise((resolve, reject) => {
      commit(WG_READ_MORE_REQUEST)
      WgApiCall({url: 'wg_read_more_example.php'}, {id: postId})
      .then(resp => {
        commit(WG_READ_MORE_SUCCESS)
        resolve(resp.posts)
      })
      .catch(err => {
        commit(WG_READ_MORE_ERROR)
        reject(err)
      })
    })
  },
}

const mutations = {
  [WG_READ_MORE_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [WG_READ_MORE_SUCCESS]: (state) => {
    state.status = 'success'
  },
  [WG_READ_MORE_ERROR]: (state) => {
    state.status = 'error'
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
