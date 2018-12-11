import WgAdminAuth from './WgAdminAuth'
import WgAdminUser from './WgAdminUser'
import WgAdminShape from './WgAdminShape'

const actions = {
	async login ({dispatch}, loginData) {
    await dispatch('auth/fetchToken', loginData)
    dispatch('user/fetchProfile')
  },
  logout ({commit}) {
		commit('auth/setToken', '')
		commit('user/setProfile', null)
  }
}

export default {
	namespaced: true,
	actions,
	modules: {
		auth: WgAdminAuth,
		user: WgAdminUser,
		shape: WgAdminShape,
	}
}