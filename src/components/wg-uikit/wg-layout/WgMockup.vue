<template>
  <component :is="tag" class="wg-mockup">
    <span :class="`wg-cols-${cols}`" v-for="index in counter" :key="index">
      <img :src="mockup" />
    </span>
  </component>
</template>

<script>
export default {
  name: 'WgMockup',
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
  computed: {
    mockup: function () {
      return require(`@/assets/img/wg-mockup/wg-${this.widget}-mockup.svg`)
    }
  }
}
</script>

<style lang="scss" scoped>
.wg-mockup {
  display: flex;
  flex-wrap: wrap;
  margin: 0 calc(var(--wg-gutter-l) * -1);
  animation: wg-mockup-animation 600ms infinite alternate;
  span {
    box-sizing: border-box;
    padding: var(--wg-gutter-l);
  }
  svg, img {
    display: block;
    width: 100%;
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
