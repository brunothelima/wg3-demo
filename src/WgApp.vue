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
@import './assets/fonts/fontawesome/css/fontawesome-all.min.css';
html, body {
  padding: 0;
  margin: 0;
  background-color: var(--background-color);
  font-size: var(--font-size);
  font-family: var(--font-family);
  color: var(--dark-color);
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
</style>
