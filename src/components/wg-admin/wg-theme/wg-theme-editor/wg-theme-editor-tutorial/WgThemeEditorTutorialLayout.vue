<template>
  <div class="wg-theme-editor-tutorial-layout tutorial">
    <div class="tutorial__head">Meeting layout</div>
    <div class="tutorial__illustration">
      <img src="@/assets/img/wg-theme-editor/tutorial-layout.jpg" alt="Wg Themefier layout illustration">
    </div>      
    <div class="tutorial__info">
      <div class="center">
        <wg-heading level="h3">Rearange, organize</wg-heading>
        <p>So strongly and metaphysically did I conceive of my situation then, that while earnestly watching his motions, I seemed distinctly.</p>
      </div>
    </div>
  </div>  
</template>

<script>
import WgHeading from '@/components/wg-ui/wg-text/WgHeading'

export default {
  name: 'WgThemeEditorTutorialLayout',
  components: {
    'wg-heading': WgHeading,
  }
}
</script>

<style lang="scss" scoped>
</style>
