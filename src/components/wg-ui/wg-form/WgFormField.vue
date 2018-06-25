<template>
  <div class="wg-field" :class="[{
    'wg-field--error':  (v && v.$error),
    'wg-field--success': (v && !v.$invalid && v.$dirty),
  }, `wg-field--col-${cols}`]">
    <label v-if="label.length" class="wg-field__label">{{label}}</label>
    <slot/>
  </div>
</template>

<script>  
export default {
  name: 'WgFormField',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    cols: {
      type: Number,
      default: 12
    },
    label: {
      type: String,
      default: ''
    },
    error: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false
    },
    v: {
      type: Object,
      default: () => {}
    }
  },
}
</script>

<style lang="scss" scoped>
$inputs: '.wg-input,
  .wg-number,   
  .wg-textarea,
  .wg-select, 
  .wg-input-file';
.wg-field {
  box-sizing: border-box;
  padding: 0 var(--wg-gutter-l);
  margin-bottom: var(--wg-gutter-xl);
  @for $i from 12 through 1 {
    &--col-#{$i} {
     width: percentage((1 / 12) * $i);
    }
  }
  &__label {
    display: block;
    margin-bottom: var(--wg-gutter);
    padding-left: var(--wg-gutter);
    font-size: var(--wg-font-size-xs);
    font-weight: $wg-font-weight-regular;
    color: $wg-color-sys-f;
    text-transform: uppercase;
    transition: color var(--wg-transition-duration) var(--wg-cubic-bezier);
  }
  #{$inputs} {
    transition: all var(--wg-transition-duration) var(--wg-cubic-bezier);
    &::placeholder {
      color: inherit;
    }
    &:not([disabled]) {
      &:hover,
      &[hover] {
        box-shadow: var(--wg-box-shadow);
      }
      &:focus,
      &[focus] {
        border-color: $wg-color-sys-g;
      }
    }
    &[disabled] {
      opacity: 0.6;
      background-color: $wg-color-sys-j;
    }
  }
  &--error {
    label {
      color: $wg-color-error
    }
    #{$inputs} {
      border-color: $wg-color-error;
      color: $wg-color-error;
    }
  }
  &--success {
    #{$inputs} {
      border-color: $wg-color-success;
    }
  }
}
</style>
