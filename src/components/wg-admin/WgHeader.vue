<template>
  <header class="wg-header">
    <div class="wg-header__left">
      <span class="wg-header__user" v-if="isProfileLoaded">
        <i class="fa fa-user"></i> 
        {{profile.name}} | 
        <button @click="logout">Sair</button>
      </span>
    </div>
    <div class="wg-header__center"><img src="@/assets/img/wg-logo.png" alt="Logo"></div>
    <div class="wg-header__right">
      <wg-i18n />
    </div>
  </header>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import WgI18n from '@/components/wg-uikit/WgI18n'
import { WgAuthMixin } from '@/mixins/WgAuthMixin'


export default {
  name: 'WgHeader',
  mixins: [WgAuthMixin],
  components: {
    'wg-i18n': WgI18n
  },
  computed: {
    ...mapGetters({
      isProfileLoaded: 'admin/user/isProfileLoaded',
    }),
    ...mapState({
      profile: state => state.admin.user.profile,
    })
  },
}
</script>

<style lang="scss" scoped>
.wg-header {
  position: fixed;
  z-index: 3;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
  background-color: rgba(white, 0.95);
  box-shadow: var(--wg-box-shadow);
  > * {
    flex: 1;
    padding: 0 var(--wg-gutter-l);
  }
  &__right {
    text-align: right;
  }
  &__center {
    text-align: center;
    img {
      display: inline-block;
    }
  }
  &__user {
    margin-right: var(--wg-gutter-l);
    color: $wg-color-sys-d;
    font-weight: $wg-line-height-xl;
    i {
      display: inline-block;
      margin-right: calc(var(--wg-gutter) / 2);
    }
    button {
      height: $wg-input-height / 2;
      padding: 0;
      border: none;
      background-color: none;
      color: var(--wg-color-secondary);
      outline: none;
      cursor: pointer;
    }
  }
}
</style>
