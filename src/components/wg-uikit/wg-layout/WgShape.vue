<template>
  <transition name="wg-shape">
    <div v-if="visibility"
      :class="['wg-shape', 
        `wg-shape--${type}`,
        `wg-shape--${position}`
      ]">
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'WgShape',
  computed: {
    ...mapState({
      type: state => state.admin.shape.type,
      position: state => state.admin.shape.position,
      visibility: state => state.admin.shape.visible,
    })
  }
}
</script>

<style lang="scss" scoped>
.wg-shape {
  position: fixed;
  z-index: 0;
  &:before {
    display: block;
    content: '';
    width: 100%;
    height: 100%;
  }
  &--grayscale:before {
    filter: grayscale(100%) brightness(150%);
    opacity: 0.4;
  }
  &--left,
  &--right {
    top: var(--wg-gutter-xl);
    width: 60vw;
    height: calc(100vh - var(--wg-gutter-xl));
    &:before {
      background: url('../../../assets/img/wg-shape-gradient-vtc.svg') no-repeat;
      background-size: auto 100%;
    }
  }
  &--left {
    left: 0;
    &:before {
      transform: scaleX(-1);
      background-position: left top; 
    }
    &.wg-shape-enter-active {  
      animation: wg-shape-left-animation var(--wg-transition-duration) var(--wg-transition-timing-function) forwards;
    }
    &.wg-shape-leave-active {
      animation: wg-shape-left-animation var(--wg-transition-duration) var(--wg-transition-timing-function) forwards reverse;
    }
  }
  &--right {
    right: 0;
    &:before {
      background-position: right top; 
    }
    &.wg-shape-enter-active {  
      animation: wg-shape-right-animation var(--wg-transition-duration) var(--wg-transition-timing-function) forwards;
    }
    &.wg-shape-leave-active {
      animation: wg-shape-right-animation var(--wg-transition-duration) var(--wg-transition-timing-function) forwards reverse;
    }
  }
  &--top,
  &--bottom {
    left: 0;
    width: 100vw;
    height: calc(100vh - var(--wg-gutter-xl));
    &:before {
      background: url('../../../assets/img/wg-shape-gradient-hrz.svg') no-repeat;
      background-size: 100% auto;
      background-position: left top;
    }
  }
  &--top {
    top: 0;
    &.wg-shape-enter-active {  
      animation: wg-shape-top-animation var(--wg-transition-duration) var(--wg-transition-timing-function) forwards;
    }
    &.wg-shape-leave-active {
      animation: wg-shape-top-animation var(--wg-transition-duration) var(--wg-transition-timing-function) forwards reverse;
    }
  }
  &--bottom {
    bottom: 0;
    &:before {
      transform: scale(-1, -1);
    }
    &.wg-shape-enter-active {  
      animation: wg-shape-bottom-animation var(--wg-transition-duration) var(--wg-transition-timing-function) forwards;
    }
    &.wg-shape-leave-active {
      animation: wg-shape-bottom-animation var(--wg-transition-duration) var(--wg-transition-timing-function) forwards reverse;
    }
  }
}
@keyframes wg-shape-left-animation {
  from {
    transform: translate(-100%, -25vh) rotate(-35deg);
  } to {
    transform: translate(0, 0) rotate(0);
  }
}
@keyframes wg-shape-right-animation {
  from {
    transform: translate(100%, -25vh) rotate(35deg);
  } to {
    transform: translate(0, 0) rotate(0);
  }
}
@keyframes wg-shape-top-animation {
  from {
    transform: translate(25vw, -100%) rotate(35deg);
  } to {
    transform: translate(0, 0) rotate(0);
  }
}
@keyframes wg-shape-bottom-animation {
  from {
    transform: translate(-25vw, 100%) rotate(35deg);
  } to {
    transform: translate(0, 0) rotate(0);
  }
}
</style>
