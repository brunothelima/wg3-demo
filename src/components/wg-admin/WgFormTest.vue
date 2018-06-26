<template>
  <section class="form-test">
    <wg-container> 
      <wg-form :schema="schema" @submit="onSubmit($event)">
        <!-- <wg-input-text label="Manual input text" 
          :success="!$v.form['manual'].$invalid && $v.form['manual'].$dirty"
          :error="$v.form['manual'].$error"
          type="text"
          name="manual_input_name"
          value="Manual initial value"
          placeholder="Manual input placeholder"
          @change="$v.form['manual'].$model = $event"/> -->
        <wg-btn>Submit</wg-btn>
      </wg-form>
    </wg-container>
  </section>
</template>

<script>
// import { validationMixin } from 'vuelidate'
// import { required, minLength } from 'vuelidate/lib/validators'
import WgContainer from '@/components/wg-ui/WgContainer'
import WgForm from '@/components/wg-ui/wg-form/WgForm'
import WgBtn from '@/components/wg-ui/WgBtn'
import WgInputText from '@/components/wg-ui/wg-form/wg-input/WgInputText'    

const schema = [
  {
    label: 'Auto input text',
    type: 'text',
    name: 'auto_input_name',
    value: 'Auto initial value',
    placeholder: 'Auto input placeolder',
    validations: {
      required: true,
      minLength: 20,
    }
  }
]

export default {
  name: 'WgFormText',
  // mixins: [validationMixin],
  components: {
    'wg-container': WgContainer,
    'wg-form': WgForm,
    'wg-input-text': WgInputText,
    'wg-btn': WgBtn,
  },
  data () {
    return {
      schema: schema,
      // form: {
      //   manual: ''
      // }
    }
  },
  // validations () {
  //   return {
  //     form: {
  //       manual: {
  //         required,
  //         minLength: minLength(20)
  //       }
  //     }
  //   }
  // },
  methods: {
    onSubmit: function () {
      console.log(this.$data)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
