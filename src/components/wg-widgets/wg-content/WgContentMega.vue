<template>
  <component :is="tag" class="wg-content-mega">
    <a :href="href">
      <span class="wg-content-mega__info">
        <span v-if="hat" class="wg-content-mega__hat">{{hat}}</span>
        <span v-if="title" class="wg-content-mega__title">{{title}}</span>
        <span v-if="subtitle" class="wg-content-mega__subtitle">{{subtitle}}</span>
      </span>
      <span v-if="img" class="wg-content-mega__img">
        <i v-if="icon" :class="`wg-content-mega__icon fa fa-${icon}`"></i>
        <wg-img :srcset="`http://picsum.photos/384/216?image=${img} 1200w,
          http://picsum.photos/297/188?image=${img} 972w,
          http://picsum.photos/352/221?image=${img} 480w`"
          :src="`http://picsum.photos/480/303?image=${img}`"
          :placeholder="`http://picsum.photos/60/38?image=${img}`"
        />
      </span>
    </a>
  </component>
</template>

<script>
import WgImg from '@/components/wg-uikit/WgImg'
export default {
  name: 'WgContentMega',
  components: {
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
    hat: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    subtitle: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    // img: {
    //   type: String,
    //   default: null
    // },
  },
  data () {
    return {
      img: Math.floor(Math.random() * Math.floor(30))
    }
  }
}
</script>

<style lang="scss" scoped>
$component: '.wg-content-mega';
#{$component} {
  margin-bottom: var(--wg-gutter-xl);
  a {
    display: flex;
    align-items: flex-start;
    overflow: hidden;
    border-radius: var(--wg-border-radius);
    box-shadow: var(--wg-box-shadow-l);
    background-color: $wg-color-sys-k;
    text-decoration: none;
    transition: all var(--wg-transition-duration) var(--wg-transition-timing-function);
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
  &__info {
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: var(--wg-gutter-l);
    > * {
      display: block;
    }
    #{$component}__hat {
      margin-bottom: var(--wg-gutter);
      font-size: var(--wg-font-size-l);
      color: var(--wg-color-secondary);
    }
    #{$component}__title {
      margin-bottom: var(--wg-gutter-l);
      font-size: var(--wg-font-size-xl);
      color: $wg-color-sys-b;
      font-weight: $wg-font-weight-bold;
    }
    #{$component}__subtitle {
      font-size: var(--wg-font-size);
      color: $wg-color-sys-e;
      font-weight: $wg-font-weight-light;
      line-height: $wg-line-height-xl;
    }
  }
  &__img {
    position: relative;
    width: 100%;
    #{$component}__icon {
      display: flex;
      z-index: 1;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: var(--wg-gutter-l);
      top: var(--wg-gutter-l);
      height: 50px;
      width: 50px;
      border-radius: var(--wg-border-radius-full);
      background-color: var(--wg-color-primary);
      color: $wg-color-sys-k; 
      &.fa-play:before {
        margin-right: -3px;
      }   
      .wg-img {
        display: block;
        border-top-left-radius: var(--wg-border-radius);
        border-bottom-left-radius: var(--wg-border-radius);
        transition: opacity var(--wg-transition-duration-faster) var(--wg-transition-timing-function);
      }
    }
  } 
}
@include wg-brakepoint ($component, $wg-brakepoint-minimal) {
  a {
    display: block;
  }
}
</style>
