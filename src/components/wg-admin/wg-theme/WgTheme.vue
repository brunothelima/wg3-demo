<template>
  <section class="wg-theme">
    <div class="wg-theme__loading" v-if="WgThemeRequestStatus === 'loading'"></div>
    <div class="wg-theme__preview" v-else>
      <div v-wg-id
        ref="editArea" 
        :class="[
          'wg-theme__edit-area', 
          `wg-preview--${WgThemeCurrentBrakepointPreview}`
        ]">
          <wg-post/>
      </div>
      <wg-theme-editor/>
    </div>
  </section>
</template>

<script>  
import { 
  WG_THEME_REQUEST, 
  WG_THEME_SET_TARGET,
  WG_THEME_SET_PROPS
} from '@/store/actions/WgTheme'
import { mapGetters } from 'vuex'
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
    ...mapGetters([
      'WgThemeRequestStatus',
      'WgThemeCurrentBrakepointPreview'
    ]),
  },
  data () {
    return {
      themeEditorTarget: null
    }
  },
  async created () {
    await this.$store.dispatch(WG_THEME_REQUEST, {id: 1})
      .then(themeProps => {
        this.$store.commit(WG_THEME_SET_TARGET, this.$refs.editArea)
        this.$store.commit(WG_THEME_SET_PROPS, themeProps)
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
