<template>
  <div class="wg-form-field" :class="[{
      'wg-form-field--error':  error,
      'wg-form-field--success': success,
    },`wg-cols-${cols}`]">
      <label class="wg-form-field__label" v-if="label">{{label}}</label>
      <slot />
  </div>
</template>

<script>  
export default {
  name: 'WgFormField',
  props: {
    label: {
      type: String,
      default: null
    },
    cols: {
      type: Number,
      default: 12
    },
    error: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false
    },
  },
}
</script>

<style lang="scss" scoped>
.wg-form-field {
  box-sizing: border-box;
  padding: 0 var(--wg-gutter-l);
  margin-bottom: var(--wg-gutter-xl);
  &__label {
    display: block;
    margin-bottom: var(--wg-gutter);
    padding-left: var(--wg-gutter);
    font-size: var(--wg-font-size-xs);
    color: $wg-color-sys-f;
    text-transform: uppercase;
    transition: color var(--wg-transition-duration) var(--wg-transition-timing-function);
  }
}
</style>
