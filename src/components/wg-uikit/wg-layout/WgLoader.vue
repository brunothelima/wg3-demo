<template>
  <transition-group name="wg-loader" mode="out-in">
    <div key="loader" class="wg-loader" v-if="loading">
      <span>
        <img src="@/assets/img/wg-loader.svg" alt="Loader">
      </span>
    </div>
    <div key="content" class="wg-loader-content" v-else>
      <slot />
    </div>  
  </transition-group>
</template>

<script>
export default {
  name: 'WgLoader',
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.wg-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  span {
    border-radius: 50%;
    img {
      display: block;
    }
  }
  &-enter-active {  
    animation: wg-loader-animation var(--wg-transition-duration-faster) var(--wg-transition-timing-function) forwards;
  }
  &-leave-active {
    animation: wg-loader-animation var(--wg-transition-duration-faster) var(--wg-transition-timing-function) forwards reverse;
  }
  @keyframes wg-loader-animation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
</style>
