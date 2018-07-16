<template>
  <div class="wg-theme-editor-tutorial">
    <swiper ref="swiper" :options="options">
      <swiper-slide v-for="(card, index) in cards" :key="index" class="tutorial">
        <div class="tutorial__head">{{card.head}}</div>
        <div class="tutorial__illustration">
          <img :src="card.img" alt="Wg Themefier intro illustration">
        </div>      
        <div class="tutorial__info">
          <div class="center">
            <wg-heading level="h3">{{card.title}}</wg-heading>
            <p>{{card.subtitle}}</p>
            <wg-btn v-if="(index + 1) === cards.length" 
              @click="$emit('tutorialConfirm')">
                Ok, thanks
            </wg-btn>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="bottom">
      <button class="bottom__prev"><i class="fa fa-arrow-left"></i></button>
      <div class="bottom__pagination"></div>
      <button class="bottom__next"><i class="fa fa-arrow-right"></i></button>
    </div> 
  </div>  
</template>

<script>
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

const cards = [
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

import WgHeading from '@/components/wg-uikit/wg-text/WgHeading'
import WgBtn from '@/components/wg-uikit/WgBtn'

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
        threshold: 24,
        navigation: {
          prevEl: '.wg-theme-editor-tutorial .bottom__prev',
          nextEl: '.wg-theme-editor-tutorial .bottom__next',
        },
        pagination: {
          clickable: true,
          el: '.wg-theme-editor-tutorial .bottom__pagination',
        }
      }
    }
  },
}
</script>

<style lang="scss" scoped>
$component: '.wg-theme-editor-tutorial';
#{$component} {
  $intro-head-height: 72px;
  $intro-illustration-height: 255px; 
  .tutorial {
    &__head {
      display: flex;
      align-items: center;
      justify-content: center;
      height: $intro-head-height;
      color: $wg-color-sys-c;
      font-size: var(--wg-font-size-l);
      font-weight: $wg-font-weight-light;
    }
    &__illustration {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      margin-bottom: var(--wg-gutter-xl);
      height: $intro-illustration-height;
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
        transform: scale(0.8);
        opacity: 0;
        transition: all var(--wg-transition-duration)  var(--wg-transition-timing-function);
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
        opacity: 1;
      }
    }
  }
  &:before {
    position: absolute;
    display: block;
    content: '';
    z-index: 0;
    left: 0;
    right: 0;
    top: $intro-head-height;
    height: $intro-illustration-height;
    background-image: linear-gradient(-135deg, #33B6B2 0%, #0CEF8C 100%);
  }
  /deep/ .swiper-container, 
  /deep/ .swiper-wrapper {
    height: 100%;
    position: static;
  }
  @include swiper-pagination('.bottom');
}
</style>
