<i18n>
{
  "en": {
    "head": "Meeting layout",
    "title": "The possibility of change borders, shadow and gutter.",
    "subtitle": "Here you will be able to set up the basics of your Widgrid website, such as color scheme, font styles and much more."
  },
  "pt": {
   "head": "Conheça \"Layout\"",
    "title": "Possibilidade de alterar bordas, sombras e espaçamento.",
    "subtitle": "Aqui você sera capaz de configurar espaçamentos, bordas, sombra de todos os elementos do seu site"
  }
}
</i18n>

<template>
  <div class="wg-theme-editor-tutorial-layout tutorial">
    <div class="tutorial__head">{{$t('head')}}</div>
    <div class="tutorial__illustration">
      <img src="@/assets/img/wg-theme-editor/tutorial-layout.png" alt="Wg Themefier intro layout illustration">
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
  name: 'WgThemeEditorTutorialLayout',
  components: {
    'wg-heading': WgHeading,
  },
}
</script>

<style lang="scss" scoped>
</style>
