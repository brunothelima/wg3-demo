<template>
  <div class="wg-theme-editor-tutorial">
    <swiper ref="swiper" :options="options">
      <swiper-slide v-for="(card, index) in cards" :key="index" class="tutorial">
        <component :is="`wg-theme-editor-tutorial-${cards[index]}`" />
        <div class="wg-theme-editor-tutorial__confirm">          
          <wg-btn v-if="(index + 1) === cards.length" 
            model="primary"
            @click="confirm()">
              Ok, thanks
          </wg-btn>
        </div>
      </swiper-slide>
    </swiper>
    <div class="wg-theme-editor-tutorial__bottom">
      <button class="prev"><i class="fa fa-arrow-left"></i></button>
      <div class="pagination"></div>
      <button class="next"><i class="fa fa-arrow-right"></i></button>
    </div> 
  </div>  
</template>

<script>
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import WgBtn from '@/components/wg-uikit/WgBtn'
import WgThemeEditorTutorialFonts from './WgThemeEditorTutorialFonts'
import WgThemeEditorTutorialColors from './WgThemeEditorTutorialColors'
import WgThemeEditorTutorialLayout from './WgThemeEditorTutorialLayout'
import WgThemeEditorTutorialAnimation from './WgThemeEditorTutorialAnimation'

export default {
  name: 'WgThemeEditorTutorial',
  components: {
    swiper,
    swiperSlide,
    'wg-btn': WgBtn,
    'wg-theme-editor-tutorial-fonts': WgThemeEditorTutorialFonts,
    'wg-theme-editor-tutorial-colors': WgThemeEditorTutorialColors,
    'wg-theme-editor-tutorial-layout': WgThemeEditorTutorialLayout,
    'wg-theme-editor-tutorial-animation': WgThemeEditorTutorialAnimation,
  },
  data () {
    return {
      cards: [
        'fonts',
        'colors',
        'layout',
        'animation',
      ],
      options: {
        threshold: 24,
        navigation: {
          prevEl: '.wg-theme-editor-tutorial__bottom .prev',
          nextEl: '.wg-theme-editor-tutorial__bottom .next',
        },
        pagination: {
          clickable: true,
          el: '.wg-theme-editor-tutorial__bottom .pagination',
        }
      }
    }
  },
  methods: {
    confirm () {
      this.$emit('tutorialConfirm')
      // localStorage.setItem('wg-theme-editor-tutorial-viewed', true)
    }
  }
}
</script>

<style lang="scss" scoped>
$component: '.wg-theme-editor-tutorial';
#{$component} {
  $intro-head-height: 72px;
  $intro-illustration-height: 255px; 
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
  /deep/ .tutorial {
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
      height: calc(100% - #{$intro-head-height + $intro-illustration-height});;
      padding: 0 var(--wg-gutter-xxl);
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
  /deep/ .swiper-container, 
  /deep/ .swiper-wrapper {
    height: 100%;
    position: static;
  }
  &__confirm {
    display: flex;
    justify-content: center;
  }
  @include swiper-pagination(#{$component + '__bottom'});
}
</style>
