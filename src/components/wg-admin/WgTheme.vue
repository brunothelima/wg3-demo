<template>
  <section class="wg-theme">
    <div class="wg-theme__loading" v-if="WgThemeRequestStatus === 'loading'"></div>
    <div class="wg-theme__editor" v-else>
      <div class="wg-theme__edit-area" ref="editArea" v-wg-id>
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

import WgThemeEditor from '@/components/wg-admin/wg-theme-editor/WgThemeEditor'
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
      'WgThemeRequestStatus' 
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
</style>
