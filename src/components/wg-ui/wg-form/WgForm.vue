<template>
  <form ref="WgForm" 
    :class="['wg-form']" 
    :action="action" 
    @submit.prevent="onSubmit($event)">
      <slot name="before" />
      <component v-for="(field, index) in schema" :key="index"
        v-bind="field"
        :success="!$v.form[field.name].$invalid && $v.form[field.name].$dirty"
        :error="$v.form[field.name].$error"
        :is="`wg-input-${field.type}`"
        @change="$v.form[field.name].$model = $event"/>
      <slot/>
  </form>
</template>

<script>  
import { WgFormMixin } from '@/mixins/WgFormMixin'    
import WgInputText from '@/components/wg-ui/wg-form/wg-input/WgInputText'    
import WgBtn from '@/components/wg-ui/WgBtn'    

export default {
  name: 'WgForm',
  mixins: [WgFormMixin],
  components: {
    'wg-input-text': WgInputText,
    'wg-btn': WgBtn,
  },
  props: {
    action: {
      type: String,
      default: null
    },
    schema: {
      type: Array,
      defautl: () => []
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
    onChange: function (v) {
      console.log(v)
    },
    onSubmit: function ($event) {
      console.log(this)
    },
  },
}
</script>

<style lang="scss" scoped>
.wg-form {
  display: flex;
  flex-wrap: wrap;
  margin: 0 calc(var(--wg-gutter-l) * -1);
}
</style>
