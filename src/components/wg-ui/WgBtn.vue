<template>
  <component :is="tag" 
    :disabled="disabled"
    :hover="hover"
    :active="active"
    :status="status"
    :class="[
      `wg-btn--${model}`,
      {'wg-btn--small': small}
    ]" class="wg-btn">
      <i class="fa fa-circle-notch fa-spin" v-if="status === 'loading'"></i>
      <slot v-else/>
  </component>
</template>

<script>  
export default {
  name: 'WgBtn',
  props: {
    tag: {
      type: String,
      default: 'button',
    },
    status: {
      type: String,
      default: ''
    },
    model: {
      type: String,
      default: 'default',
       validator: value => {
        return value.match(/(default|outline)/)
      },
    },
    small: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    hover: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
  }
}
</script>

<style lang="scss" scoped>
.wg-btn {
  display: inline-flex;
  align-items: center;
  background-color: var(--colors-dark);
  color: var(--colors-light);
  height: 40px;
  padding: 0 var(--gutter);
  border: none;
  font-size: 0.9em;
  font-weight: 700;
  font-family: var(--default-headings-font-family);
  outline: none;
  transition: all var(--speed) var(--cubic-bezier);
  cursor: pointer;
  &--default {
    &:hover, 
    &[hover] {
      background-color: var(--colors-neutral);
      color: var(--colors-dark);
    }
    &:active,  
    &[active] {
      background-color: var(--colors-light);
      color: var(--colors-dark);
    }
  }
  &--small {
    height: 32px;
    font-size: 0.7em;
  }
  &--outline {
    background-color: transparent;
    border: 3px solid var(--colors-dark);
    color: var(--colors-dark);
    &:hover, 
    &[hover] {
      border-color: var(--colors-neutral);
      color: var(--colors-dark);
    }
    &:active, 
    &[active] {
      border-color: var(--colors-light);
      color: var(--colors-dark);
    }
  }
  &[class*="wg-btn--"][disabled],
  &[class*="wg-btn--"][status="loading"] {
    cursor: default;
    background-color: #DDDDDD;
    border-color: #DDDDDD;
    color: #AAAAAA;
  }
  span {
    font: inherit;
    line-height: inherit;
  }
  i {
    font-size: inherit;
    line-height: inherit;
  }
}
</style>
