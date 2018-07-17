<template>
  <div class="wg-mockup-hero">
    <ul class="lines title">
      <li></li>
      <li></li>
    </ul>
    <ul class="lines subtitle">
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WgMockupHero',
}
</script>

<style lang="scss" scoped>
$component: '.wg-mockup-content-card';
#{$component} {
  display: block;
  text-align: center;
  .lines {
    padding: var(--wg-gutter-l) 0;
  }
}
</style>
