<template>
  <div class="wg-mockup-post">
   <ul class="lines title">
      <li></li>
      <li></li>
      <li></li>
    </ul>
   <ul class="lines subtitle">
      <li></li>
      <li></li>
    </ul>
    <ul class="social">
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <div class="text">
      <div class="image"></div>
      <ul class="lines">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div class="flex">
        <div class="square left"></div>
        <ul class="lines">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <ul class="lines">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
       <div class="flex">
        <ul class="lines">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div class="square right"></div>
      </div>
      <ul class="lines">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul class="social">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WgMockupPost',
}
</script>

<style lang="scss" scoped>
$component: '.wg-mockup-post';
#{$component} {
  margin-bottom: var(--wg-gutter-xxl);
  .title {
    margin-bottom: var(--wg-gutter-xxl);
    li {
      height: var(--wg-gutter-xxl);
    }
  }
  .subtitle {
    margin-bottom: var(--wg-gutter-xl);
    li {
      height: var(--wg-gutter-xl);
    }
  }
  .social {
    display: flex;
    li {
      margin-right: var(--wg-gutter-l);
      height: 30px;
      width: 30px;
      background-color: $wg-color-sys-h;
    }
  }
  .text {
    padding: var(--wg-gutter-xxl) 0;
    .lines li:last-child {
      width: 100%;
    }
    .flex {
      display: flex;
      > * {
        width: 50%;
      }
    }
    .square {
      width: 50%;
      padding-bottom: 35%;
      background-color: $wg-color-sys-h;
      margin: var(--wg-gutter-l);
      &.left {
        margin-left: 0;
        float: left;
      }
      &.right {
        margin-right: 0;
        float: right;
      }
    }
  }
}
</style>
