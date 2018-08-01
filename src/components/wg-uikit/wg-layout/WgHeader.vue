<template>
  <header class="wg-header">
    <img src="@/assets/img/wg-logo.png" alt="Logo">
    <wg-i18n />
  </header>
</template>

<script>
import WgI18n from '@/components/wg-uikit/WgI18n'

export default {
  name: 'WgHeader',
  components: {
    'wg-i18n': WgI18n
  }
}
</script>

<style lang="scss" scoped>
.wg-header {
  position: fixed;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
  background-color: rgba(white, 0.95);
  box-shadow: var(--wg-box-shadow);
  img {
    display: block;
  }
  .wg-i18n {
    position: absolute;
    right: var(--wg-gutter-l);
    top: 0;
    bottom: 0;
    margin: auto;
  }
}
</style>
