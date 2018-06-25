<template>
  <component :is="tag" 
    :disabled="disabled"
    :hover="hover"
    :active="active"
    :status="status"
    :to="to"
    :class="[
      `wg-btn--${model}`,
      {'wg-btn--small': small}
    ]" 
    @click="$emit('click')"
    class="wg-btn">
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
    to: {
      type: String,
      default: ''
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
  justify-content: center;
  height: 56px;
  min-width: 140px;
  padding: 0 var(--wg-gutter-l);
  border-radius: var(--wg-border-radius);
  border: none;
  background-color: var(--wg-color-primary);
  font-size: var(--wg-font-size-s);
  font-weight: $wg-font-weight-bold;
  text-transform: uppercase;
  color: $wg-color-sys-k;
  outline: none;
  cursor: pointer;
  transition-duration: var(--wg-transition-duration);
  transition-timing-function: var(--wg-cubic-bezier);
  transition-property: background-color, color; 
  text-decoration: none;
  &--default {
    &:hover, 
    &[hover] {
      background-color: var(--wg-color-primary-light);
    }
    &:active,  
    &[active] {
      background-color: var(--wg-color-primary-lightest);
    }
  }
  &[class*="wg-btn--"][disabled],
  &[class*="wg-btn--"][status="loading"] {
    cursor: default;
    background-color: $wg-color-sys-i;
    border-color: $wg-color-sys-h;
    color: $wg-color-sys-g;
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
