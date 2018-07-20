<template>
  <header class="wg-header">
    <img src="@/assets/img/wg-logo.png" alt="Logo">
    <select class="wg-header__language" v-model="locale">
      <option value="pt" selected>PT</option>
      <option value="en">EN</option>
    </select>
  </header>
</template>

<script>
export default {
  name: 'WgHeader',
  data () {
    return {
      locale: 'pt'
    }
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val
    }
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
  select {
    position: absolute;
    right: var(--wg-gutter-l);
    top: 0;
    bottom: 0;
    margin: auto;
    height: $wg-input-height / 2;
  }
}
</style>
