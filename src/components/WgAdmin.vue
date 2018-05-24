<template>
  <section class="admin">
    <router-view @logout="logout" />
  </section>
</template>

<script>
import {WG_AUTH_LOGOUT} from '@/store/actions/WgAuth'
import {WG_USER_REQUEST} from '@/store/actions/WgUser'

export default {
  name: 'WgAdmin',
  methods: {
    logout: function () {
      this.$store.dispatch(WG_AUTH_LOGOUT);
      this.$router.push('/login');
    },
  },
  mounted: function() {
    if (!this.$store.getters.hasLoadedOnce 
    && this.$store.getters.isAuthenticated) {
      this.$store.dispatch(WG_USER_REQUEST);
      this.$router.push('/user');
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
