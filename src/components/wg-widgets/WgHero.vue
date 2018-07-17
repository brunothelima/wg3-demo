<template>
  <div class="wg-hero" ref="elem">
    <picture>
      <source :srcset="`http://picsum.photos/1980/400?image=4`" media="(min-width: 1200px)">
      <source :srcset="`http://picsum.photos/1200/400?image=16`" media="(min-width: 972px)">
      <source :srcset="`http://picsum.photos/940/400?image=17`" media="(min-width: 480px)">
      <img :src="`http://picsum.photos/480/400?image=18`" class="wg-hero__background">
    </picture>
    <div class="wg-hero__info">
      <wg-heading level="h2">{{title}}</wg-heading>
      <p class="wg-hero__subtitle">{{subtitle}}</p>
    </div>
    <div class="wg-hero__help" @click="scrollDown">
      <span>Scroll down</span><br>
      <i class="fa fa-arrow-down"></i>
    </div>
  </div>
</template>

<script>
import WgHeading from '@/components/wg-uikit/wg-text/WgHeading'

export default {
  name: 'WgHero',
  components: {
    'wg-heading': WgHeading,
  },
  props: {
    // background: {
    //   type: String,
    //   default: null
    // },
    title: {
      type: String,
      default: null
    },
    subtitle: {
      type: String,
      default: null
    },
  },
  methods: {
    scrollDown: function () {
      window.scrollTo({
        top: this.$refs.elem.offsetTop + this.$refs.elem.clientHeight ,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style lang="scss" scoped>
$component: '.wg-hero';
#{$component} {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  picture {
    overflow: hidden;
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 100%;
    background-color: var(--wg-color-secondary-darkest);
    img {
      display: block;
      position: absolute;
      z-index: 1;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0.4;
    }
  } 
  &__info {
    position: relative;
    z-index: 2;
    padding: var(--wg-gutter-l);
    text-align: center;
    h2 {
      color: $wg-color-sys-k;
      margin-bottom: var(--wg-gutter-xxl);
    }
    p {
      color: $wg-color-sys-k;
    }
  }
  &__help {
    z-index: 3;
    position: absolute;
    bottom: var(--wg-gutter-l);
    text-align: center;
    span, i {
      display: inline-block;
      color: var(--wg-color-primary);
    }
    span {
      margin-bottom: var(--wg-gutter);
      font-weight: $wg-font-weight-bold;
    }
  }
}
</style>
