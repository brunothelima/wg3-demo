<template>
  <div class="wg-content-related">
    <wg-heading level="h4">Stories you may like</wg-heading>
    <wg-mockup v-if="!items.length"
      widget="post-related" />
    <ul v-else>
      <wg-content-mini tag="li" v-for="(item, index) in items" :key="index" 
        v-bind="item" />
    </ul>
  </div>
</template>

<script>
import WgMockup from '@/components/wg-uikit/wg-layout/WgMockup'
import WgHeading from '@/components/wg-uikit/wg-text/WgHeading'
import WgContentMini from './WgContentMini'
export default {
  name: 'WgContentRelated',
  components: {
    'wg-heading': WgHeading,
    'wg-mockup': WgMockup,
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
    .wg-content-mini {
      margin-bottom: var(--wg-gutter-xl);
    }
  }
}
@include wg-brakepoint ($component, $wg-brakepoint-small) {
  ul {
    display: flex;
    flex-wrap: wrap;
    .wg-content-mini {
      width: 50%;
    }
  }
}
@include wg-brakepoint ($component, $wg-brakepoint-minimal) {
  ul {
    display: block;
    .wg-content-mini {
      width: 100%;
    }
  }
}
</style>
