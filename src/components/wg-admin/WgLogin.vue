<template>
  <section class="wg-login">
    <wg-container>
      <div class="panel">
        <wg-heading level="h2" weight="regular">Welcome to Widgrid</wg-heading>
        <div class="panel__box">
          <div class="panel__head">Login to continue</div>
          <div class="panel__form">
            <wg-form :schema="schema" :status="authState" @success="login($event)">
              <template slot="submit">Login</template>
            </wg-form>
            <div class="panel__footer">
              <a href="">Forgot your password?</a>
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

import WgHeading from '@/components/wg-ui/wg-text/WgHeading'
import WgContainer from '@/components/wg-ui/wg-layout/WgContainer'
import WgForm from '@/components/wg-ui/wg-form/WgForm'
import WgBtn from '@/components/wg-ui/WgBtn'

const schema = [
  {
    label: 'Username',
    type: 'text', 
    id: 'username',
    name: 'username', 
    placeholder: 'Type your username',
    // value: '', 
    validations: { 
      required: true, 
    }
  },
  {
    label: 'Password',
    type: 'password', 
    id: 'password',
    name: 'passowrd', 
    placeholder: 'Type your password',
    // value: '', 
    validations: { 
      required: true, 
    }
  },
];

export default {
  name: 'WgLogin',
  mixins: [WgAuthMixin],
  components: {
    'wg-heading': WgHeading,
    'wg-container': WgContainer,
    'wg-form': WgForm,
    'wg-btn': WgBtn,
  },
  data () {
    return {
      schema: schema,
    }
  },
  computed: {
    ...mapState({
      authState: state => state.admin.auth.status
    }),
  },
  mounted: function () {
    this.$store.commit('admin/shape/toggle', true)
  },
  destroyed: function () {
    this.$store.commit('admin/shape/toggle', false)
  }
}
</script>

<style lang="scss" scoped>
.wg-login {
  height: 100%;
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
</style>
