<template>
  <div class="wg-theme-editor-animation animation">
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
import { WG_THEME_SET_CSS_PROPS } from '@/store/actions/WgTheme'

export default {
  name: 'WgThemeEditorAnimation',
  components: {
    'wg-form': WgForm,
  },
  props: {
    transitionDuration: {
      type: Number,
      default: 100
    },
    transitionTimingFunction: {
      type: String,
      default: 'ease'
    },
  },
  data () {
    return {
      schema: [
      	{
          cols: 6,
          label: 'Gutter size',
          type: 'range', 
          name: 'transitionDuration', 
          id: 'transitionDurationRange',
          value: this.transitionDuration,
          min: 0,
          max: 1000,
        },
        {
          cols: 6,
          type: 'number', 
          name: 'transitionDuration', 
          id: 'transitionDurationNumber',
          value: this.transitionDuration,
          min: 0,
          max: 1000,
          unit: 'ms'
        },
        {
          label: 'Presets',
          type: 'select', 
          id: 'transitionTimingFunction',
          name: 'transitionTimingFunction', 
          placeholder: 'Select a timing function',
          value: this.transitionTimingFunction,
          options: [
            { title: 'Linear', value: 'linear' },
            { title: 'Ease', value: 'ease' },
            { title: 'Ease In', value: 'ease-in' },
            { title: 'Ease Out', value: 'ease-out' },
            { title: 'Ease In Out', value: 'ease-in-out' },
          ],
        },
      ]
    }
  },
  computed: {
    // ...mapGetters(['authStatus']),
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
