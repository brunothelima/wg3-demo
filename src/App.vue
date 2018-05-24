<template>
  <div id="wgApp">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'WgApp',
}
</script>

<style lang="scss">
:root {
  --border-radius: 4px;
  --gutter: 20px;
  --gutter-half: calc(var(--gutter) / 2);
  --gutter-double: calc(var(--gutter) * 2);
  --speed: 200ms;
  --speed-slower: calc(var(--normal-speed) / 2);
  --speed-faster: calc(var(--normal-speed) * 2);
  --cubic-bezier: cubic-bezier(.67,-1.07,.26,1.93);
  
  --color-light: #F0F0F0;
  --color-neutral: #C5C5C5;
  --color-dark: #0F0F0F;
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
html, body {
  padding: 0;
  margin: 0;
}
.wg-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.wg-h3 {
  font-size: 1.4em;
}
.wg-btn {
  background-color: var(--color-dark);
  color: var(--color-light);
  height: 40px;
  padding: var(--gutter-half) var(--gutter-double);
  font-size: 0.9em;
  font-weight: 700;
  outline: none;
  transition: all var(--speed) var(--cubic-bezier);
  &:hover {
    filter: brightness(140%);
  }
  &:active {
    filter: brightness(200%);
  }
}
.wg-form {
  .wg-field {
    position: relative;
    margin-bottom: var(--gutter);
    &__label {
      font-size: 0.9em;
      margin-bottom: var(--gutter-half);
    }
    &__input {
      display: block;
      box-sizing: border-box;
      height: 40px;
      width: 100%;
      padding: 0 var(--gutter);
      border: 1px solid var(--color-neutral);
      outline: none;
    }
  }
}
</style>
