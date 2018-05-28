<template>
  <section class="wg-container">
    <router-view @logout="logout" />
  </section>
</template>

<script>
import {WG_AUTH_LOGOUT} from '@/store/actions/WgAuth'
import {WG_USER_REQUEST} from '@/store/actions/WgUser'

export default {
  name: 'WgContainer',
  methods: {
    logout: function () {
      this.$store.dispatch(WG_AUTH_LOGOUT);
      this.$router.push('/login');
    },
  },
  created: function() {
    if (!this.$store.getters.hasLoadedOnce 
    && this.$store.getters.isAuthenticated) {
      this.$store.dispatch(WG_USER_REQUEST)
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
