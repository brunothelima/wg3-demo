<template>
  <div class="wg-form-group wg-form-group--radio"> 
    <label class="wg-radio" 
      v-for="(radio, radioIndex) in options"
      :key="radioIndex">
      <input autocomplete
        type="radio"
        :name="name"
        :checked="radio.value === checked"
        @change="onChange(radio.value)"/>
        {{radio.text}}
    </label>
  </div>
</template>

<script>  
export default {
  name: 'WgFormRadio',
  props: {
    name: {
      type: String,
      default: 'radio_button'
    },
    value: {
      type: Number,
      default: null
    },
    options: {
      type: Array,
      default: () => []
    },   
  },
  data () {
    return {
      checked: this.value
    }
  },
  methods: {
    onChange: function (value) {
      this.checked = value;
      this.$emit('change', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.wg-form-group {
  &--radio {
    box-sizing: border-box;
    padding: var(--wg-gutter-l);
  }
}
.wg-radio {
  display: flex;
  align-items: center;
  height: 48px;
  font-size: var(--wg-font-size-s);
  color: $wg-color-sys-f;
  cursor: pointer;
  input {
    margin-right: var(--wg-gutter-l);
  }
}
</style>
