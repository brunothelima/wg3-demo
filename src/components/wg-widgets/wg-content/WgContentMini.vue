<template>
  <component :is="tag" class="wg-content-mini">
    <a :href="href">
      <span v-if="img" class="wg-content-mini__img">
        <img :src="img">
      </span>
      <span class="wg-content-mini__info">
        <span class="wg-content-mini__title">{{title}}</span>
        <span v-if="!img" class="wg-content-mini__subtitle">{{subtitle}}</span>
      </span>
    </a>
  </component>
</template>

<script>
export default {
  name: 'WgContentMini',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    href: {
      type: String,
      default: null
    },
    img: {
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
  }
}
</script>

<style lang="scss" scoped>
$component: '.wg-content-mini';
#{$component} {
  margin-bottom: var(--wg-gutter-xl);
  &__img {
    height: 80px;
    width: 80px;
    border-radius: var(--wg-border-radius);
    background-color: var(--wg-color-primary);
    img {
      display: block;
      border-radius: inherit;
      transition: opacity var(--wg-transition-duration) var(--wg-transition-timing-function);
    }
    ~ #{$component}__info {
      box-sizing: border-box;
      padding-left: var(--wg-gutter-l);
    }
  }
  &__title {
    display: block;
    font-size: var(--wg-font-size);
    color: $wg-color-sys-b;
    font-weight: $wg-font-weight-bold;
    line-height: $wg-line-height-xl;
    transition: color var(--wg-transition-duration) var(--wg-transition-timing-function);
    ~ #{$component}__subtitle {
      padding-top: var(--wg-gutter);
    }
  }
  &__subtitle {
    display: block;
    line-height: $wg-line-height-xl;
    color: $wg-color-sys-e;
    font-weight: $wg-font-weight-light;
    transition: color var(--wg-transition-duration) var(--wg-transition-timing-function);
  }
  a {
    display: flex;
    text-decoration: none;
    &:hover {
      #{$component}__img img {
        opacity: 0.8;
      }
      #{$component}__title {
        color: var(--wg-color-secondary);
      }
      #{$component}__subtitle {
        color: $wg-color-sys-d;
      }
    }
  }
}

@include wg-brakepoint ($component, $wg-brakepoint-small) {
  #{$component} {
    width: 50%;
    padding-right: var(--wg-gutter);
  }
}
@include wg-brakepoint ($component, $wg-brakepoint-minimal) {
  #{$component} {
    width: auto;
  }
}
</style>
