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
    @input="$emit('input', value)"> 
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
      text: this.value
    }
  }
}
</script>

<style lang="scss" scoped>
.wg-textarea {
  box-sizing: border-box;
  height: 90px;
  width: 100%;
  padding: var(--gutter-half);
  border: 2px solid var(--colors-neutral);
  outline: none;
  font-size: 0.7em;
  transition: all var(--speed) var(--cubic-bezier);
}
</style>
