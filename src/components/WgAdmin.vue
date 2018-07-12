<template>
  <div class="wg-admin">
    <wg-header />
    <wg-shape />
    <transition name="wg-router" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import WgHeader from '@/components/wg-uikit/wg-layout/WgHeader'
import WgShape from '@/components/wg-uikit/wg-layout/WgShape'
export default {
  name: 'WgContainer',
  components: {
    'wg-header': WgHeader,
    'wg-shape': WgShape,
  }, 
}
</script>
<style lang="scss" scoped>
$component: '.wg-admin';
#{$component} {
  overflow: auto;
  box-sizing: border-box;
  height: 100vh;
  padding-top: calc(var(--wg-gutter-xl) + 32px);
  // background-color: $wg-color-sys-h;
  .wg-header {
    z-index: 10;
  }
  section {
    position: relative;
    z-index: 1;
  }
}
.wg-router {
  &-enter,
  &-leave {
    z-index: 2;
  }
  &-enter-active {  
    animation: wg-router-transition var(--wg-transition-duration) var(--wg-transition-timing-function) forwards;
  }
  &-leave-active {
    animation: wg-router-transition var(--wg-transition-duration) var(--wg-transition-timing-function) forwards reverse;
  }
}
@keyframes wg-router-transition {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@include wg-brakepoint ($component, $wg-brakepoint-medium) {
  .wg-shape {
    background-size: auto 100%;
  }
}
</style>
