<template>
  <section class="wg-theme">
    <div class="wg-theme__loading" v-if="WgThemeRequestStatus === 'loading'"></div>
    <div class="wg-theme__editor" v-else>
      <wg-theme-editor :theme="WgThemeCurrentTheme" :intro="!hasLoadedOnce" />
      <wg-post />
    </div>
  </section>
</template>

<script>  
import { mapGetters } from 'vuex'
import { WG_THEME_REQUEST } from '@/store/actions/WgTheme'

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
      'hasLoadedOnce', 
      'WgThemeRequestStatus', 
      'WgThemeCurrentTheme'
    ]),
  },
  async created () {
    await this.$store.dispatch(WG_THEME_REQUEST, {id: 1})
  }
}
</script>

<style lang="scss" scoped>
</style>
