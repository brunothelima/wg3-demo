<template>
  <component :is="tag" class="wg-text">
      <slot/>
  </component>
</template>

<script>  
export default {
  name: 'WgText',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  }
}
</script>

<style lang="scss" scoped>
.wg-text {
  font-size: var(--font-size);
  font-family: var(--font-family);
  p, .typo__p {
    font-size: var(--typo-p);
    line-height: 200%;
  }
  b {
    font-weight: 700;
  }
  a {
    text-decoration: none;
    color: var(--colors-info);
  }
}
</style>
