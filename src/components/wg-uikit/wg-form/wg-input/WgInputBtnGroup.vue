<template>
  <wg-form-field :label="t(label)"
    :success="success"
    :error="error"
    :cols="cols">
      <div class="wg-input-btn-group"
        :id="id"
        :name="name"
        :disabled="disabled">
          <button v-for="(option, index) in options" :key="index"
            :class="{'active': model === option.value}"
            @click="onChange(option.value)">
               {{t(option.title)}}
          </button>
      </div>
  </wg-form-field>
</template>

<script>  
import { WgInputMixin } from '@/mixins/WgInputMixin'
import WgFormField from '@/components/wg-uikit/wg-form/WgFormField'

export default {
  name: 'WgInputBtnGroup',
  mixins: [WgInputMixin],
  components: {
    'wg-form-field': WgFormField
  },
  props: {
    value: {
      type: [String, Number],
      default: 14
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      model: this.value || null
    }
  },
  methods: {
    onChange (value) {
      this.model = value
      this.$emit('change', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.wg-input-btn-group {
  display: flex;
  align-items: center;  
  height: $wg-input-height;
  border-radius: var(--wg-border-radius);
  border: var(--wg-border-width) var(--wg-border-style) $wg-color-sys-h;
  button {
    width: 100%;
    height: 100%;
    background-color: $wg-color-sys-k;
    outline: none;
    border: none;
    border-left: var(--wg-border-width) var(--wg-border-style) $wg-color-sys-h;
    font-size: var(--wg-font-size-s);
    // text-transform: uppercase;
    color: $wg-color-sys-e;
    cursor: pointer;
    transition: background-color var(--wg-transition-duration-faster) var(--wg-transition-timing-function);
    &:hover {
      background-color: $wg-color-sys-j;      
    }
    &.active {
      background-color: $wg-color-sys-h;
      color: $wg-color-sys-d;
    }
    &:first-child {
      border-top-left-radius: var(--wg-border-radius);
      border-bottom-left-radius: var(--wg-border-radius);
      border-left: none;
    }
    &:last-child {
      border-top-right-radius: var(--wg-border-radius);
      border-bottom-right-radius: var(--wg-border-radius);
    }
  }
}
</style>
