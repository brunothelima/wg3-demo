<template>
  <div class="wg-newsletter">
    <wg-heading level="h4">Sign up to our daily mail</wg-heading>
    <wg-form :action="'wg_newsletter_request.php'" :schema="schema">
      <wg-form-submit :status="formStatus">Sign up</wg-form-submit>
    </wg-form>  
  </div>
</template>

<script>  
import { mapGetters } from 'vuex'

import WgHeading from '@/components/wg-ui/WgHeading'
import WgForm from '@/components/wg-ui/wg-form/WgForm'
import WgFormSubmit from '@/components/wg-ui/wg-form/WgFormSubmit'

const schema = [
  {
    props: { type: 'text', name: 'name', value: '', placeholder: 'Your name', },
    layout: { cols: 12, label: '' },
    validations: { required: true, }
  },
  {
    props: { type: 'select', name: 'subject', value: '', placeholder: 'Subject', },
    options: [ { text: 'Report', value: 1 }, { text: 'Suggestion', value: 2 }, { text: 'Complement', value: 3 }, ],
    layout: { cols: 12, label: '' },
    validations: { required: true, }
  },
  {
    props: { type: 'email', name: 'email', value: '', placeholder: 'Your Email', },
    layout: { cols: 12, label: '', },
    validations: { required: true, email: true }
  },
   {
    props: { type: 'checkbox', name: 'single_checkbox', value: [], },
    options: [
      { name: 'terms_conditions', text: 'I accept the terms and conditions'}, 
    ],
    layout: { cols: 12, label: '', },
  },
];

export default {
  name: 'WgNewsletter',
  components: {
    'wg-heading': WgHeading,
    'wg-form': WgForm,
    'wg-form-submit': WgFormSubmit,
  },
  data () {
    return {
      schema: schema,
    }
  },
  computed: {
    ...mapGetters(['formStatus']),
  }
}
</script>

<style lang="scss" scoped>
.wg-newsletter {
  margin-bottom: var(--wg-gutter-xl);
  h4 {
    margin-bottom: var(--wg-gutter-xl);
  }
}
.wg-form__submit {
  text-align: center;
}
</style>
