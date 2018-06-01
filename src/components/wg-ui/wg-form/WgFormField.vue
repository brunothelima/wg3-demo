<template>
  <div class="wg-field" :class="[{
    'wg-field--error': state.$error || layout.error,
    'wg-field--success': !state.$invalid || layout.success,
  }, `wg-field--col-${layout.cols}`]">
    <label v-if="layout.label" class="wg-field__label">{{layout.label}}</label>
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
    layout: {
      type: Object,
      default: () => {}
    },
    state: {
      type: Object,
      default: () => {}
    },
  },
}
</script>

<style lang="scss" scoped>
$inputs: '.wg-input,   
  .wg-textarea,
  .wg-select, 
  .wg-input-file';
.wg-field {
  box-sizing: border-box;
  padding: 0 var(--gutter-half);
  margin-bottom: var(--gutter);
  min-width: 200px;
  @for $i from 12 through 1 {
    &--col-#{$i} {
     width: percentage((1 / 12) * $i);
    }
  }
  &__label {
    display: block;
    margin-bottom: 5px;
    font-size: 0.9em;
  }
  #{$inputs} {
    &:not([disabled]) {
      &:hover,
      &[hover] {
        box-shadow: 0 0 10px rgba(black, 0.1);
      }
      &:focus,
      &[focus] {
        border-color: var(--colors-dark);
      }
    }
    &[disabled] {
      opacity: 0.6;
    }
  }
  &--error {
    label {
      color: var(--colors-error);
    }
    #{$inputs} {
      border-color: var(--colors-error);
      color: var(--colors-error);
      &::placeholder {
        color: inherit;
      }
    }
  }
  &--success {
    #{$inputs} {
      border-color: var(--colors-success);
    }
  }
}
</style>
