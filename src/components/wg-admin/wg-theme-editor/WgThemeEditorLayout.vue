<template>
  <div class="wg-theme-editor-layout layout"> 

  </div>
</template>

<script>
import WgHeading from '@/components/wg-ui/WgHeading'

export default {
  name: 'WgThemeEditorLayouts',
  components: {
    'wg-heading': WgHeading,
  }
}
</script>

<style lang="scss" scoped>
.layout {
  padding: var(--wg-gutter-xl);
}
</style>
