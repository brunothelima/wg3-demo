<template>
  <div class="wg-number" :unit="unit">
    <input class=""
      type="text" 
      readonly 
      :name="name"
      :disabled="disabled"
      :value="current + unit"/>   
      <button class="plus" @click.prevent="plus">
        <i class="fa fa-caret-up"></i>
      </button>
      <button class="minus" @click.prevent="minus">
        <i class="fa fa-caret-down"></i>
      </button>      
  </div>
</template>

<script>  
export default {
  name: 'WgFormNumber',
  props: {
    name: {
      type: String,
      default: null
    },
    unit: {
      type: String,
      default: null
    },
    value: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 1
    },
    placeholder: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {
      current: this.value
    }
  },
  methods: {
    plus: function () {
      let newVal = this.current + 1
      if (newVal > this.max) {
        return
      }
      this.current = newVal
      this.$emit('change', this.current)
      if (this.current === this.max) {
        this.$emit('onMax')
      }
    },
    minus: function () {
      let newVal = this.current - 1
      if (newVal < this.min) {
        return
      }
      this.current = newVal
      this.$emit('change', this.current)
      if (this.current === this.min) {
        this.$emit('onMin')
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.wg-number {
  position: relative;
  input {
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
  }
  &[unit] input {
    padding-right: var(--wg-gutter-xxl);
  }
  button {
    position: absolute;
    top: 0;
    right: var(--wg-gutter-l);
    bottom: 0;
    width: var(--wg-gutter);
    height: 14px;
    padding: 0;
    margin: auto;
    text-align: center;
    background-color: transparent;
    border: none;
    font-size: var(--wg-font-size);
    line-height: var(--wg-gutter-l);
    color: $wg-color-sys-e;
    outline: none;
    &.plus {
      transform: translateY(-50%);
    }
    &.minus {
      transform: translateY(50%);
    }
    &:active {
      opacity: 0.6;
    }
  }
}
</style>
