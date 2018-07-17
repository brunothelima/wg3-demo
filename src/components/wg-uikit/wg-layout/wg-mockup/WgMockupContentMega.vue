<template>
  <div class="wg-mockup-content-mega">
    <div class="flex">
      <ul class="lines">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div class="square">
        <div class="sphere"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WgMockupContentMega',
}
</script>

<style lang="scss" scoped>
$component: '.wg-mockup-content-mega';
#{$component} {
  overflow: hidden;
  display: block;
  border-radius: var(--wg-border-radius-xl);
  .flex {
    display: flex;
    width: 100%;
    .lines {
      width: 35%;
      padding: 0 var(--wg-gutter-l);
    }
  }
  .square {
    position: relative;
    width: 65%;
    margin-bottom: var(--wg-gutter-l);
    background-color: $wg-color-sys-h;
    .sphere {
      display: block;
      position: absolute;
      width: 60px;
      height: 60px;
      left: var(--wg-gutter-l);
      top: var(--wg-gutter-l);
      border-radius: 50%;
      background-color: $wg-color-sys-k;
    }
  }
}
@include wg-brakepoint ($component, $wg-brakepoint-minimal) {
  .flex {
    display: block;
    .lines, .square {
      width: auto;
      padding: 0;
    }
    .square {
      height: 200px;
    }
  }
}
</style>
