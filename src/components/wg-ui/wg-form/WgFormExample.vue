<template>
  <wg-form @submit="onSubmit()" action="wg_post_example.php" :schema="schema">
    <wg-form-submit text="Send"/>
  </wg-form>
</template>

<script>
import WgForm from '@/components/wg-ui/wg-form/WgForm'
import WgFormSubmit from '@/components/wg-ui/wg-form/WgFormSubmit'
import WgFormSchemaMock  from '@/components/wg-ui/wg-form/WgFormSchemaMock'

export default {
  name: 'WgFormExample',
  components: {
    'wg-form': WgForm,
    'wg-form-submit': WgFormSubmit,
  },
  data () {
    return {
      schema: WgFormSchemaMock
    }
  },
  methods: {
    onSubmit: function () {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
