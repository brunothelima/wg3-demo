<template>
  <wg-form-field :label="t(label)"
    :success="success"
    :error="error"
    :cols="cols">
			<div class="wg-input-select">
        <select :id="id"
          :name="name"
          :disabled="disabled"
          v-model="model"
          @input="onChange($event.target.value)">
            <option v-for="(option, index) in options" :key="index"
              :selected="model === option.value"
              :value="option.value">
                {{t(option.title)}}
            </option>
				</select>
				{{text || t(placeholder)}}
        <i class="fa fa-caret-down"></i>
			</div>
  </wg-form-field>
</template>

<script>  
import { WgInputMixin } from '@/mixins/WgInputMixin'
import WgFormField from '@/components/wg-uikit/wg-form/WgFormField'

export default {
  name: 'WgInputSelect',
  mixins: [WgInputMixin],
  components: {
    'wg-form-field': WgFormField
  },
  props: {
    options: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      text: this.options.find(opt => opt.value === this.model).title || ''
    }
  },
  methods: {
    onChange (value) {      
      let selected = this.options.find(opt => opt.value === value)
      this.model = selected.value
      this.$emit('change', this.model)
    }
  }
}
</script>

<style lang="scss" scoped>
.wg-input-select {
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
  cursor: pointer;
  outline: none;
  transition-duration: var(--wg-transition-duration-faster);
  transition-timing-function: var(--wg-transition-timing-function);
  transition-property: border-color, box-shadow, color, transform;
  select {
		position: absolute;
		z-index: 2;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
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
  .fa-caret-down {
    position: absolute;
    z-index: 1;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: var(--wg-gutter-xxl);
    height: var(--wg-font-size);
    line-height: var(--wg-font-size);
    text-align: center;
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
