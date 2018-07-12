<template>
  <wg-form-field :label="label"
    :success="success"
    :error="error"
    :cols="cols">
      <input class="wg-input-color" 
        type="text"
        :id="id"
        :name="name"
        :disabled="disabled"
        v-model="model">
      <wg-color-slide 
        class="wg-color-slide"
        v-model="colors"
        @input="onChange(colors)" />
  </wg-form-field>
</template>

<script>  
import { WgInputMixin } from '@/mixins/WgInputMixin'
import { Slider } from 'vue-color'
import WgFormField from '@/components/wg-uikit/wg-form/WgFormField'

export default {
  name: 'WgInputColor',
  mixins: [WgInputMixin],
  components: {
    'wg-form-field': WgFormField,
    'wg-color-slide': Slider
  },
  data () {
    return {
      colors : this.value
    }
  },
  methods: {
    onChange: function (colors) {
      this.model = colors.hex
      this.$emit('change', this.model)
    }
  }
}
</script>

<style lang="scss" scoped>
.wg-color-slide {
  width: 100%;
}
.wg-input-color {
  box-sizing: border-box;
  height: $wg-input-height;
  width: 100%;
  padding: 0 var(--wg-gutter-l);
  margin-bottom: var(--wg-gutter-l);
  background-color: $wg-color-sys-k;
  border: var(--wg-border-width) var(--wg-border-style) $wg-color-sys-h;
  border-radius: var(--wg-border-radius);
  font: #{$wg-font-weight-regular} var(--wg-font-size) var(--wg-font-family);
  color: $wg-color-sys-f;
  outline: none;
  transition-duration: var(--wg-transition-duration-faster);
  transition-timing-function: var(--wg-transition-timing-function);
  transition-property: border-color, box-shadow, color, transform; 
  &::placeholder {
    color: inherit;
  }
  &:not([disabled]) {
    &:hover,
    &[hover] {
      box-shadow: var(--wg-box-shadow);
    }
    &:focus,
    &[focus] {
      border-color: $wg-color-sys-g;
    }
  }
  &[disabled] {
    opacity: 0.6;
    background-color: $wg-color-sys-j;
  }
}
.wg-form-field {
  &--success {
    /deep/ .wg-form-field__label {
      color: $wg-color-success;
    }
    [class*="wg-input"] {
      border-color: $wg-color-success;
    }
  }
  &--error {
    /deep/ .wg-form-field__label {
      color: $wg-color-error;
    }
    [class*="wg-input"] {
      border-color: $wg-color-error;
    }
  }
}
</style>
