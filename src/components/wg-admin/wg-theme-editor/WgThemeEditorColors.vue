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
import WgForm from '@/components/wg-ui/wg-form/WgForm'

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
  data () {
    return {
      schema: [
        {
          label: 'Primary color',
          type: 'color', 
          name: 'colorPrimary', 
          id: 'colorPrimary',
          value: this.colorPrimary,
        },
        {
          label: 'Secondary color',
          type: 'color', 
          name: 'colorSecondary', 
          id: 'colorSecondary',
          value: this.colorSecondary,
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.animation {
  display: flex;
  flex-wrap: wrap;
}
</style>
