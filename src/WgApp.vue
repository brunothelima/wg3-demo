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
@import './assets/scss/_wg-vars';
@import './assets/scss/_wg-uikit';
@import './assets/scss/_wg-text';
html, body {
  padding: 0;
  margin: 0;
}
ul, ol {
  list-style: none;
  padding: 0;
  margin: 0;
}
#wgApp {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  color: var(--dark-color);
  font-size: 16px;
  line-height: 150%;
}
</style>
