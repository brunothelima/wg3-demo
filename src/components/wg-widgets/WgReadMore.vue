<template>
  <div class="wg-read-more">
    <wg-heading level="h4">More stories you may like</wg-heading>
    <div class="wg-read-more__loading placeholder" v-if="!items.length">
      <span><img src="@/assets/img/wg-card-mockup.svg" /></span>
      <span><img src="@/assets/img/wg-card-mockup.svg" /></span>
      <span><img src="@/assets/img/wg-card-mockup.svg" /></span>
    </div>
    <div class="wg-read-more__cards" v-else>
      <wg-content-card tag="div" v-for="(item, index) in items" :key="index" v-bind="item" /> 
    </div>
  </div>
</template>

<script>
import WgHeading from '@/components/wg-uikit/wg-text/WgHeading'
import WgContentCard from '@/components/wg-widgets/wg-content/WgContentCard'

export default {
  name: 'WgReadMore',
  components: {
    'wg-heading': WgHeading,
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
.wg-read-more {
  margin-bottom: var(--wg-gutter-xl);
  &:last-child {
    margin-bottom: 0;
  }
  h4 {
    margin-bottom: var(--wg-gutter-l);
    text-align: center;
  }
  &__cards,
  &__loading {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    margin: 0 calc(var(--wg-gutter-l) * -1);
    .wg-content-card, span {
      width: 33.33%;
    }
  }
  &__loading span {
    display: block;
    padding: var(--wg-gutter);
    box-sizing: border-box;
    img, svg {
      width: 100%;
    }
  }
}
@include wg-brakepoint ($component, $wg-brakepoint-small) {
  #{$component}__cards,
  #{$component}__loading {
    .wg-content-card, span {
       width: 50%;
    }
  }
}
@include wg-brakepoint ($component, $wg-brakepoint-minimal) {
  #{$component}__cards,
  #{$component}__loading {
    .wg-content-card, span {
       width: 100%;
    }
  }
}
</style>
