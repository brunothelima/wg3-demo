<template>
  <textarea class="wg-textarea" 
    autocomplete
    type="textarea"
    :name="name"
    :placeholder="placeholder"
    :focus="focus"
    :hover="hover"
    :disabled="disabled"    
    v-model="text"
    @input="$emit('input', text)"> 
  </textarea>
</template>

<script>  
export default {
  name: 'WgFormTextarea',
  props: {
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
  },
  data () {
    return {
      currentValue: this.value
    }
  }
}
</script>

<style lang="scss" scoped>
.wg-textarea {
  box-sizing: border-box;
  height: $wg-input-height * 2;
  width: 100%;
  padding: 0 var(--wg-gutter-l);
  background-color: $wg-color-sys-k;
  border: var(--wg-border-width) var(--wg-border-style) $wg-color-sys-h;
  border-radius: var(--wg-border-radius);
  font-size: var(--wg-font-size);
  color: $wg-color-sys-f;
  outline: none;
  transition-duration: var(--wg-transition-duration);
  transition-timing-function: var(--wg-cubic-bezier);
  transition-property: border-color, box-shadow, color; 
}
</style>
