<i18n>
{
  "en": {
    "primary": {
      "label": "Primary color"
    },
    "secondary": {
      "label": "Secondary color"
    }
  },
  "pt": {
   "primary": {
      "label": "Cor primária"
    },
    "secondary": {
      "label": "Cor secondária"
    }
  }
}
</i18n>

<template>
  <div class="wg-theme-editor-colors colors">
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
  name: 'WgThemeEditorColors',
  components: {
    'wg-form': WgForm,
  },
  props: {
    colorPrimary: {
      type: String,
      default: '#F0F0F0'
    },
    colorSecondary: {
      type: String,
      default: '#222222'
    },
  },
  computed: {
    schema () {
      return [
        {
          label: this.$t('primary.label'),
          type: 'color', 
          name: 'colorPrimary', 
          id: 'colorPrimary',
          value: this.colorPrimary,
        },
        {
          label: this.$t('secondary.label'),
          type: 'color', 
          name: 'colorSecondary', 
          id: 'colorSecondary',
          value: this.colorSecondary,
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
