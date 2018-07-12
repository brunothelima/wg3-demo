<template>
  <div class="wg-newsletter">
    <wg-heading level="h4">Sign up to our daily mail</wg-heading>
    <wg-form :schema="schema" />
  </div>
</template>

<script>  
import { mapGetters } from 'vuex'

import WgHeading from '@/components/wg-uikit/wg-text/WgHeading'
import WgForm from '@/components/wg-uikit/wg-form/WgForm'

const schema = [
  {
    type: 'text', 
    id: 'name',
    name: 'name', 
    placeholder: 'Your name',
    validations: { 
      required: true, 
    }
  },
  {
    type: 'select', 
    id: 'subject',
    name: 'subject', 
    placeholder: 'Subject',
    value: 'error_report',
    options: [
      { title: 'Report Error', value: 'error_report' },
      { title: 'Sugestion', value: 'sugestion' },
      { title: 'Complement', value: 'complement' },
    ],
    validations: { 
      required: true, 
    }
  },
  {
    type: 'email', 
    id: 'email',
    name: 'email', 
    placeholder: 'Your Email',
    validations: { 
      required: true, 
      email: true
    }
  },
  {
    type: 'checkbox', 
    id: 'terms',
    name: 'terms', 
    placeholder: 'Subject',
    value: ['terms_conditions'],
    options: [
      { title: 'I accept the terms and conditions', name: 'terms_conditions' },
    ],
    validations: { 
      required: true, 
    }
  },
];

export default {
  name: 'WgNewsletter',
  components: {
    'wg-heading': WgHeading,
    'wg-form': WgForm,
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
  /deep/ .wg-form__footer {
    padding-top: var(--wg-gutter);
    margin-bottom: var(--wg-gutter-xl);
    text-align: center;
  }
}
</style>
