export const WgAuthMixin = {
  methods: {
    login: function (user) {
      let { username, password } = user
      this.$store.dispatch('admin/login', { username, password }).then(() => {
        this.$router.push('/admin')
      })
    },
    logout: function () {
      this.$store.dispatch('admin/logout');
      this.$router.push('/admin/login');
    },
  }
}
