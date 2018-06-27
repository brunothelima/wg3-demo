<template>
  <div class="wg-theme-editor-fonts fonts">
    <wg-form :schema="schema"
      :vuelidate="false"
      :button="false"
      @change="onChange($event)">
    </wg-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import WgForm from '@/components/wg-ui/wg-form/WgForm'
import { WG_THEME_SET_CSS_PROP } from '@/store/actions/WgTheme'

export default {
  name: 'WgThemeEditorFonts',
  components: {
    'wg-form': WgForm,
  },
  props: {
    fontPrimary: {
      type: String,
      default: 'montserrat'
    },
    fontSecondary: {
      type: String,
      default: 'montserrat'
    },
    fontBaseSize: {
      type: Number,
      default: 14
    },
    headingBaseSize: {
      type: String,
      default: 'small'
    },
  },
  data () {
    return {
      schema: [
        {
          label: 'Primary font family',
          type: 'select', 
          id: 'fontPrimary',
          name: 'primary_font', 
          placeholder: 'Select a font family',
          value: this.fontPrimary,
          options: [
            { title: 'Montserrat', value: 'montserrat' },
            { title: 'Lato', value: 'lato' },
            { title: 'Open Sans', value: 'open-sans' },
          ],
        },
        {
          label: 'Secondary font family',
          type: 'select', 
          id: 'fontSecondary',
          name: 'secondary_font', 
          placeholder: 'Select a font family',    
          value: this.fontSecondary,
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
          id: 'fontBaseSizeRange',
          value: this.fontBaseSize,
          min: 12,
          max: 24,
        },
        {
          cols: 5,
          type: 'number', 
          name: 'base_font_size', 
          id: 'fontBaseSizeNumber',
          value: this.fontBaseSize,
          min: 12,
          max: 24,
          unit: 'px'
        },
        {
          label: 'Headings size',
          type: 'btn-group', 
          id: 'headingBaseSize',
          name: 'heading_base_font', 
          value: this.headingBaseSize,
          options: [
            { title: 'Small', value: 'small' },
            { title: 'Medium', value: 'medium' },
            { title: 'Large', value: 'large' },
          ]
        },
      ]
    }
  },
  computed: {
    // ...mapGetters(['authStatus']),
  },
  methods: {
    onChange: function (field) {
      // this.$strore.dispatch(WG_THEME_SET_CSS_PROP, { name: })
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
