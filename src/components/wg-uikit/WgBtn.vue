<template>
  <component :is="tag" 
    :to="to"
    :disabled="disabled"
    :status="status"
    :class="[
      `wg-btn--${model}`,
      { 
        'wg-btn--small': small,
        'wg-btn--outline': outline,
      }
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
    to: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      default: null,
    },
    model: {
      type: String,
      default: 'default',
       validator: value => {
        return value.match(/(default|primary|secondary)/)
      },
    },
    small: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
  }
}
</script>

<style lang="scss" scoped>
$component: '.wg-btn';
#{$component} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  padding: 0 var(--wg-gutter-xl);
  border-radius: var(--wg-border-radius);
  border-width: var(--wg-border-width);
  border-style: var(--wg-border-style);
  border-color: transparent;
  font-size: var(--wg-font-size-s);
  font-weight: $wg-font-weight-bold;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  transition: background-color var(--wg-transition-duration) var(--wg-transition-timing-function),
    color var(--wg-transition-duration) var(--wg-transition-timing-function),
    border-color var(--wg-transition-duration) var(--wg-transition-timing-function);
    margin: 5px;
  &--default {
    background-color: $wg-color-sys-k;
    color: $wg-color-sys-g;
    &:hover, 
    &[hover] {
      background-color: $wg-color-sys-i;
    }
    &:active,  
    &[active] {
      background-color: $wg-color-sys-h;
    }
    &#{$component}--outline {
      border-color: $wg-color-sys-g;
    }
  }
  &--primary {
    background-color: var(--wg-color-primary);
    color: $wg-color-sys-k;
    &:hover, 
    &[hover] {
      background-color: var(--wg-color-primary-light);
    }
    &:active,  
    &[active] {
      background-color: var(--wg-color-primary-lighter);
    }
     &#{$component}--outline {
      border-color: var(--wg-color-primary);
      color: var(--wg-color-primary);
      &:hover, 
      &[hover],
      &:active,  
      &[active] {
        color: $wg-color-sys-k;
      }
    }
  }
  &--secondary {
    background-color: var(--wg-color-secondary);
    color: $wg-color-sys-k;
    &:hover, 
    &[hover] {
      background-color: var(--wg-color-secondary-light);
    }
    &:active,  
    &[active] {
      background-color: var(--wg-color-secondary-lighter);
    }
     &#{$component}--outline {
      border-color: var(--wg-color-secondary);
      color: var(--wg-color-secondary);
      &:hover, 
      &[hover],
      &:active,  
      &[active] {
        color: $wg-color-sys-k;
      }
    }
  }
  &--outline {
    background-color: transparent;
    &:hover, 
    &[hover],
    &:active,  
    &[active] {
      border-color: transparent;
    }
  }
  &--small {
    height: 40px;
    padding: 0 var(--wg-gutter-l);
    font-size: var(--wg-font-size-xs);
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
