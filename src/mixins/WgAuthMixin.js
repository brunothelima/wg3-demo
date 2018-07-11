export const WgAuthMixin = {
  methods: {
    login: function (user) {
      let { username, password } = user
      this.$store.dispatch('admin/auth/login', { username, password }).then(() => {
        // if (!this.$store.getters.hasLoadedOnce) {
          this.$router.push('/admin')
        // }
      })
    },
    logout: function () {
      this.$store.dispatch('admin/auth/logout');
      this.$router.push('/admin/login');
    },
  }
}
