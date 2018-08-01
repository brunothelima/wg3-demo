<template>
  <form ref="WgForm" 
    :class="[{
      'wg-form--disabled': status === 'disabled',
      'wg-form--loading': status === 'loading'
    },'wg-form']" 
    :action="action" 
    @submit.prevent="onSubmit($event)">
      <slot name="before" />
      <!-- :success="!$v.form.$anyError && $v.form.$dirty" -->
      <component v-for="(field, index) in schema" :key="index"
        v-bind="field"
        :is="getComponentByFieldType(field.type)"
        :error="$v.form[field.name].$error"
        :i18n="i18n || $i18n"
        @change="onInputChange(field, $event)"/>
      <slot />
      <div class="wg-form__footer">
        <wg-btn model="primary" v-if="button && !$slots.footer" :status="status">
          <slot name="submit">Submit</slot>
        </wg-btn>
        <slot name="footer" />
      </div>
  </form>
</template>

<script>  
import { WgFormMixin } from '@/mixins/WgFormMixin'    
import WgInputText from './wg-input/WgInputText'     
import WgInputSelect from './wg-input/WgInputSelect'     
import WgInputCheckbox from './wg-input/WgInputCheckbox'     
import WgInputRange from './wg-input/WgInputRange'     
import WgInputNumber from './wg-input/WgInputNumber'     
import WgInputBtnGroup from './wg-input/WgInputBtnGroup'     
import WgInputColor from './wg-input/WgInputColor'     
import WgBtn from '@/components/wg-uikit/WgBtn'

export default {
  name: 'WgForm',
  mixins: [WgFormMixin],
  components: {
    'wg-input-text': WgInputText,
    'wg-input-select': WgInputSelect,
    'wg-input-checkbox': WgInputCheckbox,
    'wg-input-range': WgInputRange,
    'wg-input-number': WgInputNumber,
    'wg-input-btn-group': WgInputBtnGroup,
    'wg-input-color': WgInputColor,
    'wg-btn': WgBtn,
  },
  props: {
    action: {
      type: String,
      default: null
    },
    status: {
      type: String,
      default: null,
    },
    button: {
      type: Boolean,
      default: true,
    },
    schema: {
      type: Array,
      defautl: () => []
    },
    i18n: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      form: this.generateFormDataModel(this.schema)
    }
  },
  validations () {
    return {
      form: this.generateFormVuelidateModel(this.schema)
    }
  },
  methods: {
    getComponentByFieldType: function (type) {
      if (['text', 'email', 'password', 'tel'].indexOf(type) > -1) {
        return 'wg-input-text'
      } 
      return `wg-input-${type}`
    },
    onInputChange: function (field, value) {
      
      this.$v.form[field.name].$model = value
      this.schema.filter(schemaField => schemaField.name === field.name)
        .map(sameNameField => {
          sameNameField.value = value
        })
      this.$emit('change', { ...field, value: value })
    },
    onSubmit: function () {
      this.$emit('submit', this.form)
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$emit('success', this.form)
      } else { 
        this.$emit('error')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.wg-form {
  display: flex;
  flex-wrap: wrap;
  margin: 0 calc(var(--wg-gutter-l) * -1);
  transition: opacity var(--wg-transition-duration) var(--wg-transition-timing-function);
  &--loading {
    opacity: 0.6;
  }
  &__footer {
    width: 100%;
    padding: 0 var(--wg-gutter-l);
  }
}
</style>
