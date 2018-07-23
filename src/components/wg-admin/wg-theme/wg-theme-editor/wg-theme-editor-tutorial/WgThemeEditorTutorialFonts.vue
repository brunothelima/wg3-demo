<i18n>
{
  "en": {
    "head": "Meeting fonts",
    "title": "Choose your typo!",
    "subtitle": "Here you will be able to set up the basics of your Widgrid website, such as color scheme, font styles and much more."
  },
  "pt": {
   "head": "Conheça \"Fontes\"",
    "title": "Escolha sua fonte!",
    "subtitle": "Aqui você sera capaz de configurar as famílias e tamanho des todas as fontes do seu site"
  }
}
</i18n>

<template>
  <div class="wg-theme-editor-tutorial-fonts tutorial">
    <div class="tutorial__head">{{$t('head')}}</div>
    <div class="tutorial__illustration">
      <img src="@/assets/img/wg-theme-editor/tutorial-fonts.png" alt="Wg Themefier intro fonts illustration">
    </div>      
    <div class="tutorial__info">
      <div class="center">
        <wg-heading level="h3">{{$t('title')}}</wg-heading>
        <p>{{$t('subtitle')}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import WgHeading from '@/components/wg-uikit/wg-text/WgHeading'

export default {
  name: 'WgThemeEditorTutorialFonts',
  components: {
    'wg-heading': WgHeading,
  },
}
</script>

<style lang="scss" scoped>
</style>
