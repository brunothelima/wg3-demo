<template>
  <div class="wg-card">
    <a :href="post.href">
      <!-- <picture v-if="post.img">
        <img class="wg-card__img" :src="post.img">
      </picture> -->
      <picture>
        <source srcset="http://picsum.photos/372/235" media="(min-width: 1200px)">
        <source srcset="http://picsum.photos/297/188" media="(min-width: 972px)">
        <source srcset="http://picsum.photos/352/221" media="(min-width: 480px)">
        <img src="http://picsum.photos/480/303" class="wg-card__img">
      </picture>
      <span class="wg-card__info">
        <p v-if="post.title" class="wg-card__title">{{post.title}}</p>
        <p v-if="!post.img" class="wg-card__subtitle">{{post.subtitle}}</p>
        <time v-if="post.time" class="wg-card__time">{{post.time}}</time>
      </span>
    </a>
  </div>
</template>

<script>
import WgHeading from '@/components/wg-ui/wg-text/WgHeading'
export default {
  name: 'WgReadMore',
  components: {
    'wg-heading': WgHeading
  },
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.wg-card {
  box-sizing: border-box;
  padding: var(--wg-gutter-l);
  .wg-card__loading {
    svg, img {
      width: 100%;
    }
  }
  a {
    display: block;
    overflow: hidden;
    height: 100%;
    border-radius: var(--wg-border-radius);
    box-shadow: var(--wg-box-shadow-l);
    background-color: $wg-color-sys-k;
    text-decoration: none;
    transition: all var(--wg-transition-duration-faster) var(--wg-transition-timing-function);
    &:hover {
      transform: translateY(calc(var(--wg-gutter) * -1));
      box-shadow: var(--wg-box-shadow-xxl);
      picture img {
        opacity: 0.6;
      }
      .wg-card__title {
        color: var(--wg-color-secondary);
      }
    }
  }
  picture {
    background-color: var(--wg-color-primary); 
  }
  &__img, picture {
    display: block;
    max-width: 100%;
    border-top-left-radius: var(--wg-border-radius);
    border-top-right-radius: var(--wg-border-radius);
  }
  &__img {
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
