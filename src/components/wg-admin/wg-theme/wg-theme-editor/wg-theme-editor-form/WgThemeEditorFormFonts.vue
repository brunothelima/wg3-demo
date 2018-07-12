<template>
  <div class="wg-theme-editor-fonts fonts">
    <wg-form :schema="schema"
      :vuelidate="false"
      :button="false"
      @change="$emit('change', $event)">
    </wg-form>
  </div>
</template>

<script>
import WgForm from '@/components/wg-uikit/wg-form/WgForm'

export default {
  name: 'WgThemeEditorFonts',
  components: {
    'wg-form': WgForm,
  },
  props: {
    fontFamilyPrimary: {
      type: String,
      default: 'Montserrat'
    },
    fontFamilySecondary: {
      type: String,
      default: 'Montserrat'
    },
    fontSize: {
      type: Number,
      default: 14
    },
    headingSize: {
      type: Number,
      default: 14
    },
  },
  data () {
    return {
      schema: [
        {
          label: 'Primary font family',
          type: 'select', 
          id: 'fontFamilyPrimary',
          name: 'fontFamilyPrimary', 
          placeholder: 'Select a font',
          value: this.fontFamilyPrimary,
          options: [
            { title: 'Arial', value: 'Arial' },
            { title: 'Helvetica', value: 'Helvetica' },
            { title: 'Open Sans', value: 'Open Sans' },
            { title: 'Montserrat', value: 'Montserrat' },
            { title: 'Avenir', value: 'Avenir' },
            { title: 'Roboto Slab', value: 'Roboto Slab' },
            { title: 'Lora', value: 'Lora' },
          ],
        },
        {
          label: 'Secondary font family',
          type: 'select', 
          id: 'fontFamilySecondary',
          name: 'fontFamilySecondary', 
          placeholder: 'Select a font',    
          value: this.fontFamilySecondary,
          options: [
            { title: 'Arial', value: 'Arial' },
            { title: 'Helvetica', value: 'Helvetica' },
            { title: 'Open Sans', value: 'Open Sans' },
            { title: 'Montserrat', value: 'Montserrat' },
            { title: 'Avenir', value: 'Avenir' },
            { title: 'Roboto Slab', value: 'Roboto Slab' },
            { title: 'Lora', value: 'Lora' },
          ]
        },
        {
          cols: 7,
          label: 'Base font size',
          type: 'range', 
          name: 'fontSize', 
          id: 'fontSizeRange',
          value: this.fontSize,
          min: 12,
          max: 24,
        },
        {
          cols: 5,
          type: 'number', 
          name: 'fontSize', 
          id: 'fontSizeNumber',
          value: this.fontSize,
          min: 12,
          max: 24,
          unit: 'px'
        },
        {
          label: 'Headings size',
          type: 'btn-group', 
          id: 'headingSize',
          name: 'headingSize', 
          value: this.headingSize,
          options: [
            { title: 'Small', value: 14 },
            { title: 'Medium', value: 16 },
            { title: 'Large', value: 18 },
          ]
        },
      ]
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
