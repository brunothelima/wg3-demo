<template>
  <div class="wg-social-share">
    <a href=""><i class="fab fa-youtube"></i></a>
    <a href=""><i class="fab fa-twitter"></i></a>
    <a href=""><i class="fab fa-facebook"></i></a>
  </div>
</template>

<script>
export default {
  name: 'WgSocialShare',
}
</script>

<style lang="scss" scoped>
.wg-social-share {
  display: flex;
  align-items: center;
  margin-bottom: var(--wg-gutter-xxl);
  a {
    margin-right: var(--wg-gutter-xl);
    i {
      color: var(--wg-color-secondary);
      font-size: var(--wg-font-size-xl);
      transition: color var(--wg-transition-duration-faster) var(--wg-cubic-bezier);
    }
    &:hover i {
      color: var(--wg-color-primary);
    }
  }
}
</style>
