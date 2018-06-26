<template>
  <div class="wg-theme-editor-fonts fonts">
  </div>
</template>

<script>
import WgHeading from '@/components/wg-ui/WgHeading'

const primaryFontOptions =  [
  { value: 'montserrat', text: 'Montserrat', selected: true },
  { value: 'lato', text: 'Lato' },
  { value: 'open-sans', text: 'Open Sans' },
]

const secondaryFontOptions = primaryFontOptions

export default {
  name: 'WgThemeEditorFonts',
  components: {
    'wg-heading': WgHeading,
  },
  props: {
    fontPrimary: {
      type: String,
      default: null
    },
    fontSecondary: {
      type: String,
      default: null
    },
    fontBaseSize: {
      type: Number,
      default: 16
    },
    headingBaseSize: {
      type: String,
      default: 'Medium'
    },
  },
  data () {
    return {
      primaryFontOptions: primaryFontOptions,
      secondaryFontOptions: secondaryFontOptions,
      fontBaseSizeMin: 12,
      fontBaseSizeMax: 24,
    }
  },
}
</script>

<style lang="scss" scoped>
.fonts {
  display: flex;
  flex-wrap: wrap;
}
</style>
