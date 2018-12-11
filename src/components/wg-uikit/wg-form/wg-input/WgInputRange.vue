<template>
  <wg-form-field :label="t(label)"
    :success="success"
    :error="error"
    :cols="cols">
      <input class="wg-input-range"
        type="range"
        :id="id"
        :name="name"
        :disabled="disabled"
        :min="min"
        :max="max"
        v-model="model"
        @input="onChange($event.target.value)">
  </wg-form-field>
</template>

<script>  
import { WgInputMixin } from '@/mixins/WgInputMixin'
import WgFormField from '@/components/wg-uikit/wg-form/WgFormField'

export default {
  name: 'WgInputRange',
  mixins: [WgInputMixin],
  components: {
    'wg-form-field': WgFormField
  },
  props: {
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
      default: 1000 
    },
  },
  methods: {
    onChange () {
      this.$emit('change', parseInt(this.model))
    }
  }
}
</script>

<style lang="scss" scoped>
.wg-input-range {
  width: 100%;
  opacity: 0.6;
}

</style>
