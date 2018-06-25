<template>
  <section class="user">
    <wg-container> 
      <div class="intro" v-if="isProfileLoaded">
        <div class="user__avatar">
          <i class="fa fa-user"></i>
        </div>
        <p>
          Welcome {{profile.name}}!<br>
          <br>Everything is ready
          <br>for your test drive on
          <br>Widgrid 3 Beta
        </p>
        <p>
          Buckle up<br>
          and enjoy<br>
          :)
        </p>
        <wg-btn tag="router-link" to="/admin/theme">Start Demo</wg-btn>
      </div>
      <div v-else>
        Loadding...
      </div>
    </wg-container>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { WgAuthMixin } from '@/mixins/WgAuthMixin'
import { WG_USER_REQUEST } from '@/store/actions/WgUser'

import WgHeading from '@/components/wg-ui/WgHeading'
import WgContainer from '@/components/wg-ui/WgContainer'
import WgBtn from '@/components/wg-ui/WgBtn'

export default {
  name: 'WgUser',
  mixins: [WgAuthMixin],
  components: {
    'wg-heading': WgHeading,
    'wg-container': WgContainer,
    'wg-btn': WgBtn,
  },
  computed: {
    profile: function () {
      return this.$store.getters.getProfile
    },
    ...mapGetters(['isProfileLoaded']),
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
.user {
  padding-top: var(--wg-gutter-xxl);
  text-align: center;
  &__avatar {
    width: 80px;
    height: 80px;
    margin: auto;
    background-color: $wg-color-sys-h;
    border-radius: var(--wg-border-radius-full);
    line-height: 80px;
    font-size: 40px;
    color: $wg-color-sys-e;
  }
}
</style>
