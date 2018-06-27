<template>
  <div class="wg-theme-editor-intro intro">
    <div class="intro__head">Getting started with Widgrid</div>
    <div class="intro__illustration">
      <img src="@/assets/img/wg-themefier-intro.png" alt="Wg Themefier intro illustration">
    </div>      
    <div class="intro__info">
      <div class="center">
        <wg-heading level="h3">Hi, Johnny Doe!</wg-heading>
        <p>Here you will be able to set up the basics of your Widgrid website, such as color scheme, font styles and much more.</p>
        <wg-btn @click="$emit('confirm')">Ok, thanks</wg-btn>
      </div>
    </div>
  </div>
</template>

<script>
import WgHeading from '@/components/wg-ui/wg-text/WgHeading'
import WgBtn from '@/components/wg-ui/WgBtn'

export default {
  name: 'WgThemeEditorIntro',
  components: {
    'wg-heading': WgHeading,
    'wg-btn': WgBtn,
  }
}
</script>

<style lang="scss" scoped>
.intro {
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
    position: relative;
    margin-bottom: var(--wg-gutter-xl);
    height: $intro-illustration-height;
    &:after {
      position: absolute;
      display: block;
      z-index: 1;
      content: '';
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    } 
    img {
      display: block;
      margin: 0;
      max-width: 100%;
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
      padding-bottom: var(--wg-gutter-xl);
      line-height: $wg-line-height-xl;
      color: $wg-color-sys-c;
      font-size: var(--wg-font-size-l);
      font-weight: $wg-font-weight-light;
    }
  }
}
</style>
