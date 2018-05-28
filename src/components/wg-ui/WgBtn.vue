<template>
  <component :is="tag" 
    :class="{'wg-btn--secondary': secondary, 'wg-btn--small': small}"
    class="wg-btn">
      <slot/>
  </component>
</template>

<script>  
export default {
  name: 'WgBtn',
  props: {
    tag: {
      type: String,
      default: "button",
    },
    small: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
  }
}
</script>

<style lang="scss" scoped>
.wg-btn {
  display: flex-inline;
  align-items: center;
  background-color: var(--colors-dark);
  color: var(--colors-light);
  height: 40px;
  padding: 0 var(--gutter);
  border: none;
  font-size: 0.9em;
  font-weight: 700;
  outline: none;
  transition: all var(--speed) var(--cubic-bezier);
  cursor: pointer;
  &:hover {
    filter: brightness(140%);
  }
  &:active {
    filter: brightness(200%);
  }
  &[disabled] {
    opacity: 0.5;
  }
  &--small {
    height: 32px;
    font-size: 0.7em;
  }
  &--secondary {
    background-color: transparent;
    border: 3px solid var(--colors-dark);
    color: var(--colors-dark);
    &:hover {
      background-color: var(--colors-dark);
      color: white;
    }
  }
  span {
    font: inherit;
    &:first-child {
      margin-right: var(--gutter-half);
    }
  }
  i {
    font-size: inherit;
    &:first-child {
      margin-right: var(--gutter-half);
    }
  }
}
</style>
