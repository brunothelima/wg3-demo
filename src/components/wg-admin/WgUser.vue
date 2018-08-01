<i18n>
{
  "en": {
    "hello": "Hello",
    "welcome": "You’re about to see our main editor. Where you will be able to set up all of your main configurations, such as fonts, colors, layout and animations. We will talk about the details in the next steps.",
    "start": "Excited to get started?",
    "button": "Start Demo"
  },
  "pt": {
   "hello": "Olá",
    "welcome": "Você esta prestes a conhecer nosso editor de temas. Aqui você customiza todas as configurações do site como fontes, cores, layout e animações",
    "start": "Ansioso para começar?",
    "button": "Ir para o editor"
  }
}
</i18n>

<template>
  <section class="user">
    <wg-container> 
      <wg-loader :loading="!isProfileLoaded">
        <div class="intro" v-if="isProfileLoaded">
          <div class="intro__icons">
            <img src="@/assets/img/wg-theme-editor/fonts-icon.svg" alt="Fonts">
            <img src="@/assets/img/wg-theme-editor/colors-icon.svg" alt="Colors">
            <img src="@/assets/img/wg-theme-editor/layout-icon.svg" alt="Layout">
            <img src="@/assets/img/wg-theme-editor/animation-icon.svg" alt="Animation">
          </div>
          <wg-heading level="h3">{{$t('hello')}}, {{profile.name}}</wg-heading>
          <p>{{$t('welcome')}}</p>
          <wg-heading level="h6">{{$t('start')}}</wg-heading>
          <wg-btn model="primary" tag="router-link" to="/admin/theme">{{$t('button')}}</wg-btn>
        </div>
      </wg-loader>
    </wg-container>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { WgAuthMixin } from '@/mixins/WgAuthMixin'

import WgHeading from '@/components/wg-uikit/wg-text/WgHeading'
import WgContainer from '@/components/wg-uikit/wg-layout/WgContainer'
import WgLoader from '@/components/wg-uikit/wg-layout/WgLoader'
import WgBtn from '@/components/wg-uikit/WgBtn'

export default {
  name: 'WgUser',
  mixins: [WgAuthMixin],
  components: {
    'wg-heading': WgHeading,
    'wg-container': WgContainer,
    'wg-loader': WgLoader,
    'wg-btn': WgBtn,
  },
  computed: {
    ...mapGetters({
      isProfileLoaded: 'admin/user/isProfileLoaded',
    }),
    ...mapState({
      profile: state => state.admin.user.profile,
    })
  },
  created: function () {
    this.$store.commit('admin/shape/setPosition', 'top')
    this.$store.commit('admin/shape/setType', 'grayscale')
  },
  destroyed: function () {
    this.$store.commit('admin/shape/toggle', false)
  },
  watch: {
    isProfileLoaded: {
      immediate: true,
      handler (newVal) {
        if (newVal) {
          this.$store.commit('admin/shape/toggle', true)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .wg-container {
    max-width: 642px;
  }
}
.intro {
  text-align: center;
  &__icons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: calc(var(--wg-gutter) * 8);
    img {
      display: block;
      height: 40px;
      margin: 0 var(--wg-gutter-xl);
      opacity: 0;
      @for $i from 1 through 4 {
        &:nth-child(#{$i}) {
          animation: icon-animation var(--wg-transition-duration-faster) calc(var(--wg-transition-duration-faster) * #{$i/2}) var(--wg-transition-timing-function) forwards,
            icon-shake var(--wg-transition-duration) calc(var(--wg-transition-duration-faster) * #{$i/4} + 1.5s) ease forwards infinite;
        }
      }
    }
    @keyframes icon-animation {
      from {
        opacity: 0;
        filter: grayscale(100%);
        transform: translateY(25%);
      }
      to {
        opacity: 1;
        filter: grayscale(0);
        transform: translateY(0);
      }
    }
    @keyframes icon-shake {
      0 {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-5%);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
  p {
    margin-bottom: var(--wg-gutter-xxl);
    font-size: var(--wg-font-size);
    line-height: $wg-line-height-body;
    color: $wg-color-sys-e;
  }
  h6 {
    margin-bottom: var(--wg-gutter-xl);
  }
}
</style>
