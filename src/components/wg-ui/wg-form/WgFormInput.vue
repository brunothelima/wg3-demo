<template>
  <input class="wg-input"
    :type="type"
    :name="name"
    :value="value"
    :placeholder="placeholder"
    :autocomplete="autocomplete"
    :disabled="disabled"
    v-mask="masks"
    @input="onInput($event.target.value)"/> 
</template>

<script>  
import { VueMaskDirective } from 'v-mask'
export default {
  name: 'WgFormInput',
  directives: {
    mask: VueMaskDirective
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: Boolean,
      default: true
    },
    masks: {
      type: Array,
      default: () => []
    },
  },
  methods: {
    onInput: function (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.wg-input {
  box-sizing: border-box;
  height: $wg-input-height;
  width: 100%;
  padding: 0 var(--wg-gutter-l);
  background-color: $wg-color-sys-k;
  border: var(--wg-border-width) var(--wg-border-style) $wg-color-sys-h;
  border-radius: var(--wg-border-radius);
  font: #{$wg-font-weight-regular} var(--wg-font-size) var(--wg-font-family);
  color: $wg-color-sys-f;
  outline: none;
}
</style>
