<template>
  <div class="wg-field" :class="`col-${cols}`">
    <label v-if="label.length" class="wg-field__label">{{label}}</label>
    <input class="wg-field__input" 
      :type="type"
      :required="required"
      :placeholder="placeholder"/>
  </div>
</template>

<script>  
export default {
  name: 'WgField',
  props: {
    cols: {
      type: Number,
      default: 4
    },
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text',
      validator: value => {
        return value.match(/(text|number|email|tel)/)
      },
    },
    required: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: ''
    },
  }
}
</script>

<style lang="scss" scoped>
.wg-field {
  position: relative;
  box-sizing: border-box;
  padding: 0 var(--gutter);
  margin-bottom: var(--gutter);
  @for $i from 12 through 1 {
    &.col-#{$i} {
      width: percentage((1 / 12) * $i);
    }
  }
  &__label {
    display: inline-block;
    font-size: 0.9em;
    margin-bottom: 5px;
  }
  &__input {
    display: block;
    box-sizing: border-box;
    height: 40px;
    width: 100%;
    padding: 0 var(--gutter-half);
    border: 1px solid var(--color-neutral);
    outline: none;
  }
}
</style>
