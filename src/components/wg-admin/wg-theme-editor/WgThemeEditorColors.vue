<template>
  <div class="wg-theme-editor-colors colors"> 

  </div>
</template>

<script>
import WgHeading from '@/components/wg-ui/WgHeading'

export default {
  name: 'WgThemeEditorColors',
  components: {
    'wg-heading': WgHeading,
  }
}
</script>

<style lang="scss" scoped>
.colors {
  padding: var(--wg-gutter-xl);
}
</style>
