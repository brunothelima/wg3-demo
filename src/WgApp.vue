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

:root {  
  --wg-gutter: #{$wg-gutter};
  --wg-gutter-l: calc(var(--wg-gutter) * 2);
  --wg-gutter-xl: calc(var(--wg-gutter) * 3);
  --wg-gutter-xxl: calc(var(--wg-gutter) * 4);
  
  --wg-border-width: #{$wg-border-width};
  --wg-border-width-l: calc(var(--wg-border-width) * 2);
  --wg-border-width-xl: calc(var(--wg-border-width) * 3);
  --wg-border-width-xxl: calc(var(--wg-border-width) * 4);
  
  --wg-border-style: #{$wg-border-style};
  
  --wg-border-radius: #{$wg-border-radius};
  --wg-border-radius-l: calc(var(--wg-border-radius) * 2);
  --wg-border-radius-xl: calc(var(--wg-border-radius) * 3);
  --wg-border-radius-xxl: calc(var(--wg-border-radius) * 4);
  --wg-border-radius-full: 50%;

  --wg-box-shadow-x: #{$wg-box-shadow-x};
  --wg-box-shadow-y: #{$wg-box-shadow-y};
  --wg-box-shadow-blur: #{$wg-box-shadow-blur};
  --wg-box-shadow-alpha: #{$wg-box-shadow-alpha};
  --wg-box-shadow-color: #{$wg-box-shadow-color};
  
  --wg-box-shadow: var(--wg-box-shadow-x) var(--wg-box-shadow-y) var(--wg-box-shadow-blur) rgba(var(--wg-box-shadow-color), var(--wg-box-shadow-alpha));
  --wg-box-shadow-l: calc(var(--wg-box-shadow-x) * 2) calc(var(--wg-box-shadow-y) * 2) calc(var(--wg-box-shadow-blur) * 2) rgba(var(--wg-box-shadow-color), var(--wg-box-shadow-alpha));
  --wg-box-shadow-xl: calc(var(--wg-box-shadow-x) * 4) calc(var(--wg-box-shadow-y) * 4) calc(var(--wg-box-shadow-blur) * 3) rgba(var(--wg-box-shadow-color), var(--wg-box-shadow-alpha));
  --wg-box-shadow-xxl: calc(var(--wg-box-shadow-x) * 8) calc(var(--wg-box-shadow-y) * 8) calc(var(--wg-box-shadow-blur) * 4) rgba(var(--wg-box-shadow-color), var(--wg-box-shadow-alpha));
  
  --wg-color-primary: #{$wg-color-primary};
  --wg-color-primary-dark: #{darken($wg-color-primary, 5%)};
  --wg-color-primary-darken: #{darken($wg-color-primary, 10%)};
  --wg-color-primary-darkest: #{darken($wg-color-primary, 15%)};
  --wg-color-primary-light: #{lighten($wg-color-primary, 5%)};
  --wg-color-primary-lighter: #{lighten($wg-color-primary, 10%)};
  --wg-color-primary-lightest: #{lighten($wg-color-primary, 15%)};

  --wg-color-secondary: #{$wg-color-secondary};
  --wg-color-secondary-dark: #{darken($wg-color-secondary, 5%)};
  --wg-color-secondary-darker: #{darken($wg-color-secondary, 10%)};
  --wg-color-secondary-darkest: #{darken($wg-color-secondary, 15%)};
  --wg-color-secondary-light: #{lighten($wg-color-secondary, 5%)};
  --wg-color-secondary-lighter: #{lighten($wg-color-secondary, 10%)};
  --wg-color-secondary-lightest: #{lighten($wg-color-secondary, 15%)};
  
  --wg-font-family: #{$wg-font-family};
  
  --wg-font-size: #{$wg-font-size};
  --wg-font-size-l: calc(var(--wg-font-size) + 2px);
  --wg-font-size-xl: calc(var(--wg-font-size) + 4px);
  --wg-font-size-s: calc(var(--wg-font-size) - 2px);
  --wg-font-size-xs: calc(var(--wg-font-size) - 4px);
  
  --wg-transition-duration: #{$wg-transition-duration};
  --wg-transition-duration-slower: calc(var(--wg-transition-duration) * 2);
  --wg-transition-duration-faster: calc(var(--wg-transition-duration) / 2);
  
  --wg-cubic-bezier: #{$wg-cubic-bezier};
}
html, body {
  padding: 0;
  margin: 0;
  font-size: var(--wg-font-size);
  font-family: var(--wg-font-family);
   -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  background-color: $wg-color-sys-j;
}
ul, ol {
  list-style: none;
  padding: 0;
  margin: 0;
}
.placeholder {
  animation: placeholder-animation var(--wg-transition-duration-faster) infinite alternate;
}
@keyframes placeholder-animation {
  from {
    opacity: 0.5;
  } to {
    opacity: 1;      
  }
}
</style>
