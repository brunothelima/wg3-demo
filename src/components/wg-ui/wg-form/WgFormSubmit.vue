<template>
  <div class="wg-form__submit">
    <wg-btn :status="status">
      {{text}}
    </wg-btn>
  </div>
</template>

<script>  
import WgBtn from '@/components/wg-ui/WgBtn'

export default {
  name: 'WgFormSubmit',
  components: {
    'wg-btn': WgBtn
  },
  props: {
    status: {
      type: String,
      default: 'normal'
    },
    text: {
      type: String,
      default: 'Send'
    }
  }
}
</script>

<style lang="scss" scoped>
.wg-form__submit {
  width: 100%;
  .wg-btn {
    margin: 0 var(--gutter-half);
  }
}
</style>
