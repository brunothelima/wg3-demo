<template>
  <form @submit.prevent="onSubmit($event)" 
    :action="action"
    :novalidate="true" 
    :class="[{
      'wg-form--css-only': cssOnly,
    },'wg-form']">
      <wg-form-field v-for="(field, fieldIndex) in schema" 
        :key="fieldIndex"
        :layout="field.layout"
        :state="$v.form[field.name]"
      >
        {{$v.form[field.name].$model}}
        <wg-form-textarea v-bind="field" 
          v-if="field.type === 'textarea'"
          @input="$v.form[field.name].$model = $event" />

        <wg-form-checkbox v-bind="field"  
          v-else-if="field.type === 'checkbox'"
          @change="$v.form[field.name].$model = $event" />     

        <wg-form-radio v-bind="field"
          v-else-if="field.type === 'radio'" 
          @change="$v.form[field.name].$model = $event" />      

        <wg-form-select v-bind="field" 
          v-else-if="field.type === 'select'" 
          @change="$v.form[field.name].$model = $event" />      

        <wg-form-file v-bind="field" 
          v-else-if="field.type === 'file'" 
          @change="$v.form[field.name].$model = $event" />      
          
        <wg-form-input v-else 
          v-bind="field" 
          @input="$v.form[field.name].$model = $event" />      

      </wg-form-field>
      <slot/>
  </form>
</template>

<script>  
import { 
  WG_FORM_POST_ATTEMPT,
  WG_FORM_POST_VALIDATION_ERROR,
  WG_FORM_POST_VALIDATION_SUCCESS,
  WG_FORM_POST_REQUEST
} from '@/store/actions/WgForm'
import { WgFormValidationMixin } from '@/components/wg-ui/wg-form/WgFormValidationMixin'
import WgFormField from '@/components/wg-ui/wg-form/WgFormField'
import WgFormTextarea from '@/components/wg-ui/wg-form/WgFormTextarea'
import WgFormRadio from '@/components/wg-ui/wg-form/WgFormRadio'
import WgFormCheckbox from '@/components/wg-ui/wg-form/WgFormCheckbox'
import WgFormSelect from '@/components/wg-ui/wg-form/WgFormSelect'
import WgFormFile from '@/components/wg-ui/wg-form/WgFormFile'
import WgFormInput from '@/components/wg-ui/wg-form/WgFormInput'

export default {
  name: 'WgForm',
  components: {
    'wg-form-field': WgFormField,
    'wg-form-textarea': WgFormTextarea,
    'wg-form-radio': WgFormRadio,
    'wg-form-checkbox': WgFormCheckbox,
    'wg-form-select': WgFormSelect,
    'wg-form-file': WgFormFile,
    'wg-form-input': WgFormInput,
  },
  mixins: [WgFormValidationMixin],
  props: {
    action: {
      required: true,
      type: String,
    },
    schema: {
      required: true,
      type: Array,
      default: [],
    },
    cssOnly: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return { 
      stamp: + new Date(),
      form: this.setFormModel(this.schema)
    }
  },
  methods: {
    onSubmit: function (form) {
      this.$v.$touch()
      this.$store.commit(WG_FORM_POST_ATTEMPT, this.$data)
      if (!this.$v.$invalid) {
        this.$store.commit(WG_FORM_POST_VALIDATION_SUCCESS, this.$data)
        this.$store.dispatch(WG_FORM_POST_REQUEST, {action: this.action, ...this.$data })
      } else {
        this.$store.commit(WG_FORM_POST_VALIDATION_ERROR, this.$data)
      }
    },
  },
  validations () {
    return {
      form: this.setValidations(this.schema)
    } 
  }
}
</script>

<style lang="scss" scoped>
.wg-form {
  display: flex;
  flex-wrap: wrap;
  margin: 0 calc(var(--gutte-half) * -1);
}
</style>
