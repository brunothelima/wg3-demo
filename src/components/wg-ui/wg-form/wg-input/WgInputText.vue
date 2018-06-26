<template>
  <wg-form-field :label="label"
    :success="success"
    :error="error"
    :cols="cols">
      <input :class="`wg-input-${type}`"
        :autocomplete="true"
        :type="type"
        :id="id"
        :name="name"
        :placeholder="placeholder" 
        :disabled="disabled"
        v-model="model"
        @input="onChange($event.target.value)">
  </wg-form-field>
</template>

<script>  
import { WgInputMixin } from '@/mixins/WgInputMixin'
import WgFormField from '@/components/wg-ui/wg-form/WgFormField'

export default {
  name: 'WgInputText',
  mixins: [WgInputMixin],
  components: {
    'wg-form-field': WgFormField
  },
}
</script>

<style lang="scss" scoped>
[class*="wg-input"] {
  box-sizing: border-box;
  height: $wg-input-height;
  width: 100%;
  padding: 0 var(--wg-gutter-l);
  background-color: $wg-color-sys-k;
  border: var(--wg-border-width) var(--wg-border-style) $wg-color-sys-h;
  border-radius: var(--wg-border-radius);
  font: #{$wg-font-weight-regular} var(--wg-font-size) var(--wg-font-family);
  color: $wg-color-sys-f;
  outline: none;
  transition: all var(--wg-transition-duration-faster) var(--wg-cubic-bezier);
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
.wg-form-field {
  &--error {
    /deep/ .wg-form-field__label {
      color: $wg-color-error;
    }
    [class*="wg-input"] {
      border-color: $wg-color-error;
    }
  }
}
</style>
