<template>
  <section class="wg-theme">
    <div class="wg-theme__loading" v-if="WgThemeRequestStatus === 'loading'"></div>
    <div class="wg-theme__editor" v-else>
      <div class="wg-theme__edit-area" ref="editArea">
        <wg-post/>
      </div>
      <wg-theme-editor :theme="WgThemeCurrentTheme"/>
    </div>
  </section>
</template>

<script>  
import { mapGetters } from 'vuex'
import { WG_THEME_REQUEST, WG_THEME_SET_CSS_PROPS } from '@/store/actions/WgTheme'

import WgThemeEditor from '@/components/wg-admin/wg-theme-editor/WgThemeEditor'
import WgPost from '@/components/wg-admin/WgPost'

export default {
  name: 'WgTheme',
  components: {
    'wg-theme-editor': WgThemeEditor,
    'wg-post': WgPost,
  },
  computed: {
    ...mapGetters([
      'WgThemeRequestStatus', 
      'WgThemeCurrentTheme'
    ]),
  },
  async created () {
    await this.$store.dispatch(WG_THEME_REQUEST, {id: 1})
      .then(themeProps => {
        this.$store.commit(WG_THEME_SET_CSS_PROPS, {
          props: themeProps,
          elem: this.$refs.editArea
        })
      })
  }
}
</script>

<style lang="scss" scoped>
</style>
