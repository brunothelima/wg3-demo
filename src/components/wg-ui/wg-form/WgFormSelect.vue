<template>
  <div class="wg-select"
    :hover="hover"
    :focus="focus"
    :disabled="disabled"
  >
    <select ref="select"
      :name="name"
      :value="value"
      @change="onChange($event.target.value)">
        <option v-for="(option, optionIndex) in options"
          :selected="option.value == selected.value"
          :key="optionIndex"
          :value="option.value">
            {{option.text}}
        </option>
    </select>
    {{selected.text || placeholder}}
    <i class="fa fa-chevron-down"></i>
  </div>
</template>

<script>  
export default {
  name: 'WgFormSelect',
  data () {
    return {
      selected: this.getSelected(this.value)
    }
  },
  props: {
     name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Type Here'
    },
    hover: {
      type: Boolean,
      default: false
    },
    focus: {
      type: Boolean,
      default: false
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
  methods: {
    getSelected: function (value) {
      let selected = this.options.filter(option => option.value == value)
      return selected[0] || false
    },
    onChange: function (value) {
      this.selected = this.getSelected(value)
      this.$emit('change', value)
    }
  }
}
</script>

<style lang="scss" scoped>
$inputs: '.wg-select';

#{$inputs} {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 40px;
  width: 100%;
  padding: 0 var(--gutter-half);
  border: 2px solid var(--colors-neutral);
  outline: none;
  font-size: 0.7em;
  cursor: pointer;
  transition: all var(--speed) var(--cubic-bezier);
  select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  &[disabled] select {
    display: none;
  }
}
</style>
