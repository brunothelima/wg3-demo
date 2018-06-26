<template>
  <wg-form-field :label="label"
    :success="success"
    :error="error"
    :cols="cols">
      <div v-for="(option, index) in options" :key="index" 
        class="wg-input-checkbox">
          <input type="checkbox" 
            :id="`${option.name}_id`"
            :name="option.name"
            :checked="model.indexOf(option.name) > -1"
            @change="onChange(option.name)"/>
          <label :for="`${option.name}_id`">              
            {{option.title}}
          </label>
      </div>
  </wg-form-field>
</template>

<script>  
import { WgInputMixin } from '@/mixins/WgInputMixin'
import WgFormField from '@/components/wg-ui/wg-form/WgFormField'

export default {
  name: 'WgInputCheckbox',
  mixins: [WgInputMixin],
  components: {
    'wg-form-field': WgFormField
  },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      model: this.value || []
    }
  },
  methods: {
    onChange: function (value) {      
      if (this.model.indexOf(value) > -1) {
        this.model.splice(this.model.indexOf(value), 1)
      } else {
        this.model.push(value)
      }
      this.$emit('change', this.model)
    }
  }
}
</script>

<style lang="scss" scoped>
.wg-input-checkbox {
  display: flex;
  align-items: center;  
  min-height: var(--wg-gutter-xxl);
  input + label {
    padding-left: var(--wg-gutter);
    font: #{$wg-font-weight-regular} var(--wg-font-size) var(--wg-font-family);
    color: $wg-color-sys-d;
    cursor: pointer;
  }
}
</style>
