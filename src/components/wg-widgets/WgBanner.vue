<template>
  <div class="wg-banner">
    <img src="@/assets/img/wg-ad-example.png">
  </div>
</template>

<script>
export default {
  name: 'WgBanner',
}
</script>

<style lang="scss" scoped>
$component: '.wg-banner';
#{$component} {
  display: flex;
  align-items: center; 
  box-sizing: border-box;
  padding: var(--wg-gutter-xl) 0;
  margin-bottom: var(--wg-gutter-xl);
  background-color: $wg-color-sys-h;
  border-radius: var(--wg-border-radius);
  img {
    display: block;
    margin: 0 auto;
    border-radius: var(--wg-border-radius);
  }
}
</style>
