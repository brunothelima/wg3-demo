<template>
  <div class="wg-theme-editor-tutorial">
    <swiper :options="options">
      <swiper-slide v-for="(card, index) in cards" :key="index" class="tutorial">
        <div class="tutorial__head">{{card.head}}</div>
        <div class="tutorial__illustration">
          <img :src="card.img" alt="Wg Themefier intro illustration">
        </div>      
        <div class="tutorial__info">
          <div class="center">
            <wg-heading level="h3">{{card.title}}</wg-heading>
            <p>{{card.subtitle}}</p>
            <wg-btn v-if="(index + 1) === cards.length" @click="$emit('confirm')">Ok, thanks</wg-btn>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>  
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

const cards = [
  {
    head: 'Getting started with Widgrid',
    img: require('@/assets/img/wg-theme-editor/tutorial-intro.png'),
    title: 'Hi, Johnny Doe!',
    subtitle: 'Here you will be able to set up the basics of your Widgrid website, such as color scheme, font styles and much more.'
  },
  {
    head: 'Meeting fonts',
    img: require('@/assets/img/wg-theme-editor/tutorial-fonts.png'),
    title: 'Choose your typo!',
    subtitle: 'Here you will be able to set up the basics of your Widgrid website, such as color scheme, font styles and much more.'
  },
  {
    head: 'Meeting colors',
    img: require('@/assets/img/wg-theme-editor/tutorial-colors.png'),
    title: 'Choose your colors',
    subtitle: 'Here you will be able to set up the basics of your Widgrid website, such as color scheme, font styles and much more.'
  },
  {
    head: 'Meeting layout',
    img: require('@/assets/img/wg-theme-editor/tutorial-layout.png'),
    title: 'Choose your settings',
    subtitle: 'Here you will be able to set up the basics of your Widgrid website, such as color scheme, font styles and much more.'
  },
  {
    head: 'Meeting animations',
    img: require('@/assets/img/wg-theme-editor/tutorial-animation.png'),
    title: 'Animations & Transitions',
    subtitle: 'Here you will be able to set up the basics of your Widgrid website'
  },
]

import WgHeading from '@/components/wg-ui/wg-text/WgHeading'
import WgBtn from '@/components/wg-ui/WgBtn'

export default {
  name: 'WgThemeEditorTutorial',
  components: {
    swiper,
    swiperSlide,
    'wg-heading': WgHeading,
    'wg-btn': WgBtn,
  },
  data () {
    return {
      cards: cards,
      options: {
        threshold: 30,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$component: '.wg-theme-editor-tutorial';
#{$component} {
  .tutorial {
    height: 100%;
    $intro-head-height: 72px;
    &__head {
      display: flex;
      align-items: center;
      justify-content: center;
      height: $intro-head-height;
      color: $wg-color-sys-c;
      font-size: var(--wg-font-size-l);
      font-weight: $wg-font-weight-light;
    }
    $intro-illustration-height: 255px; 
    &__illustration {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      margin-bottom: var(--wg-gutter-xl);
      height: $intro-illustration-height;
      background-image: linear-gradient(-135deg, #0CEF8C 0%, #33B6B2 100%);
      &:after {
        position: absolute;
        display: block;
        content: '';
        width: 100%;
        height: 100%;
      } 
      img {
        display: block;
        margin: 0;
        max-width: 100%;
        transform: scale(0.9);
        transition: all var(--wg-transition-duration-faster) var(--wg-transition-timing-function);
      }
    }
    &__info {
      height: calc(100% - #{$intro-head-height + $intro-illustration-height});
      padding: 0 $intro-head-height;
      text-align: center;
      h3 {
        color: $wg-color-sys-c;
      }
      p {
        padding-bottom: var(--wg-gutter);
        line-height: $wg-line-height-xl;
        color: $wg-color-sys-c;
        font-size: var(--wg-font-size-l);
        font-weight: $wg-font-weight-light;
      }
    }
    &.swiper-slide-active {
      .tutorial__illustration img {
        transform: scale(1);
      }
    }
  }
  .swiper-container {
    position: static;
    .swiper-pagination {
      bottom: var(--wg-gutter-xl);
    }
  }
}
</style>
