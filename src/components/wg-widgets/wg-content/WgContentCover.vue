<template>
  <component :is="tag" :class="['wg-content-cover', `wg-content-cover--${model}`]">
    <a :href="href">
      <picture>
        <source :srcset="`http://picsum.photos/972/640?image=${img}`" media="(min-width: 1200px)">
        <source :srcset="`http://picsum.photos/704/472?image=${img}`" media="(min-width: 972px)">
        <source :srcset="`http://picsum.photos/520/343?image=${img}`" media="(min-width: 480px)">
        <img :src="`http://picsum.photos/480/321?image=${img}`" class="wg-content-cover__img">
      </picture>
      <span class="wg-content-cover__info">
        <p v-if="hat" class="wg-content-cover__hat">{{hat}}</p>
        <wg-heading v-if="title" class="wg-content-cover__title" level="h1">{{title}}</wg-heading>
      </span>
    </a>
  </component>
</template>

<script>
import WgHeading from '@/components/wg-uikit/wg-text/WgHeading'
export default {
  name: 'WgContentCover',
  components: {
    'wg-heading': WgHeading
  },
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    model: {
      type: String,
      default: 'default'
    },
    href: {
      type: String,
      default: null
    },
    // img: {
    //   type: String,
    //   default: null
    // },
    hat: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
  },
  data () {
    return {
      img: Math.floor(Math.random() * Math.floor(16))
    }
  }
}
</script>

<style lang="scss" scoped>
$component: '.wg-content-cover';
#{$component} {
  overflow: hidden;
  position: relative;
  width: 100%;
  padding-bottom: 66%;
  margin-bottom: var(--wg-gutter-xl);
  border-radius: var(--wg-border-radius);
  a {
    display: block;
    &:hover {
      picture img {
        transform: scale(1.2);
        opacity: 0.5;
      }
      #{$component}__info { 
        transform: translateY(-5%);
      }
    }
  }
  picture {
    position: absolute;
    z-index: 1;
    background-color: var(--wg-color-secondary);
    @include overlay();
    img {
      display: block; 
      width: 100%;
      max-width: 100%;
      transition: transform var(--wg-transition-duration-slower) var(--wg-transition-timing-function),
        opacity var(--wg-transition-duration-slower) var(--wg-transition-timing-function);
    }
  }  
  &__info {
    position: absolute;
    box-sizing: border-box;
    z-index: 2;
    display: block;
    bottom: 0;
    width: 75%;
    padding: var(--wg-gutter-xl);
    transition: transform var(--wg-transition-duration-slower) var(--wg-transition-timing-function);
  }
  &__hat {
    margin-bottom: var(--wg-gutter);
    font-size: var(--wg-font-size-xl);
    color: var(--wg-color-primary);
  }
  &__title {
    margin: 0;
    color: $wg-color-sys-k;
    text-shadow: var(--wg-box-shadow-l);
  }
  &--small {
    margin-bottom: var(--wg-gutter-l);
    #{$component}__info {
      padding: var(--wg-gutter-l);
      width: 100%;
    }
    #{$component}__title {
      font-size: var(--wg-font-size);
    }
  }
}
@include wg-brakepoint ($component, $wg-brakepoint-minimal) {
  &__hat {
    display: none;
  }
  &__title {
     font-size: var(--wg-font-size-xl);
  }
}
</style>
