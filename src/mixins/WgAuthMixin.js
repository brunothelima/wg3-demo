import {WG_AUTH_LOGOUT, WG_AUTH_REQUEST} from '@/store/actions/WgAuth'

export const WgAuthMixin = {
  methods: {
    login: function (user) {
      let { username, password } = user
      this.$store.dispatch(WG_AUTH_REQUEST, { username, password }).then(() => {
        // if (!this.$store.getters.hasLoadedOnce) {
          this.$router.push('/admin')
        // }
      })
    },
    logout: function () {
      this.$store.dispatch(WG_AUTH_LOGOUT);
      this.$router.push('/admin/login');
    },
  }
}
