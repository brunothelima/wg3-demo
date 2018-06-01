<template>
  <input class="wg-input"
    autocomplete
    :type="type"
    :name="name"
    :placeholder="placeholder"
    :focus="focus"
    :hover="hover"
    :disabled="disabled"
    v-mask="masks"
    v-model="value"
    @input="$emit('input', value)"/> 
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
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Type Here'
    },
    focus: {
      type: Boolean,
      default: false
    },
    hover: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    masks: {
      type: Array,
      default: () => []
    },
  },
}
</script>

<style lang="scss" scoped>
.wg-input {
  box-sizing: border-box;
  height: 40px;
  width: 100%;
  padding: 0 var(--gutter-half);
  border: 2px solid var(--colors-neutral);
  outline: none;
  font-size: 0.7em;
  transition: all var(--speed) var(--cubic-bezier);
}
</style>
