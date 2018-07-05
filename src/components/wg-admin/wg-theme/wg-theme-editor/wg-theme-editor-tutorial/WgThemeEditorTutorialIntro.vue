<template>
  <div class="wg-theme-editor-tutorial-start tutorial">
    <div class="tutorial__head">Meeting themes</div>
    <div class="tutorial__illustration">
      <img src="@/assets/img/wg-theme-editor/tutorial-intro.jpg" alt="Wg Themefier intro illustration">
    </div>      
    <div class="tutorial__info">
      <div class="center">
        <wg-heading level="h3">Hi, Johnny Doe!</wg-heading>
        <p>Here you will be able to set up the basics of your Widgrid website, such as color scheme, font styles and much more.</p>
      </div>
    </div>
  </div>  
</template>

<script>
import WgHeading from '@/components/wg-ui/wg-text/WgHeading'

export default {
  name: 'WgThemeEditorTutorialIntro',
  components: {
    'wg-heading': WgHeading,
  }
}
</script>

<style lang="scss" scoped>
</style>
