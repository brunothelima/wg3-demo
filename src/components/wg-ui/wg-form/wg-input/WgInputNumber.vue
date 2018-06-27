<template>
  <wg-form-field :label="label"
    :success="success"
    :error="error"
    :cols="cols">
			<div class="wg-input-number">
				{{model + unit || placeholder}}
        <div class="wg-input-number__controlls">
          <button @click.prevent="plus()"><i class="fa fa-caret-up"></i></button>
          <button @click.prevent="minus()"><i class="fa fa-caret-down"></i></button>
        </div>
			</div>
  </wg-form-field>
</template>

<script>  
import { WgInputMixin } from '@/mixins/WgInputMixin'
import WgFormField from '@/components/wg-ui/wg-form/WgFormField'

export default {
  name: 'WgInputNumber',
  mixins: [WgInputMixin],
  components: {
    'wg-form-field': WgFormField
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
    unit: {
      type: String,
      default: ''
    },
    min: {
      type: Number,
      default: 0 
    },
    max: {
      type: Number,
      default: 1000 
    },
  },
  methods: {
    plus: function () {
      let newVal = this.model + 1
      if (newVal > this.max) {
        return
      }
      this.model = newVal
      this.$emit('change', this.model)
    },
    minus: function () {
      let newVal = this.model - 1
      if (newVal < this.min) {
        return
      }
      this.model = newVal
      this.$emit('change', this.model)
    },
  }
}
</script>

<style lang="scss" scoped>
.wg-input-number {
	position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: $wg-input-height;
  width: 100%;
  padding: 0 var(--wg-gutter-xxl) 0 var(--wg-gutter-l);
  background-color: $wg-color-sys-k;
  border: var(--wg-border-width) var(--wg-border-style) $wg-color-sys-h;
  border-radius: var(--wg-border-radius);
  font: #{$wg-font-weight-regular} var(--wg-font-size) var(--wg-font-family);
  color: $wg-color-sys-f;
  outline: none;
  transition: all var(--wg-transition-duration-faster) var(--wg-cubic-bezier);
  &__controlls {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    position: absolute;
    right: var(--wg-gutter);
    top: 0;
    bottom: 0;
    width: var(--wg-gutter-l);
    height: var(--wg-gutter-xxl);
    margin: auto;
    button {
      width: 100%;
      height: var(--wg-gutter-l);
      padding: 0;
      background-color: transparent;
      border: none;
      text-align: center;
      color: $wg-color-sys-f;
      font-size: var(--wg-font-size);
      line-height: var(--wg-gutter-l);
      cursor: pointer;
      outline: none;
      &:active {
        opacity: 0.6;
      }
    }
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
  &--success {
    /deep/ .wg-form-field__label {
      color: $wg-color-success;
    }
    .wg-input-select {
      border-color: $wg-color-success;
    }
  }
  &--error {
    /deep/ .wg-form-field__label {
      color: $wg-color-error;
    }
    .wg-input-select {
      border-color: $wg-color-error;
    }
  }
}
</style>
