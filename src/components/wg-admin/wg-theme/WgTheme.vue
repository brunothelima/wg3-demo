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
          <wg-post/>
      </div>
      <wg-theme-editor/>
    </div>
  </section>
</template>

<script>  
import { mapState } from 'vuex'

import { WgId } from '@/directives/WgId'

import WgThemeEditor from './wg-theme-editor/WgThemeEditor'
import WgPost from '@/components/wg-admin/WgPost'

export default {
  name: 'WgTheme',
  directives: {
    WgId
  },
  components: {
    'wg-theme-editor': WgThemeEditor,
    'wg-post': WgPost,
  },
  computed: {
    ...mapState({
      themeStatus: state => state.theme.status,
      themePreview: state => state.theme.editor.preview
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
    background-color: $wg-color-sys-j;
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
}
</style>
