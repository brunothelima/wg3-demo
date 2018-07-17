<template>
  <div class="wg-mockup-content-card">
    <div class="square"></div>
    <ul class="lines">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WgMockupContentCard',
}
</script>

<style lang="scss" scoped>
$component: '.wg-mockup-content-card';
#{$component} {
  display: block;
  overflow: hidden;
  border-radius: var(--wg-border-radius-xl);
  .square {
    width: 100%;
    height: 200px;
    background-color: $wg-color-sys-h;
  }
  .lines {
    padding: var(--wg-gutter-l) 0;
  }
}
</style>
