<template>
  <section class="wg-theme">
    <div class="wg-theme__loading" v-if="themeStatus != 'success'"></div>
    <div class="wg-theme__preview" v-else>
      <div v-wg-id
        ref="editArea" 
        :class="[
          'wg-theme__edit-area', 
          `wg-preview--${themePreview}`
        ]">
          <transition name="edit-area" mode="out-in">
            <component :is="`wg-${themeView}`" />
          </transition>
      </div>
      <wg-theme-editor/>
    </div>
  </section>
</template>

<script>  
import { mapState } from 'vuex'

import { WgId } from '@/directives/WgId'

import WgThemeEditor from './wg-theme-editor/WgThemeEditor'
import WgPost from '@/components/wg-pages/WgPost'
import WgList from '@/components/wg-pages/WgList'

export default {
  name: 'WgTheme',
  directives: {
    WgId
  },
  components: {
    'wg-theme-editor': WgThemeEditor,
    'wg-post': WgPost,
    'wg-list': WgList,
  },
  computed: {
    ...mapState({
      themeStatus: state => state.theme.status,
      themePreview: state => state.theme.editor.preview,
      themeView: state => state.theme.editor.view
    }),
  },
  async mounted () {
    let id = 1
    await this.$store.dispatch('theme/fetchById', id)
      .then(themeProps => {
        this.$store.commit('theme/editor/setTarget', this.$refs.editArea)
        this.$store.commit('theme/editor/setTheme', themeProps)
      })
  },
}
</script>

<style lang="scss" scoped>
$component: '.wg-theme';
#{$component} {
  padding: var(--wg-gutter-xxl) 0;
  &__edit-area {
    overflow: auto;
    display: block;
    margin: auto;
    width: $wg-brakepoint-large;
    padding: var(--wg-gutter-xxl) 0 0;
    border-radius: var(--wg-border-radius-xxl);
    box-shadow: 0 0 80px rgba(0,0,0, 0.08);
    &.wg-preview--medium {
      width: $wg-brakepoint-medium;
    }
    &.wg-preview--small {
      width: $wg-brakepoint-small;
    }
    &.wg-preview--minimal {
      overflow: auto;
      width: $wg-brakepoint-minimal;
      height: 640px;
    }
  }
  .edit-area {
    &-enter-active {  
      animation: wg-edit-area-animation var(--wg-transition-duration-slower) var(--wg-transition-timing-function) forwards;
    }
    &-leave-active {
      animation: wg-edit-area-animation var(--wg-transition-duration-slower) var(--wg-transition-timing-function) forwards reverse;
    }
  }
}
@keyframes wg-edit-area-animation {
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
}
</style>
