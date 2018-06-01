<template>
  <div class="wg-form-group wg-form-group--checkboxes"> 
    <label class="wg-checkbox" 
      v-for="(checkbox, checkboxIndex) in options"
      :key="checkboxIndex">
      <input autocomplete
        type="checkbox"
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
  &--checkboxes {
    box-sizing: border-box;
    padding: var(--gutter-half);
    background-color: rgba(black, 0.05);
  }
}
.wg-checkbox {
  display: flex;
  align-items: center;
  height: 30px;
  font-size: 0.9em;
  color: var(--colors-dark);
  cursor: pointer;
  input {
    margin-right: var(--gutter-half);
  }
}
</style>
