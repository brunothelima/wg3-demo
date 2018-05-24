<template>
  <section class="admin">
    <div v-if="!isAuthenticated">
      <WgLogin />
    </div>
    <div v-else>
      <div v-if="isProfileLoaded">
        <WgUser />
      </div>      
      <div v-else>
        Carregando...
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import WgLogin from './WgLogin'
import WgUser from './WgUser'

export default {
  name: 'WgAdmin',
  components: {
    WgLogin,
    WgUser
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'authStatus', 'isProfileLoaded']),
  },
}
</script>

<style lang="scss" scoped>

</style>
