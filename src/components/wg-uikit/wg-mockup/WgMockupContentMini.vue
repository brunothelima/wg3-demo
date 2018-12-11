<template>
  <div class="wg-mockup-content-mini">
    <div class="flex">
      <div class="square"></div>
      <ul class="lines">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <ul class="lines">
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WgMockupContentMini',
}
</script>

<style lang="scss" scoped>
$component: '.wg-mockup-content-mini';
#{$component} {
  display: block;
  .flex {
    display: flex;
    width: 100%;
    .lines {
      width: calc(100% - 80px);
      padding-left: var(--wg-gutter-l);
      li:last-child {
        width: auto;
      }
    }
  }
  .square {
    width: 80px;
    height: 80px;
    margin-bottom: var(--wg-gutter-l);
    background-color: $wg-color-sys-h;
  }
}
</style>
