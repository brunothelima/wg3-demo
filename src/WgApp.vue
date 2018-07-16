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
  background-color: $wg-color-sys-h;
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
.wg-row {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin-left: calc(var(--wg-gutter) * -1);
  margin-right: calc(var(--wg-gutter) * -1);
}
[class*="wg-cols-"]{
  box-sizing: border-box;
  padding-left: var(--wg-gutter);
  padding-right: var(--wg-gutter);
}
@for $i from 12 through 1 {
  .wg-cols-#{$i} {
    width: percentage((1 / 12) * $i);
  }
}
@include wg-brakepoint ('.wg-row', $wg-brakepoint-minimal) {
  margin-left: 0;
  margin-right: 0;
}
@include wg-brakepoint ('[class*="cols-"]', $wg-brakepoint-minimal) {
  width: 100%;
  padding-left: 0;
  padding-right: 0;
}
</style>
