<template>
  <div class="wg-content-title">
    <a :href="href">
      <wg-heading level="h1">{{title}}</wg-heading>
    </a>
  </div>
</template>

<script>
import WgHeading from '@/components/wg-uikit/wg-text/WgHeading'

export default {
  name: 'WgContentTitle',
  components: {
    'wg-heading': WgHeading,
  },
  props: {
    href: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
  },
}
</script>

<style lang="scss" scoped>
$component: '.wg-content-title';
#{$component} {
  margin-bottom: var(--wg-gutter-xl);
  a {
    display: inline-block;
    text-decoration: none;
    .wg-heading {
      color: $wg-color-sys-b;
      transition: color var(--wg-transition-duration) var(--wg-transition-timing-function);
    }
    &:hover .wg-heading {
      color: var(--wg-color-secondary);
    }
  }
}
</style>
