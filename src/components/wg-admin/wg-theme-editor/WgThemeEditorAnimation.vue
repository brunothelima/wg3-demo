<template>
  <div class="wg-theme-editor-animation animation"> 

  </div>
</template>

<script>
import WgHeading from '@/components/wg-ui/WgHeading'

export default {
  name: 'WgThemeEditorAnimation',
  components: {
    'wg-heading': WgHeading,
  }
}
</script>

<style lang="scss" scoped>
.animation {
  padding: var(--wg-gutter-xl);
}
</style>
