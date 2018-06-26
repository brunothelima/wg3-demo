<template>
  <div class="wg-field" :class="[{
      'wg-field--error':  error,
      'wg-field--success': success,
    }]">
      <label v-if="label">{{label}}</label>
      <slot />
  </div>
</template>

<script>  
import WgBtn from '@/components/wg-ui/WgBtn'    
export default {
  name: 'WgFormField',
  props: {
    label: {
      type: String,
      default: null
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
  padding: calc(var(--wg-gutter-l));
}
</style>
