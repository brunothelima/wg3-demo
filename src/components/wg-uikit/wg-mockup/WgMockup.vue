<template>
  <component :is="tag" class="wg-mockup wg-row">
    <component v-for="index in counter" :key="index"
      :is="`wg-mockup-${widget}`" 
      :class="`wg-cols-${cols}`" />
  </component>
</template>

<script>
import WgMockupContentMini from './WgMockupContentMini'
import WgMockupContentCard from './WgMockupContentCard'
import WgMockupContentMega from './WgMockupContentMega'
import WgMockupPost from './WgMockupPost'

export default {
  name: 'WgMockup',
  components: {
    'wg-mockup-content-mini':  WgMockupContentMini,
    'wg-mockup-content-card': WgMockupContentCard,
    'wg-mockup-content-mega': WgMockupContentMega,
    'wg-mockup-post': WgMockupPost,
  },
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    cols: {
      type: Number,
      default: 12,
    },
    counter: {
      type: Number,
      default: 1,
    },
    widget: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.wg-mockup {
  display: flex;
  flex-wrap: wrap;
  margin: 0 calc(var(--wg-gutter-l) * -1);
  padding: var(--wg-gutter-l);
  animation: wg-mockup-animation 600ms infinite alternate;
  /deep/ .lines {
    li {
      display: block;
      height: var(--wg-gutter-l);
      margin-bottom: var(--wg-gutter-l);
      background-color: $wg-color-sys-h;
      &:last-child {
        width: 50%;
      }
    }
  }
  > * {
    margin-bottom: var(--wg-gutter-l);
  }
}
@keyframes wg-mockup-animation {
  from {
    opacity: 0.5;
  } to {
    opacity: 1;      
  }
}
</style>
