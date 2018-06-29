<template>
  <div class="wg-theme-editor-layout layout">
    <wg-form :schema="schema"
      :vuelidate="false"
      :button="false"
      @change="onChange($event)">
    </wg-form>
  </div>
</template>

<script>
import WgForm from '@/components/wg-ui/wg-form/WgForm'
import { WG_THEME_SET_CSS_PROPS } from '@/store/actions/WgTheme'

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
          label: 'Gutter size',
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
          label: 'Border width',
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
          label: 'Border radius',
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
          label: 'Box shadow',
          type: 'btn-group', 
          name: 'boxShadow', 
          id: 'boxShadow',
          value: this.boxShadow,
          options: [
            { title: 'Small', value: 8 },
            { title: 'Medium', value: 16 },
            { title: 'Large', value: 24 },
          ]
        },
      ]
    }
  },
  methods: {
    onChange: function (field) {
      this.$store.commit(WG_THEME_SET_CSS_PROPS, {
        target: document.querySelector('.wg-theme__edit-area'), 
        props: { [field.name]: field.value }
      })
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
