<template>
  <section class="login wg-center">
    <div class="login__box">
      <form action="" class="wg-form" @submit.prevent="login">
        <h3 class="login__title wg-h3">WidGrid3</h3>
        <div class="wg-field">
          <label class="wg-field__label">E-mail*</label>
          <input 
            v-model="email" 
            required
            type="email" 
            class="wg-field__input" />
        </div>
        <div class="wg-field wg-field--password">
          <label class="wg-field__label">Password*</label>
          <input 
            v-model="password" 
            required
            type="password" 
            class="wg-field__input" />
        </div>
        <div class="wg-form__submit">
          <button type="submit" class="wg-btn">
            Entrar
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import {WG_AUTH_REQUEST} from '@/store/actions/WgAuth'

export default {
  name: 'WgLogin',
  data () {
    return {
      email: 'brunothelima@gmail.com',
      password: 'dogy',
    }
  },
  methods: {
    login: function () {
      const { email, password } = this
      this.$store.dispatch(WG_AUTH_REQUEST, { email, password }).then(() => {
        this.$router.push('/')
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.login {
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
