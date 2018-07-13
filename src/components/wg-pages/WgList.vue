<template>
  <div class="wg-list">
    <wg-container>
      <div class="wg-list__headlines headlines">
        <wg-heading level="h2">Headlines</wg-heading>
        <div class="headlines__content">
          <div class="headlines__featured">
            <wg-mockup v-if="!headlines.featured.length" 
              widget="content-mega"
              :counter="3"/>
            <ul v-else>
              <wg-content-mega tag="li" v-for="(item, index) in headlines.featured" :key="index" v-bind="item" />
            </ul>
          </div>
          <div class="headlines__aside">
            <wg-mockup v-if="!headlines.aside.length"
              widget="content-mini"
              :counter="5"/>
            <ul v-else>
              <wg-content-mini tag="li" v-for="(item, index) in headlines.aside" :key="index" v-bind="item" />
            </ul>
          </div>
        </div>
      </div>
      <div class="wg-list__spotlight spotlight">
        <wg-heading level="h2">Spotlight</wg-heading>
        <div class="spotlight__content">
          <div class="spotlight__featured">
            <wg-mockup v-if="!spotlight.featured.length"  
              widget="content-card" 
              :cols="4"
              :counter="3" />              
            <ul v-else>
              <wg-content-card v-for="(item, index) in spotlight.featured" :key="index" 
                class="cols-4"
                tag="li" 
                v-bind="item" />
            </ul>
          </div>
          <div class="spotlight__list">
            <wg-mockup v-if="!spotlight.list.length"
              widget="content-mini"
              :cols="6"
              :counter="10"/>
            <ul v-else>
              <wg-content-mini tag="li" class="cols-6" v-for="(item, index) in spotlight.list" :key="index" v-bind="item" />
            </ul>
            <div class="wg-banner">
              <img src="@/assets/img/wg-ad-example.png">
            </div>
          </div>
        </div>
      </div>
    </wg-container>
  </div>
</template>

<script>
import WgContainer from '@/components/wg-uikit/wg-layout/WgContainer'
import WgHeading from '@/components/wg-uikit/wg-text/WgHeading'
import WgContentMini from '@/components/wg-widgets/wg-content/WgContentMini'
import WgContentMega from '@/components/wg-widgets/wg-content/WgContentMega'
import WgContentCard from '@/components/wg-widgets/wg-content/WgContentCard'
import WgMockup from '@/components/wg-uikit/wg-layout/WgMockup'

export default {
  name: 'WgList',
  components: {
    'wg-container': WgContainer,
    'wg-heading': WgHeading,
    'wg-mockup': WgMockup,
    'wg-content-mini': WgContentMini,
    'wg-content-mega': WgContentMega,
    'wg-content-card': WgContentCard,
  },
  data () {
    return {
      headlines: {
        featured: [],
        aside: []
      },
      spotlight: {
        featured: [],
        list: []
      },
    }
  },
async created () {
    let id = 1
    this.headlines.featured = await this.$store.dispatch('content/related/fetchByContentId', id)
    this.headlines.aside = await this.$store.dispatch('content/related/fetchByContentId', id)
    this.spotlight.featured = await this.$store.dispatch('content/related/fetchByContentId', id)
    this.spotlight.list = await this.$store.dispatch('content/list/paginate', 1)
  },
}
</script>

<style lang="scss" scoped>
$component: '.wg-list';
#{$component} {
  .headlines,
  .spotlight {
    .headlines__content,
    .spotlight__list {
      display: grid;
      grid-template-columns: auto 320px;
      grid-template-rows: auto;
      grid-gap: var(--wg-gutter-xl);
      box-sizing: border-box;
      grid-template-areas:
      "content sidebar";
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      margin: 0 calc(var(--wg-gutter) * -1) var(--wg-gutter-xl);
    }
  }
  .headlines {
    &__featured {
      grid-area: content;
    }
    &__aside {
      grid-area: sidebar;
    }
  }
  .spotlight {
    &__list {
      ul {
        grid-area: content;
      }
      .wg-banner {
        grid-area: sidebar;
        padding: var(--wg-gutter-xl) 0;
        background-color: $wg-color-sys-h;
        border-radius: var(--wg-border-radius);
        img {
          display: block;
          margin: 0 auto;
          border-radius: var(--wg-border-radius);
        }
      }
    }
  }
}
@include wg-brakepoint ($component, $wg-brakepoint-small) {
  .headlines .headlines__content,
  .spotlight .spotlight__list {
    display: block;
  }
}
</style>
