<template>
  <div class="wg-content-related">
    <wg-heading level="h4">Stories you may like</wg-heading>
    <div class="wg-post-related__loading placeholder" v-if="!items.length">
      <img src="@/assets/img/wg-post-related-mockup.svg" />
    </div>
    <ul v-else>
      <wg-content-mini tag="li" v-for="(item, index) in items" :key="index" 
        v-bind="item" />
    </ul>
  </div>
</template>

<script>
import WgHeading from '@/components/wg-uikit/wg-text/WgHeading'
import WgContentMini from './WgContentMini'
export default {
  name: 'WgContentRelated',
  components: {
    'wg-heading': WgHeading,
    'wg-content-mini': WgContentMini
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
$component: '.wg-content-related';
#{$component} {
  margin-bottom: var(--wg-gutter-xl);
  h4 {
    margin-bottom: var(--wg-gutter-xl);
  }
  ul {
    @media screen and (max-width: #{$wg-brakepoint-medium}) and (min-width: #{$wg-brakepoint-minimal}) {
      display: flex;
      flex-wrap: wrap;
    }
    .wg-content-mini {
      margin-bottom: var(--wg-gutter-xl);
    }
  }
  .placeholder {
    svg, img {
      width: 100%;
    }
  }
}
@include wg-brakepoint ($component, $wg-brakepoint-small) {
  ul {
    display: flex;
    flex-wrap: wrap;
  }
}
@include wg-brakepoint ($component, $wg-brakepoint-minimal) {
  ul {
    display: block;
  }
}
</style>
