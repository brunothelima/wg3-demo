<template>
  <div class="wg-hero" ref="hero">
    <div class="wg-hero__img">
      <wg-img :src="`http://picsum.photos/480/400?image=${img}`"
        :large="`http://picsum.photos/1200/400?image=${img}`"
        :medium="`http://picsum.photos/940/400?image=${img}`"
        :small="`http://picsum.photos/768/400?image=${img}`"
        :placeholder="`http://picsum.photos/20/6?image=${img}`"
      />
    </div>
    <div class="wg-hero__info">
      <wg-heading level="h2">{{title}}</wg-heading>
      <p class="wg-hero__subtitle">{{subtitle}}</p>
    </div>
    <div class="wg-hero__scroll" @click="scrollDown">
      <span>Scroll down</span><br>
      <i class="fa fa-arrow-down"></i>
    </div>
  </div>
</template>

<script>
import WgHeading from '@/components/wg-uikit/wg-text/WgHeading'
import WgImg from '@/components/wg-uikit/WgImg'

export default {
  name: 'WgHero',
  components: {
    'wg-heading': WgHeading,
    'wg-img': WgImg,
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
        top: this.$refs.hero.offsetTop + this.$refs.hero.clientHeight ,
        behavior: 'smooth'
      });
    }
  },
  data () {
    return {
      img: Math.floor(Math.random() * Math.floor(30))
    }
  }
}
</script>

<style lang="scss" scoped>
$component: '.wg-hero';
#{$component} {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  &__img {
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 100%;
    background-color: var(--wg-color-secondary-darkest);
    .wg-img {
      height: 100%;
      opacity: 0.4;
      /deep/ img {
        position: absolute;
        left: 50%;
        width: auto;
        max-width: unset;
        height: 100%;
        transform: translateX(-50%);
      }
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
  &__scroll {
    z-index: 3;
    position: absolute;
    bottom: var(--wg-gutter-l);
    text-align: center;
    cursor: pointer;
    span, i {
      display: inline-block;
      color: var(--wg-color-primary);
      transition: transform var(--wg-transition-duration) var(--wg-transition-timing-function);
    }
    span {
      margin-bottom: var(--wg-gutter);
      font-weight: $wg-font-weight-bold;
    }
    &:hover {
      span {
        transform: scale(1.025);
      }
      i {
        transform: translateY(25%);
      }
    }
  }
}
</style>
