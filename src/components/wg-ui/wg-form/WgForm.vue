<template>
  <form novalidate
    :class="{
      'wg-form--ajax': ajax, 
      'wg-form--novalidate': validate, 
    }" class="wg-form" >
      <slot/>
  </form>
</template>

<script>  
export default {
  name: 'WgForm',
  props: {
    ajax: {
      type: Boolean,
      default: false
    },
    validate: {
      type: Boolean,
      default: true
    },
  }
}
</script>

<style lang="scss" scoped>
.wg-form {
  display: flex;
  flex-wrap: wrap;
  margin: 0 calc(var(--gutter) * -1);
}
</style>
