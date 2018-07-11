<template>
  <div class="wg-admin">
    <wg-header />
    <transition name="wg-shape">
      <div class="wg-shape" v-if="shapeVisibility"></div>
    </transition>
    <transition name="wg-router" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import WgHeader from '@/components/wg-ui/wg-layout/WgHeader'
export default {
  name: 'WgContainer',
  components: {
    'wg-header': WgHeader
  }, 
  computed: {
    ...mapState({
      shapeVisibility: state => state.admin.shape.visible,
    })
  }
}
</script>
<style lang="scss" scoped>
$component: '.wg-admin';
#{$component} {
  overflow: auto;
  box-sizing: border-box;
  height: 100vh;
  padding-top: calc(var(--wg-gutter-xl) + 32px);
  background-color: $wg-color-sys-h;
  .wg-header {
    z-index: 10;
  }
  .wg-shape {
    position: fixed;
    z-index: 0;
    top: var(--wg-gutter-xl);
    right: 0;
    width: 60vw;
    height: calc(100vh - var(--wg-gutter-xl));
    background: url('../assets/img/wg-login-shape.svg') no-repeat;
    background-position: right top; 
    background-size: auto 100%;
    &-enter-active {  
      animation: wg-shape-animation var(--wg-transition-duration) var(--wg-transition-timing-function) forwards;
    }
    &-leave-active {
      animation: wg-shape-animation var(--wg-transition-duration) var(--wg-transition-timing-function) forwards reverse;
    }
  }
}
@keyframes wg-shape-animation {
  from {
    transform: translate(100%, -25%) rotate(35deg);
  } to {
    transform: translate(0, 0) rotate(0);
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
