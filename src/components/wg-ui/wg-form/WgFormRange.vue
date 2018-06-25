<template>
  <input class="wg-range"
    type="range"
    :name="name"
    :disabled="disabled"
    :min="min"
    :max="max"
    :value="value"
    @input="onInput($event.target.value)"/> 
</template>

<script>  
export default {
  name: 'WgFormRange',
  props: {
    name: {
      type: String,
      default: ''
    },
    value: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 1
    },
    placeholder: {
      type: String,
      default: 'Type Here'
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    onInput: function (value) {
      this.$emit('change', parseInt(value))
    }
  }
}
</script>

<style lang="scss" scoped>
.wg-range {
  display: block;
  width: 100%;
}
</style>
