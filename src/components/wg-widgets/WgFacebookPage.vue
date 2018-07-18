<template>
  <div class="wg-facebook-page">
    <div class="wg-facebook-page__head">
      Facebook
    </div>
    <div class="wg-facebook-page__iframe">
      <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=firends&width=340&height=181&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WgFacebookPage',
}
</script>

<style lang="scss" scoped>
$component: '.wg-facebook-page';
#{$component} {
  margin-bottom: var(--wg-gutter-xl);
  height: 248px;
  &__head,
  &__iframe {
    display: flex;
    justify-content: center;
    align-items: center;
    iframe {
      width: 100%;
      height: 100%;
    }
  }
  &__head {
    width: 100%;
    height: $wg-input-height;
    background-color: var(--wg-color-primary);
    border-top-left-radius: var(--wg-border-radius);
    border-top-right-radius: var(--wg-border-radius);
    text-align: center;
    font-weight: $wg-font-weight-bold;
    color: white;
  }
  &__iframe {
    overflow: hidden;
    box-sizing: border-box;
    height: calc(100% - #{$wg-input-height});
    padding: var(--wg-gutter);
    background-color: $wg-color-sys-h;
    border-bottom-left-radius: var(--wg-border-radius);
    border-bottom-right-radius: var(--wg-border-radius);
    iframe {
      width: 100%;
      max-width: 342px;
    }
  }
}
</style>
