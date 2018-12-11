<i18n>
{
  "en": {
    "speed": {
      "label": "Animation speed"
    },
    "timing": {
      "label": "Animation presets",
      "placeholder": "Select a timing function"
    }
  },
  "pt": {
   "speed": {
      "label": "Velocidade"
    },
    "timing": {
      "label": "Tipo de animação",
      "placeholder": "Selecione"
    }
  }
}
</i18n>

<template>
  <div ref="animationElm" class="wg-theme-editor-animation animation">
    <wg-form :schema="schema"
      :vuelidate="false"
      :button="false"
      :i18n="$i18n"
      @change="onChange($event)">
        <div ref="animationDemo"
          :class="[{
            'toggle': toggleAnimation 
          }, 'animation__demo']">
          <i class="fa fa-bolt"></i>
        </div>
    </wg-form>
  </div>
</template>

<script>
import { camelCaseToDash } from '@/utils/WgCCP'
import WgForm from '@/components/wg-uikit/wg-form/WgForm'

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
      toggleAnimation: false,
      toggleInterval: null,
      schema: [
        {
          cols: 6,
          label: 'speed.label',
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
          label: 'timing.label',
          type: 'select', 
          id: 'transitionTimingFunction',
          name: 'transitionTimingFunction', 
          placeholder: 'timing.placeholder',
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
  methods: {
    setAnimationDemoProps (field) {
      clearInterval(this.toggleInterval)
      let propName = `--wg-${camelCaseToDash(field.name)}`
      let propValue = (typeof field.value == 'number') ? `${field.value}ms` : field.value 
      this.$refs.animationDemo.style.setProperty(propName, propValue)
      this.toggleInterval = setTimeout(() => {
        this.toggleAnimation = !this.toggleAnimation
      }, 500);
    },
    onChange (field) {
      this.setAnimationDemoProps(field)
      this.$emit('change', field)
    }
  },
}
</script>

<style lang="scss" scoped>
.animation {
  display: flex;
  flex-wrap: wrap;
  /deep/ &__demo {
    width: 100%;
    height: $wg-input-height / 1.5;
    padding: 0 var(--wg-gutter-l);
    i {
      display: block;
      content: '';
      width: $wg-input-height;
      height: 100%;
      margin-top: calc(var(--wg-gutter-l) * -1);
      background-color: var(--wg-color-secondary);
      border-radius: var(--wg-border-radius);
      transition: transform var(--wg-transition-duration) var(--wg-transition-timing-function);
      text-align: center;
      line-height: $wg-input-height / 1.5;
      color: $wg-color-sys-k;
    }
    &.toggle i {
      transform: translateX(200px);
    }
  }
}
</style>
