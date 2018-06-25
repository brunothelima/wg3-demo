<template>
  <div class="wg-read-more">
    <wg-heading level="h4">More stories you may like</wg-heading>
    <div class="wg-read-more__loading placeholder" v-if="!posts.length">
      <span><img src="@/assets/img/wg-card-mockup.svg" /></span>
      <span><img src="@/assets/img/wg-card-mockup.svg" /></span>
      <span><img src="@/assets/img/wg-card-mockup.svg" /></span>
    </div>
    <div class="wg-read-more__cards" v-else>
      <wg-card v-for="(post, index) in posts" :key="index" :post="post" /> 
    </div>
  </div>
</template>

<script>
import WgHeading from '@/components/wg-ui/WgHeading'
import WgCard from '@/components/wg-widgets/WgCard'

export default {
  name: 'WgReadMore',
  components: {
    'wg-heading': WgHeading,
    'wg-card': WgCard,
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.wg-read-more {
  margin-bottom: var(--wg-gutter-xl);
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
    .wg-card, span {
      width: 33.33%;
      @media screen and (max-width: #{$wg-brakepoint-medium}) {
        width: 50%;
      }
      @media screen and (max-width: #{$wg-brakepoint-minimal}) {
        width: 100%;
      }
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
</style>
