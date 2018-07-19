<template>
  <component :is="tag" class="wg-content-card">
    <a :href="href">
      <wg-img
        :srcset="`http://picsum.photos/372/235?image=${img} 1200w,
        http://picsum.photos/297/188?image=${img} 972w,
        http://picsum.photos/352/221?image=${img} 480w`"
        :src="`http://picsum.photos/480/303?image=${img}`"
        :placeholder="`http://picsum.photos/60/38?image=${img}`"
      />
      <span class="wg-content-card__info">
        <p v-if="title" class="wg-content-card__title">{{title}}</p>
        <p v-if="!img" class="wg-content-card__subtitle">{{subtitle}}</p>
        <time v-if="time" class="wg-content-card__time">{{time}}</time>
      </span>
    </a>
  </component>
</template>

<script>
import WgHeading from '@/components/wg-uikit/wg-text/WgHeading'
import WgImg from '@/components/wg-uikit/WgImg'
export default {
  name: 'WgContentCard',
  components: {
    'wg-heading': WgHeading,
    'wg-img': WgImg,
  },
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    href: {
      type: String,
      default: null
    },
    // img: {
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
    time: {
      type: String,
      default: null
    },
  },
  data () {
    return {
      img: Math.floor(Math.random() * Math.floor(30))
    }
  }
}
</script>

<style lang="scss" scoped>
$component: '.wg-content-card';
#{$component} {
  margin-bottom: var(--wg-gutter-xl);
  a {
    display: block;
    overflow: hidden;
    border-radius: var(--wg-border-radius);
    box-shadow: var(--wg-box-shadow-l);
    background-color: $wg-color-sys-k;
    text-decoration: none;
    transition: all var(--wg-transition-duration-faster) var(--wg-transition-timing-function);
    &:hover {
      transform: translateY(calc(var(--wg-gutter) * -1));
      box-shadow: var(--wg-box-shadow-xxl);
      .wg-img {
        opacity: 0.6;
      }
      #{$component}__title {
        color: var(--wg-color-secondary);
      }
    }
  }
  .wg-img {
    background-color: var(--wg-color-primary); 
    border-top-left-radius: var(--wg-border-radius);
    border-top-right-radius: var(--wg-border-radius);
    transition: opacity var(--wg-transition-duration-faster) var(--wg-transition-timing-function);
  }
  &__info {
    display: block;
    box-sizing: border-box;
    padding: var(--wg-gutter-l);
    time {
      font-size: var(--wg-font-size-s);
      font-weight: $wg-font-weight-light;
      color: $wg-color-sys-e;
    }
  }
  &__title {
    margin: 0 0 var(--wg-gutter-l);
    font-size: var(--wg-font-size-xl);
    font-weight: $wg-font-weight-bold;
    color: $wg-color-sys-b;
    line-height: $wg-line-height-xl;
    transition: color var(--wg-transition-duration-faster) var(--wg-transition-timing-function);
  }
  &__subtitle {
    margin: 0 0 var(--wg-gutter-l);
    font-size: var(--wg-font-size);
    color: $wg-color-sys-e;
    line-height: $wg-line-height-xl;
  }
}
</style>
