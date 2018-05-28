<template>
  <section class="wg-ogin wg-center">
    <div class="wg-login__box">
      <form class="wg-form" @submit.prevent="login" novalidate>
        <h3 class="login__title wg-h3">WidGrid3</h3>
        <WgField label="E-mail*" 
          type="email" 
          placeholder="Digite seu e-mail" 
          :cols="12"
          :required="true" />
        <WgField label="Password*" 
          type="password" 
          placeholder="Digite sua senha" 
          :cols="12"
          :required="true" />
        <div class="wg-form__submit">
          <button type="submit" class="wg-btn" v-if="authStatus !== 'loading'">
            Login
          </button>
          <span v-else>
            Authenticating...
          </span>
        </div>
      </form>
    </div>
  </section>
</template>

<script>  
import { mapGetters } from 'vuex'
import {WG_AUTH_REQUEST} from '@/store/actions/WgAuth'
import WgForm from '@/components/wg-ui/wg-form/WgForm'
import WgField from '@/components/wg-ui/wg-form/WgField'
import WgBtn from '@/components/wg-ui/WgBtn'

export default {
  name: 'WgLogin',
  components: {
    WgForm,
    WgField,
    WgBtn,
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
