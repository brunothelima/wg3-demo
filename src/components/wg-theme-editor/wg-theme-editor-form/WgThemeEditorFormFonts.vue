<i18n>
{
  "en": {
    "primary": {
      "label": "Primary font family",
      "placeholder": "Select a font"
    },
    "secondary": {
      "label": "Secondary font family",
      "placeholder": "Select a font"
    },
    "fontSize": {
      "label": "Base font size"
    },
    "headings": {
      "label": "Headings size",
      "options": {
        "small": "Small",
        "medium": "Medium",
        "large": "Large"
      }
    }
  },
  "pt": {
    "primary": {
      "label": "Fonte primária",
      "placeholder": "Selecione"
    },
    "secondary": {
      "label": "Fonte secundária",
      "placeholder": "Selecione"
    },
    "fontSize": {
      "label": "Tamanho base"
    },
    "headings": {
      "label": "Tamanho de títulos",
      "options": {
        "small": "Pequeno",
        "medium": "Médio",
        "large": "Grande"
      }
    }
  }
}
</i18n>

<template>
  <div class="wg-theme-editor-fonts fonts">
    <wg-form :schema="schema"
      :vuelidate="false"
      :button="false"
      :i18n="$i18n"
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
          label: 'primary.label',
          type: 'select', 
          id: 'fontFamilyPrimary',
          name: 'fontFamilyPrimary', 
          placeholder: 'primary.placeholder',
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
          label: 'secondary.label',
          type: 'select', 
          id: 'fontFamilySecondary',
          name: 'fontFamilySecondary', 
          placeholder: 'secondary.placeholder',    
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
          label: 'fontSize.label',
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
          label: 'headings.label',
          type: 'btn-group', 
          id: 'headingSize',
          name: 'headingSize', 
          value: this.headingSize,
          options: [
            { title: 'headings.options.small', value: 14 },
            { title: 'headings.options.medium', value: 16 },
            { title: 'headings.options.large', value: 18 },
          ]
        },
      ]
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
