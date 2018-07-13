<template>
  <div id="WgApp">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'WgApp',
}
</script>

<style lang="scss">
@import './assets/fonts/fontawesome/css/fontawesome-all.min.css';
@import './assets/scss/_wg-ccps.scss';
html, body {
  padding: 0;
  margin: 0;
   -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}
ul, ol {
  list-style: none;
  padding: 0;
  margin: 0;
}
* {
  font-size: var(--wg-font-size);
  font-family: var(--wg-font-family-primary);
}
@for $i from 12 through 1 {
  .cols-#{$i} {
   width: percentage((1 / 12) * $i);
  }
}
@include wg-brakepoint ('[class*="cols-"]', $wg-brakepoint-minimal) {
  width: 100%;
}
</style>
