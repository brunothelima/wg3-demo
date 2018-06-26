<template>
  <div class="wg-theme-editor-fonts fonts">
    <wg-form :vuelidate="false" :button="false" :schema="schema" />
  </div>
</template>

<script>
import WgForm from '@/components/wg-ui/wg-form/WgForm'

const schema = [
  {
    label: 'Primary font family',
    type: 'select', 
    id: 'primaryFont',
    name: 'primary_font', 
    placeholder: 'Select a font family',
    value: 'montserrat',
    options: [
      { title: 'Montserrat', value: 'montserrat' },
      { title: 'Lato', value: 'lato' },
      { title: 'Open Sans', value: 'open-sans' },
    ],
  },
  {
    label: 'Secondary font family',
    type: 'select', 
    id: 'secondaryFont',
    name: 'secondary_font', 
    placeholder: 'Select a font family',
    value: 'montserrat',
    options: [
      { title: 'Montserrat', value: 'montserrat' },
      { title: 'Lato', value: 'lato' },
      { title: 'Open Sans', value: 'open-sans' },
    ]
  },
  {
    cols: 7,
    label: 'Base font size',
    type: 'range', 
    name: 'base_font_size', 
    id: 'baseFontSizeRange',
    value: 14,
    min: 12,
    max: 24,
  },
  {
    cols: 5,
    type: 'number', 
    name: 'base_font_size', 
    id: 'baseFontSizeNumber',
    value: 14,
    min: 12,
    max: 24,
    unit: 'px'
  },
]

export default {
  name: 'WgThemeEditorFonts',
  components: {
    'wg-form': WgForm,
  },
  data () {
    return {
      schema: schema
    }
  }
}
</script>

<style lang="scss" scoped>
.fonts {
  display: flex;
  flex-wrap: wrap;
}
</style>
