<template>
  <section class="user">
    <p>
     Meu nome é {{profile.name}},<br> 
     e meu e-mail é: {{profile.email}}
    </p>
    <button class="wg-btn" @click="logout">
      Logout
    </button>
  </section>
</template>

<script>
import {WG_AUTH_LOGOUT} from '@/store/actions/WgAuth'

export default {
  name: 'WgUser',
  methods: {
    logout: function () {
      this.$store.commit(WG_AUTH_LOGOUT);
      this.$router.push('/');
    }
  },
  computed: {
    profile: function () {
      return this.$store.getters.getProfile
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
