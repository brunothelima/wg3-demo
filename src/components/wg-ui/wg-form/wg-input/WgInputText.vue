<template>
  <wg-form-field :label="label"
    :success="success"
    :error="error">
      <input type="text"
        :id="id"
        :name="name"
        :placeholder="placeholder" 
        :disabled="disabled"
        v-model="model"
        @input="onChange($event.target.value)">
  </wg-form-field>
</template>

<script>  
import WgFormField from '@/components/wg-ui/wg-form/WgFormField'
export default {
  name: 'WgInputText',
  components: {
    'wg-form-field': WgFormField
  },
  props: {
    label: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {
      model: this.value || ''
    }
  },
  methods: {
    onChange: function (value) {
      this.$emit('change', this.model)
    }
  }
}
</script>

<style lang="scss" scoped>
.wg-input-text {
  display: flex;
  flex-wrap: wrap;
  margin: 0 calc(var(--wg-gutter-l) * -1);
}
</style>
