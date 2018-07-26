<i18n>
{
  "en": {
    "welcome": "Welcome to Widgrid",
    "continue": "Login to continue",
    "submit": "Login",
    "retrivePassword": "Forgot your password?",
    "inputs": {
      "username": {
        "label": "Username",
        "placeholder": "Type your username"
      },
      "password": {
        "label": "Password",
        "placeholder": "Type your password"
      }
    }
  },
  "pt": {
    "welcome": "Bem vindo ao Widgrid",
    "continue": "Digite seus dados",
    "submit": "Login",
    "retrivePassword": "Esqueceu sua senha?",
    "inputs": {
      "username": {
        "label": "Usuário",
        "placeholder": "Nome de usuário"
      },
      "password": {
        "label": "Senha",
        "placeholder": "Digite sua senha"
      }
    }
  }
}
</i18n>

<template>
  <section class="wg-login">
    <wg-container>
      <div class="panel">
        <wg-heading level="h2" weight="regular">{{ $t('welcome') }}</wg-heading>
        <div class="panel__box">
          <div class="panel__head">{{ $t('continue') }}</div>
          <div class="panel__form">
            <wg-form :i18n="$i18n" :schema="schema" :status="authState" @success="login($event)">
              <template slot="submit">{{ $t('submit') }}</template>
            </wg-form>
            <div class="panel__footer">
              <a href="">{{ $t('retrivePassword') }}</a>
            </div>
          </div>
        </div>
      </div>
    </wg-container>
  </section>
</template>

<script>  
import { mapState } from 'vuex'
import { WgAuthMixin } from '@/mixins/WgAuthMixin'

import WgHeading from '@/components/wg-uikit/wg-text/WgHeading'
import WgContainer from '@/components/wg-uikit/wg-layout/WgContainer'
import WgForm from '@/components/wg-uikit/wg-form/WgForm'
import WgBtn from '@/components/wg-uikit/WgBtn'

export default {
  name: 'WgLogin',
  mixins: [WgAuthMixin],
  components: {
    'wg-heading': WgHeading,
    'wg-container': WgContainer,
    'wg-form': WgForm,
    'wg-btn': WgBtn,
  },
  computed: {
    ...mapState({
      authState: state => state.admin.auth.status
    }),
  },
  data () {
    return {
      schema: [
        {
          label: 'inputs.username.label',
          type: 'text', 
          id: 'username',
          name: 'username', 
          placeholder: 'inputs.username.placeholder',
          validations: { 
            required: true, 
          }
        },
        {
          label: 'inputs.password.label',
          type: 'password', 
          id: 'password',
          name: 'passowrd', 
          placeholder: 'inputs.password.placeholder',
          validations: { 
            required: true, 
          }
        },
      ]
    }
  },
  created: function () {
    this.$store.commit('admin/shape/setPosition', 'right')
    this.$store.commit('admin/shape/setType', 'gradient')
  },
  mounted: function () {
    this.$store.commit('admin/shape/toggle', true)
  },
  destroyed: function () {
    this.$store.commit('admin/shape/toggle', false)
  },
}
</script>

<style lang="scss" scoped>
$component: '.wg-login';
#{$component} {
  height: 100%;
  padding-top: var(--wg-gutter-xxl);
  .wg-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 100%;
    @media screen and (max-width: #{$wg-brakepoint-small}) { 
      align-items: flex-start;
    }
    h2 {
      margin-bottom: var(--wg-gutter-xl);
      text-align: center;
      color: $wg-color-sys-c;
    }
  }
}
.panel {
  position: relative;
  z-index: 3;  
  &__box {
    overflow: hidden;
    width: 100%;
    max-width: 368px;
    border-radius: var(--wg-border-radius-l);
    box-shadow: var(--wg-box-shadow-xxl);
    background-color: $wg-color-sys-k;
  }
  &__head {
    text-align: center;
    padding: var(--wg-gutter-l);
    background-color: $wg-color-sys-j;
    font-size: var(--wg-font-size-s);
    font-weight: 700;
    color: $wg-color-sys-c;
  }
  &__form {    
    padding: var(--wg-gutter-xxl) var(--wg-gutter-l);
  }
  /deep/ .wg-form__footer {
    padding-top: var(--wg-gutter);
    margin-bottom: var(--wg-gutter-xl);
    text-align: center;
  }
  &__footer {
    text-align: center;
    a {
      color: $wg-color-sys-f;
      font-weight: $wg-font-weight-light;
      transition: color var(--wg-transition-duration) var(--wg-transition-timing-function);
      &:hover {
        color: $wg-color-sys-d;
      }
    }
  }
  /deep/ .wg-form__footer .wg-btn {
    min-width: 120px;
  }
}
@include wg-brakepoint ($component, $wg-brakepoint-minimal) {
  padding-top: var(--wg-gutter-xxl);
}
</style>
