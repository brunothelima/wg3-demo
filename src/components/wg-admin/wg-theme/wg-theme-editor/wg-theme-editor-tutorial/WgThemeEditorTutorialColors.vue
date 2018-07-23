<i18n>
{
  "en": {
    "head": "Meeting colors",
    "title": "Choose your colors!",
    "subtitle": "Here you will be able to set up the basics of your Widgrid website, such as color scheme, font styles and much more."
  },
  "pt": {
   "head": "Conheça \"Cores\"",
    "title": "Experimente todas!",
    "subtitle": "Aqui você sera capaz de configurar as cores base do seu site, gerando automaticamente todas as suas variações"
  }
}
</i18n>

<template>
  <div class="wg-theme-editor-tutorial-colors tutorial">
    <div class="tutorial__head">{{$t('head')}}</div>
    <div class="tutorial__illustration">
      <img src="@/assets/img/wg-theme-editor/tutorial-colors.png" alt="Wg Themefier intro colors illustration">
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
  name: 'WgThemeEditorTutorialColors',
  components: {
    'wg-heading': WgHeading,
  },
}
</script>

<style lang="scss" scoped>
</style>
