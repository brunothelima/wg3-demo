<template>
  <div class="wg-theme-editor-tutorial-fonts tutorial">
    <div class="tutorial__head">Meeting fonts</div>
    <div class="tutorial__illustration">
      <img src="@/assets/img/wg-theme-editor/tutorial-fonts.jpg" alt="Wg Themefier fonts illustration">
    </div>      
    <div class="tutorial__info">
      <div class="center">
        <wg-heading level="h3">Customize your typography</wg-heading>
        <p>In this section you can change the font family and the font sizes of your website. One of the thousands ways to personalize your website!</p>
      </div>
    </div>
  </div>  
</template>

<script>
import WgHeading from '@/components/wg-ui/wg-text/WgHeading'

export default {
  name: 'WgThemeEditorTutorialFonts',
  components: {
    'wg-heading': WgHeading,
  }
}
</script>

<style lang="scss" scoped>
</style>
