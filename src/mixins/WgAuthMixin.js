export const WgAuthMixin = {
  methods: {
    login (user) {
      let { username, password } = user
      this.$store.dispatch('admin/login', { username, password }).then(() => {
        this.$router.push('/admin')
      })
    },
    logout () {
      this.$store.dispatch('admin/logout');
      this.$router.push('/admin/login');
    },
  }
}
