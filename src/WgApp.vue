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
.placeholder {
  animation: placeholder-animation 600ms infinite alternate;
}
@keyframes placeholder-animation {
  from {
    opacity: 0.5;
  } to {
    opacity: 1;      
  }
}
</style>
