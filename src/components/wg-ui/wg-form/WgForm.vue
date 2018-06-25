<template>
  <form @submit.prevent="onSubmit($event)" 
    ref="formElm"
    :novalidate="true" 
    :action="action"
    class="wg-form">
    
      <wg-form-field v-for="(field, fieldIndex) in schema" 
        :key="fieldIndex"
        :v="$v[field.props.name]"
        v-bind="field.layout"
      >
        <wg-form-textarea v-bind="field.props" 
          v-if="field.props.type === 'textarea'"
          @input="$v[field.props.name].$model = $event" />

        <wg-form-checkbox v-bind="field.props"  
          :options="field.options"
          v-else-if="field.props.type === 'checkbox'"
          @change="$v[field.props.name].$model = $event" />     

        <wg-form-radio v-bind="field.props"
          :options="field.options"
          v-else-if="field.props.type === 'radio'" 
          @change="$v[field.props.name].$model = $event" />      

        <wg-form-select v-bind="field.props" 
          :options="field.options"
          v-else-if="field.props.type === 'select'" 
          @change="$v[field.props.name].$model = $event" />      

        <wg-form-file v-bind="field.props" 
          v-else-if="field.props.type === 'file'" 
          @change="$v[field.props.name].$model = $event" />      
          
        <wg-form-input v-else 
          v-bind="field.props" 
          @input="$v[field.props.name].$model = $event" />      
      
      </wg-form-field>
      <slot/>
  </form>
</template>

<script>  

import { WG_FORM_POST_REQUEST } from '@/store/actions/WgForm'

import WgFormField from '@/components/wg-ui/wg-form/WgFormField'
import WgFormInput from '@/components/wg-ui/wg-form/WgFormInput'

import { WgFormMixin } from '@/mixins/WgFormMixin'

export default {
  name: 'WgForm',
  components: {
    'wg-form-field': WgFormField,
    'wg-form-input': WgFormInput,
    'wg-form-select': () => import('./WgFormSelect'),
    'wg-form-textarea': () => import('./WgFormTextarea'),
    'wg-form-radio': () => import('./WgFormRadio'),
    'wg-form-checkbox': () => import('./WgFormCheckbox'),
    'wg-form-file': () => import('./WgFormFile'),
  },
  mixins: [WgFormMixin],
  props: {
    action: {
      type: String,
      default: ''
    },
    schema: {
      type: Array,
      default: () => [],
    },
    noSubmit: {
      type: Boolean,
      default: false
    },
    noValidation: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return this.getFormModel(this.schema)
  },
  methods: {
    onSubmit: function () {
      this.$emit('submit')
      if (!this.noValidation) {
        this.$v.$touch()
      }
      if (!this.$v.$invalid) {
        this.$emit('valid', this.$data) 
        if (this.action.length && !this.noSubmit) {
          this.$store.dispatch(WG_FORM_POST_REQUEST, this.action, this.$data)
            .then(resp => {
              this.$emit('success', resp)
              this.$v.$reset()
            })
        } else {
          this.$v.$reset()
        }
      } else {
        this.$emit('error')
      }
    },
  },
  validations () {
    return this.getFormValidations(this.schema)
  }
}
</script>

<style lang="scss" scoped>
.wg-form {
  display: flex;
  flex-wrap: wrap;
  margin: 0 calc(var(--wg-gutter-l) * -1);
}
</style>
