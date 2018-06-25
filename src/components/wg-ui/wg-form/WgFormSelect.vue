<template>
  <div class="wg-select" :disabled="disabled">
    <select :name="name"
      @change="onChange($event.target.value)">
        <option v-for="(option, index) in options" :key="index"
          :value="option.value"
          :selected="option === selected">
            {{option.text}}
        </option>
    </select>
    <span>
      {{selected.text || placeholder}}
    </span>
    <i class="fa fa-carret-down"></i>
  </div>
</template>

<script>  
const optMock = { text: null, value: null }
export default {
  name: 'WgFormSelect',
  props: {
    name: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    }, 
    disabled: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: () => []
    },  
  },
  data () {
    return {
      selected: this.options.find(opt => opt.selected === true) || optMock
    }
  },
  methods: {
    onChange: function (value) {
      this.selected = this.options.find(opt => opt.value == value)
      this.$emit('change', this.selected.value)
    }
  },
}
</script>

<style lang="scss" scoped>
.wg-select {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: $wg-input-height;
  width: 100%;
  padding: 0 var(--wg-gutter-l);
  background-color: $wg-color-sys-k;
  border: var(--wg-border-width) var(--wg-border-style) $wg-color-sys-h;
  border-radius: var(--wg-border-radius);
  outline: none;
  cursor: pointer;
  transition-duration: var(--wg-transition-duration);
  transition-timing-function: var(--wg-cubic-bezier);
  transition-property: border-color, box-shadow, color; 
  font: #{$wg-font-weight-regular} var(--wg-font-size) var(--wg-font-family);
  color: $wg-color-sys-f;
  select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  &[disabled] {
    cursor: default;
    select {
      display: none;
    }
  } 
}
</style>
