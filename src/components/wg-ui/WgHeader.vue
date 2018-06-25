<template>
  <header class="wg-header">
    <img src="@/assets/img/wg-logo.png" alt="Logo">
  </header>
</template>

<script>
export default {
  name: 'WgHeader',
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
}
</style>
