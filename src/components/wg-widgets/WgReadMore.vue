<template>
  <div class="wg-read-more">
    <wg-heading level="h4">More stories you may like</wg-heading>
    <wg-mockup v-if="!items.length" 
      widget="content-card"
      :counter="3" />
    <div class="wg-read-more__cards wg-row" v-else>
      <wg-content-card  v-for="(item, index) in items" :key="index" 
        tag="div"
        class="wg-cols-4"
        v-bind="item" /> 
    </div>
  </div>
</template>

<script>
import WgHeading from '@/components/wg-uikit/wg-text/WgHeading'
import WgMockup from '@/components/wg-uikit/wg-layout/WgMockup'
import WgContentCard from '@/components/wg-widgets/wg-content/WgContentCard'

export default {
  name: 'WgReadMore',
  components: {
    'wg-heading': WgHeading,
    'wg-mockup': WgMockup,
    'wg-content-card': WgContentCard,
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
$component: '.wg-read-more';
#{$component} {
  margin-bottom: var(--wg-gutter-xl);
  &:last-child {
    margin-bottom: 0;
  }
  h4 {
    margin-bottom: var(--wg-gutter-l);
    text-align: center;
  }
  &__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center; 
  }
}
@include wg-brakepoint ($component, $wg-brakepoint-small) {
  #{$component}__cards,
  #{$component}__loading {
    .wg-content-card {
       width: 50%;
    }
  }
}
@include wg-brakepoint ($component, $wg-brakepoint-minimal) {
  #{$component}__cards,
  #{$component}__loading {
    .wg-content-card {
       width: 100%;
    }
  }
}
</style>
