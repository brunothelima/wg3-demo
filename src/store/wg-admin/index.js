import WgAdminAuth from './WgAdminAuth'
import WgAdminUser from './WgAdminUser'
import WgAdminShape from './WgAdminShape'

export default {
	namespaced: true,
	modules: {
		auth: WgAdminAuth,
		user: WgAdminUser,
		shape: WgAdminShape,
	}
}