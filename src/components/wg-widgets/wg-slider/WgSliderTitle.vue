<template>
  <div class="wg-slider-title">
    <swiper ref="swiper" :options="options">
      <swiper-slide v-for="(item, index) in items" :key="index" class="wg-slider-title__item">
        <wg-content-title v-bind="item" />
      </swiper-slide>
    </swiper>
    <div class="wg-slider-title__bottom">
      <button class="prev"><i class="fa fa-arrow-left"></i></button>
      <div class="pagination"></div>
      <button class="next"><i class="fa fa-arrow-right"></i></button>
    </div> 
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import WgContentTitle from '../wg-content/WgContentTitle'

export default {
  name: 'WgSliderTitle',
  components: {
    swiper,
    swiperSlide,
    'wg-content-title': WgContentTitle,
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      options: {
        slidesPerView: 'auto',
        threshold: 24,
        autoHeight: true,
        navigation: {
          prevEl: `[${this.$options._scopeId}] .prev`,
          nextEl: `[${this.$options._scopeId}] .next`,
        },
        pagination: {
          clickable: true,
          el: `[${this.$options._scopeId}] .pagination`,
        }
      }
    }
  },
}
</script>

<style lang="scss" scoped>
$component: '.wg-slider-title';
#{$component} {
  width: 100%;
  overflow: hidden;
  position: relative;
  padding-bottom: 60px;
  margin-bottom: var(--wg-gutter-xl);
  .wg-content-title {
    margin-bottom: 0;
  }
  .wg-slider-title__item {
    width: 100%;
  }
  @include swiper-pagination(#{$component + '__bottom'});
  .wg-slider-title__bottom {
    justify-content: left;
    .pagination /deep/ .swiper-pagination-bullet {
      background-color: var(--wg-color-primary);
      opacity: 1;
    }
  }
}
</style>