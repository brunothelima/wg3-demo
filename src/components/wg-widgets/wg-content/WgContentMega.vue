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
        <picture>
          <source :srcset="`http://picsum.photos/384/216?image=${img}`" media="(min-width: 1200px)">
          <source :srcset="`http://picsum.photos/297/188?image=${img}`" media="(min-width: 972px)">
          <source :srcset="`http://picsum.photos/352/221?image=${img}`" media="(min-width: 480px)">
          <img :src="`http://picsum.photos/480/303?image=${img}`" class="wg-content-card__img">
        </picture>
      </span>
    </a>
  </component>
</template>

<script>
export default {
  name: 'WgContentMega',
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
      img: Math.floor(Math.random() * Math.floor(16))
    }
  }
}
</script>

<style lang="scss" scoped>
$component: '.wg-content-mega';
#{$component} {
  box-sizing: border-box;
  padding: var(--wg-gutter);
  a {
    display: flex;
    align-items: flex-start;
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
      #{$component}__title {
        color: var(--wg-color-secondary);
      }
    }
  }
  &__info {
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
    flex: 1;
    img {
      display: block;
    }
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
    }
  } 

  &__img, 
  picture {
    display: block;
    position: relative;
    max-width: 100%;
    width: 100%;
    border-top-left-radius: var(--wg-border-radius-xl);
    border-bottom-left-radius: var(--wg-border-radius-xl);
    transition: opacity var(--wg-transition-duration-faster) var(--wg-transition-timing-function);
  }
  picture {
    background-color: var(--wg-color-primary); 
  }
}
</style>
