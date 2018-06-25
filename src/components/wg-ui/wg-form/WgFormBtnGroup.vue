<template>
   <div class="wg-btn-group" v-if="buttons">
    <button v-for="(button, index) in buttons" :key="index"
      :class="{'active': button.value === selected}"
      @click="onClick(button.value)">
      {{button.title}}
    </button>
  </div>
</template>

<script>
export default {
  name: 'WgFormBtnGroup',
  props: {
    buttons: {
      type: Array,
      default: () => []
    },
    value: {
      type: String,
      default: ''
    },
  },
  data () {
    return {
      selected:  this.value
    }
  },
  methods: {
    onClick: function (value) {
      this.selected = value
      this.$emit('change', this.selected)
    }
  }
}
</script>

<style lang="scss" scoped>
.wg-btn-group {
  overflow: hidden; 
  display: flex;
  width: 100%;
  border: $wg-border-width $wg-border-style $wg-color-sys-h;
  border-radius: var(--wg-border-radius);
  button {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: $wg-color-sys-k;
    border: $wg-border-width $wg-border-style $wg-color-sys-h;
    height: $wg-input-height;
    color: $wg-color-sys-f;
    text-align: center;
    text-transform: uppercase;
    outline: none;
    cursor: pointer;
    transition: background-color var(--wg-transition-duration-faster) var(--wg-cubic-bezier),
      color var(--wg-transition-duration-faster) var(--wg-cubic-bezier);
    &.active {
      color: $wg-color-sys-b;
      background-color: $wg-color-sys-h;
    }
    &:first-child {
      border-left: none;
      border-top-left-radius: var(--wg-border-radius);
      border-bottom-left-radius: var(--wg-border-radius);
    }
    &:last-child {
      border-right: none;
      border-top-right-radius: var(--wg-border-radius);
      border-bottom-right-radius: var(--wg-border-radius);
    }
  }
}
</style>
