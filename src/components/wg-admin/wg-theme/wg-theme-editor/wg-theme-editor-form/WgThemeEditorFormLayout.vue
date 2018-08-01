<i18n>
{
  "en": {
    "gutter": {
      "label": "Gutter size"
    },
    "border": {
      "width": {
        "label": "Border width"
      },
      "radius": {
        "label": "Border radius"
      }
    },
    "shadow": {
      "label": "Box shadow",
       "options": {
        "small": "Small",
        "medium": "Médium",
        "large": "Large"
      }
    }
  },
  "pt": {
    "gutter": {
      "label": "Espaçamentos"
    },
    "border": {
      "width": {
        "label": "Espessura da borda"
      },
      "radius": {
        "label": "Arredondamento"
      }
    },
    "shadow": {
      "label": "Sombreamento",
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
  <div class="wg-theme-editor-layout layout">
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
  name: 'WgThemeEditorLayout',
  components: {
    'wg-form': WgForm,
  },
  props: {
    gutter: {
      type: Number,
      default: 8
    },
    borderWidth: {
      type: Number,
      default: 1
    },
    borderStyle: {
      type: String,
      default: 'solid'
    },
    borderRadius: {
      type: Number,
      default: 0
    },
    boxShadow: {
      type: Number,
      default: 0
    },
  },
  data () {
    return {
      schema: [
        {
          cols: 7,
          label: 'gutter.label',
          type: 'range', 
          name: 'gutter', 
          id: 'gutterSizeRange',
          value: this.gutter,
          min: 4,
          max: 16,
        },
        {
          cols: 5,
          type: 'number', 
          name: 'gutter', 
          id: 'gutterSizeNumber',
          value: this.gutter,
          min: 4,
          max: 16,
          unit: 'px'
        },
        {
          cols: 7,
          label: 'border.width.label',
          type: 'range', 
          name: 'borderWidth', 
          id: 'borderWidthRange',
          value: this.borderWidth,
          min: 0,
          max: 8,
        },
        {
          cols: 5,
          type: 'number', 
          name: 'borderWidth', 
          id: 'borderWidthNumber',
          value: this.borderWidth,
          min: 0,
          max: 8,
          unit: 'px'
        },
        {
          cols: 7,
          label: 'border.radius.label',
          type: 'range', 
          name: 'borderRadius', 
          id: 'borderRadiusRange',
          value: this.borderRadius,
          min: 0,
          max: 24,
        },
        {
          cols: 5,
          type: 'number', 
          name: 'borderRadius', 
          id: 'borderRadiusNumber',
          value: this.borderRadius,
          min: 0,
          max: 24,
          unit: 'px'
        },
        {
          label: 'shadow.label',
          type: 'btn-group', 
          name: 'boxShadow', 
          id: 'boxShadow',
          value: this.boxShadow,
          options: [
            { title: 'shadow.options.small', value: 8 },
            { title: 'shadow.options.medium',  value: 16 },
            { title: 'shadow.options.large', value: 24 },
          ]
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.animation {
  display: flex;
  flex-wrap: wrap;
}
</style>
