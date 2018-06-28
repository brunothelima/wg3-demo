<template>
  <section class="wg-theme">
    <div class="wg-theme__loading" v-if="WgThemeRequestStatus === 'loading'"></div>
    <div class="wg-theme__editor" v-else>
      <wg-theme-editor :theme="WgThemeCurrentTheme" />
      <wg-post />
    </div>
  </section>
</template>

<script>  
import { mapGetters } from 'vuex'

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
}
</script>

<style lang="scss" scoped>
</style>
