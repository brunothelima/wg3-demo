<template>
  <section class="user">
    <div v-if="isProfileLoaded">
      <p>
       Meu nome é {{profile.name}},<br> 
       e meu e-mail é: {{profile.email}}
      </p>
    </div>
    <div v-else>
      Carregando seus dados.
      Aguarde.
    </div> 
    <button class="wg-btn" @click="onClick">
      Logout
    </button>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'WgAdminUser',
  methods: {
    onClick: function () {
      this.$emit('logout');
    },
  },
  computed: {
    profile: function () {
      return this.$store.getters.getProfile
    },
    ...mapGetters(['isProfileLoaded']),
  },
}
</script>

<style lang="scss" scoped>

</style>
