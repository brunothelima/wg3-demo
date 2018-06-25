<template>
  <component :is="tag" class="wg-container">
      <slot/>
  </component>
</template>

<script>  
export default {
  name: 'WgContainer',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  }
}
</script>

<style lang="scss" scoped>
.wg-container {
  box-sizing: border-box;
  width: 1200px;
  margin: auto;
  padding: 0 var(--wg-gutter-l);
  @media screen and (max-width: #{$wg-brakepoint-large}) {
    width: 974px;
  }
  @media screen and (max-width: #{$wg-brakepoint-medium}) {
    width: 767px;
  }
  @media screen and (max-width: #{$wg-brakepoint-small}) {
    width: auto;
  }
}
</style>
