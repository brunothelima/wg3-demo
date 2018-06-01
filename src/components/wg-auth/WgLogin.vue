<template>
  <section class="wg-ogin wg-center">
    <div class="wg-login__box">
      <WgForm @onSubmit="login()">
        <WgHeading level="h3">WidGrid3</WgHeading>
        <!-- <WgField label="E-mail*" 
          type="email" 
          placeholder="Digite seu e-mail" 
          :cols="12"
          :required="true" />
        <WgFormGroup label="Password*" 
          type="password" 
          placeholder="Digite sua senha" 
          :cols="12"
          :required="true" /> -->
        <WgFormSubmit :status="authStatus">
          Login
        </WgFormSubmit>
      </WgForm>
    </div>
  </section>
</template>

<script>  
import { mapGetters } from 'vuex'
import {WG_AUTH_REQUEST} from '@/store/actions/WgAuth'
import WgHeading from '@/components/wg-ui/WgHeading'
import WgForm from '@/components/wg-ui/wg-form/WgForm'
import WgFormSubmit from '@/components/wg-ui/wg-form/WgFormSubmit'
// import WgFormGroup from '@/components/wg-ui/wg-form/WgFormGroup'

export default {
  name: 'WgLogin',
  components: {
    WgHeading,
    WgForm,
    WgFormSubmit,
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      const { email, password } = this
      this.$store.dispatch(WG_AUTH_REQUEST, { email, password }).then(() => {
        this.$router.push('/')
      })
    },
  },
  computed: {
    ...mapGetters(['authStatus']),
  },
}
</script>

<style lang="scss" scoped>
.wg-login {
  background-color: var(--color-light);
  width: 100vw;
  min-height: 100vh;
  &__title {
    text-align: center;
  }
  &__box {
    box-sizing: border-box;
    width: 100%;
    max-width: 400px;
    padding: var(--gutter-double);
    background-color: white;
    border-radius: var(--border-radius);
    box-shadow: 0 0 40px rgba(black, .05);
  }
}
</style>
