<i18n>
{
  "en": {
    "head": "Meeting animations",
    "title": "More life to your website with animations and easing.",
    "subtitle": "Here you will be able to set up the basics of your Widgrid website, such as color scheme, font styles and much more."
  },
  "pt": {
   "head": "Conheça \"Animações\"",
    "title": "Mais vida no seu site alterando animações e easing.",
    "subtitle": "Aqui você sera capaz de configurar a velocidade e variação de todas as animações do seu site"
  }
}
</i18n>

<template>
  <div class="wg-theme-editor-tutorial-animation tutorial">
    <div class="tutorial__head">{{$t('head')}}</div>
    <div class="tutorial__illustration">
      <img src="@/assets/img/wg-theme-editor/tutorial-animation.png" alt="Wg Themefier intro animation illustration">
    </div>      
    <div class="tutorial__info">
      <div class="center">
        <wg-heading level="h3">{{$t('title')}}</wg-heading>
        <br><br>
        <!-- <p>{{$t('subtitle')}}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
import WgHeading from '@/components/wg-uikit/wg-text/WgHeading'

export default {
  name: 'WgThemeEditorTutorialAnimation',
  components: {
    'wg-heading': WgHeading,
  },
}
</script>

<style lang="scss" scoped>
</style>
