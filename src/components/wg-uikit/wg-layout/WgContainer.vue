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
$component: '.wg-container';
#{$component} {
  box-sizing: border-box;
  width: $wg-brakepoint-large;
  margin: auto;
  padding: 0 var(--wg-gutter-l);
}
@include wg-brakepoint ($component, $wg-brakepoint-medium) {
  width: $wg-brakepoint-medium;
}
@include wg-brakepoint ($component, $wg-brakepoint-small) {
  width: $wg-brakepoint-small;
}
@include wg-brakepoint ($component, $wg-brakepoint-minimal) {
  width: auto;
}
</style>
