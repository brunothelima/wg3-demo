<template>
  <div class="wg-home">
    <wg-hero v-if="home.hero" v-bind="home.hero" />
    <wg-container>
      <div class="wg-home__featured featured grid" v-if="home.featured">
        <div class="featured__main">
          <wg-content-cover v-bind="home.featured.big"/>
        </div>
        <ul class="featured__aside">
          <wg-content-cover v-for="(item, index) in home.featured.aside" :key="index" 
            tag="li"
            model="small"
            v-bind="item" />
        </ul>
      </div>
      <div class="wg-home__cards" v-if="cards">
        <ul class="wg-row">
          <wg-content-card class="wg-cols-4" tag="li" v-for="(item, index) in cards" :key="index" v-bind="item" />
        </ul>
      </div>
    </wg-container>
    <div class="img-tile"></div>
    <wg-container>
      <div class="wg-home__secondary secondary grid">
        <div class="secondary__main">
          <wg-content-title v-bind="cards[2]" />
          <ul class="wg-row wg-home__complementary">
            <wg-content-mini class="wg-cols-6" v-bind="cards[1]" />
            <wg-content-mini class="wg-cols-6" v-bind="cards[0]" />
          </ul>
          <div class="wg-row wg-home__social">
            <wg-facebook-page class="wg-cols-6" />
            <wg-facebook-page class="wg-cols-6" />
          </div>
        </div>
        <div class="secondary__aside">
          <wg-banner />
        </div>
      </div>      
    </wg-container>
  </div>
</template>

<script>
import WgContainer from '@/components/wg-uikit/wg-layout/WgContainer'
import WgHeading from '@/components/wg-uikit/wg-text/WgHeading'
import WgHero from '@/components/wg-widgets/WgHero'
import WgContentCover from '@/components/wg-widgets/wg-content/WgContentCover'
import WgContentCard from '@/components/wg-widgets/wg-content/WgContentCard'
import WgContentMini from '@/components/wg-widgets/wg-content/WgContentMini'
import WgContentTitle from '@/components/wg-widgets/wg-content/WgContentTitle'
import WgFacebookPage from '@/components/wg-widgets/WgFacebookPage'
import WgBanner from '@/components/wg-widgets/WgBanner'

export default {
  name: 'WgHome',
  components: {
    'wg-container': WgContainer,
    'wg-heading': WgHeading,
    'wg-hero': WgHero,
    'wg-content-cover': WgContentCover,
    'wg-content-card': WgContentCard,
    'wg-content-mini': WgContentMini,
    'wg-content-title': WgContentTitle,
    'wg-facebook-page': WgFacebookPage,
    'wg-banner': WgBanner,
  },
  data () {
    return {
      home: {},
      cards: [],
    }
  },
  async created () {
    let id = 1
    this.home = await this.$store.dispatch('content/home/fetchData')
    this.cards = await this.$store.dispatch('content/related/fetchByContentId', id)
  },
}
</script>

<style lang="scss" scoped>
$component: '.wg-home';
#{$component} {
  .wg-hero {
    margin-bottom: calc(var(--wg-gutter-xl) * 2);
  }
  .featured,
  .secondary {
    display: grid;
    grid-template-rows: auto;
    grid-gap: var(--wg-gutter-l);
    box-sizing: border-box;
    grid-template-areas:
    "content sidebar";
    &__main { 
      grid-area: content;
    }
    &__aside {
      grid-area: sidebar;
    }
  }
  .featured {
    grid-template-columns: auto calc(25% - var(--wg-gutter-l));
  }
  .secondary {
    grid-template-columns: auto minmax(320px, 30%);
    &__main {
      .wg-content-title {
        margin-bottom: calc(var(--wg-gutter-xl) * 2);
      }
    }
  }
  &__cards {
    margin-bottom: var(--wg-gutter-xxl);
  }
  &__complementary {
    margin-bottom: var(--wg-gutter-xl);
  }
  .img-tile {
    margin-bottom: calc(var(--wg-gutter-xl) * 2);
    padding-bottom: 40%;
    background-image: url('http://picsum.photos/1200/480?image=26');
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
  }
}
@include wg-brakepoint ($component, $wg-brakepoint-small) {
  .secondary {
    display: block;
  }
}
@include wg-brakepoint ($component, $wg-brakepoint-minimal) {
  .featured {
    display: block;
  }
}
</style>
