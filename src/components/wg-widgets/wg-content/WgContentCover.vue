<template>
  <component :is="tag" :class="['wg-content-cover', `wg-content-cover--${model}`]">
    <a :href="href">
      <span class="wg-content-cover__img">
        <wg-img :src="`http://picsum.photos/480/321?image=${img}`"
          :large="`http://picsum.photos/972/640?image=${img}`"
          :medium="`http://picsum.photos/704/472?image=${img}`"
          :small="`http://picsum.photos/520/343?image=${img}`"
          :placeholder="`http://picsum.photos/20/13?image=${img}`"
        />
      </span>
      <span class="wg-content-cover__info">
        <p v-if="hat" class="wg-content-cover__hat">{{hat}}</p>
        <wg-heading v-if="title" class="wg-content-cover__title" level="h1">{{title}}</wg-heading>
      </span>
    </a>
  </component>
</template>

<script>
import WgHeading from '@/components/wg-uikit/wg-text/WgHeading'
import WgImg from '@/components/wg-uikit/WgImg'

export default {
  name: 'WgContentCover',
  components: {
    'wg-heading': WgHeading,
    'wg-img': WgImg,
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
      img: Math.floor(Math.random() * Math.floor(30))
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
      #{$component}__img .wg-img {
        transform: scale(1.2);
        opacity: 0.5;
      }
      #{$component}__info { 
        transform: translateY(-5%);
      }
    }
  }
  &__img {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: var(--wg-color-secondary);
    @include overlay();
    .wg-img {
      z-index: 0;
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
      font-size: var(--wg-font-size-l);
    }
  }
}
@include wg-brakepoint ($component, $wg-brakepoint-small) {
  &__info {
    width: 100%;
  }
  &--small {
    #{$component}__title {
      font-size: var(--wg-font-size-s);
    }
  }
}
@include wg-brakepoint ($component, $wg-brakepoint-minimal) {
  &__hat {
    display: none;
  }
  &__title,
  &--small #{$component}__title {
     font-size: var(--wg-font-size-xl);
  }
}
</style>
