<template>
  <div class="wg-form-group wg-form-group--checkboxes"> 
    <label class="wg-checkbox" v-for="(checkbox, index) in options" :key="index">
      <input type="checkbox"
        :checked="checked.indexOf(checkbox.name) > -1"    
        :name="checkbox.name"
        @change="onChange(checkbox)"/>
        {{checkbox.text}}
    </label>
  </div>
</template>

<script>  
export default {
  name: 'WgFormCheckbox',
  props: {
    options: {
      type: Array,
      default: () => []
    },
  },
  data () {
    return {
      checked: this.getChecked()
    }
  },
  methods: {
    getChecked: function () {
      let checked = this.options
        .filter(option => option.checked === true)
      return checked.map(option => option.name)
    },
    onChange: function (checkbox) {
      checkbox.checked = !checkbox.checked
      this.checked = this.getChecked()
      this.$emit('change', this.checked || null)
    }
  }
}
</script>

<style lang="scss" scoped>
.wg-form-group {
  &--checkbox {
    box-sizing: border-box;
    padding: var(--wg-gutter-l);
  }
}
.wg-checkbox {
  display: flex;
  align-items: center;
  min-height: $wg-input-height / 2;
  font-size: var(--wg-font-size);
  color: $wg-color-sys-f;
  cursor: pointer;
  input {
    margin-right: var(--wg-gutter);
  }
}
</style>
