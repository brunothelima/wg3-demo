<template>
  <section class="user">
    <wg-container> 
      <div class="intro" v-if="WgUserDataLoaded">
        <div class="intro__icons">
          <img src="@/assets/img/wg-theme-editor/fonts-icon.svg" alt="Fonts">
          <img src="@/assets/img/wg-theme-editor/colors-icon.svg" alt="Colors">
          <img src="@/assets/img/wg-theme-editor/layout-icon.svg" alt="Layout">
          <img src="@/assets/img/wg-theme-editor/animation-icon.svg" alt="Animation">
        </div>
        <wg-heading level="h3">Hello, {{WgUserData.name}}</wg-heading>
        <p>You’re about to see our main editor. Where you will be able to set up all of your main configurations, such as fonts, colors, layout and animations. We will talk about the details in the next steps. </p>
        <wg-heading level="h6">Excited to get started?</wg-heading>
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

import WgHeading from '@/components/wg-ui/wg-text/WgHeading'
import WgContainer from '@/components/wg-ui/wg-layout/WgContainer'
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
      return this.$store.getters.WgUserData
    },
    ...mapGetters([
      'WgUserData', 
      'WgUserDataLoaded'
    ]),
  },
  created: function() {
    if (this.$store.getters.WgAuthAuthenticated) {
      this.$store.dispatch(WG_USER_REQUEST)
    }
  },
}
</script>

<style lang="scss" scoped>
.intro {
  padding-top: 10vh;
  text-align: center;
  &__icons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: var(--wg-gutter-xxl);
    img {
      display: block;
      height: 40px;
      margin: 0 var(--wg-gutter-xl);
      filter: grayscale(100%);
    }
    @keyframes icon-animation {
      from {
        filter: grayscale(0);
      }
      to {
        filter: grayscale(100%);
      }
    }
  }
}
</style>
