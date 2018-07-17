<template>
  <div class="wg-list">
    <wg-container>
      <div class="wg-list__headlines headlines">
        <wg-heading level="h2">Headlines</wg-heading>
        <div class="headlines__grid">
          <div class="headlines__featured">
            <wg-mockup widget="content-mega" :counter="3" v-if="!headlines.featured"/>
            <ul v-else>
              <wg-content-mega tag="li" v-for="(item, index) in headlines.featured" :key="index" v-bind="item" />
            </ul>
          </div>
          <div class="headlines__aside">
            <wg-mockup widget="content-mini" :counter="4" v-if="!headlines.aside"/>
            <div v-else>
              <ul>
                <wg-content-mini tag="li" v-for="(item, index) in headlines.aside" :key="index" v-bind="item" />
              </ul>
              <wg-newsletter />
            </div>
          </div>
        </div>
      </div>
      <div class="wg-list__spotlight spotlight">
        <wg-heading level="h2">Spotlight</wg-heading>
        <div class="spotlight__featured">
          <wg-mockup widget="content-card" :cols="4" :counter="3" v-if="!spotlight.featured" />              
          <ul class="wg-row" v-else>
            <wg-content-card class="wg-cols-4" tag="li" v-for="(item, index) in spotlight.featured" :key="index" v-bind="item" />
          </ul>
        </div>
        <div class="spotlight__grid">
          <wg-mockup widget="content-mini" :cols="6" :counter="10" v-if="!spotlight.list"/>
          <div v-else>
            <ul class="wg-row">
              <wg-content-mini tag="li" class="wg-cols-6" v-for="(item, index) in spotlight.list" :key="index" v-bind="item" />
            </ul>
            <div class="spotlight__load">                
              <wg-btn model="outline">Load more</wg-btn>
            </div>
          </div>
          <wg-banner />
        </div>
      </div>
    </wg-container>
  </div>
</template>

<script>
import WgContainer from '@/components/wg-uikit/wg-layout/WgContainer'
import WgHeading from '@/components/wg-uikit/wg-text/WgHeading'
import WgMockup from '@/components/wg-uikit/wg-layout/WgMockup'
import WgBtn from '@/components/wg-uikit/WgBtn'
import WgContentMini from '@/components/wg-widgets/wg-content/WgContentMini'
import WgContentMega from '@/components/wg-widgets/wg-content/WgContentMega'
import WgContentCard from '@/components/wg-widgets/wg-content/WgContentCard'
import WgNewsletter from '@/components/wg-widgets/WgNewsletter'
import WgBanner from '@/components/wg-widgets/WgBanner'

export default {
  name: 'WgList',
  components: {
    'wg-container': WgContainer,
    'wg-heading': WgHeading,
    'wg-mockup': WgMockup,
    'wg-btn': WgBtn,
    'wg-content-mini': WgContentMini,
    'wg-content-mega': WgContentMega,
    'wg-content-card': WgContentCard,
    'wg-newsletter': WgNewsletter,
    'wg-banner': WgBanner,
  },
  data () {
    return {
      headlines: {
        featured: null,
        aside: null
      },
      spotlight: {
        featured: null,
        list: null
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
  padding: var(--wg-gutter-xxl) 0 0;
  h2 {
    margin-bottom: var(--wg-gutter-xxl);
  }
  .headlines,
  .spotlight {
    .headlines__grid,
    .spotlight__grid {
      display: grid;
      grid-template-columns: auto minmax(320px, 30%);
      grid-template-rows: auto;
      grid-gap: var(--wg-gutter-xl);
      box-sizing: border-box;
      grid-template-areas:
      "content sidebar";
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
    &__featured {
      margin-bottom: calc(var(--wg-gutter-xxl) * 2);
    }
    &__grid {
      ul {
        grid-area: content;
      }
      .wg-banner {
        grid-area: sidebar;
      }
    }
    &__load {
      padding-top: var(--wg-gutter-l);
      margin-bottom: var(--wg-gutter-xl);
      text-align: center;
    }
  }
}
@include wg-brakepoint ($component, $wg-brakepoint-small) {
  .headlines .headlines__grid,
  .spotlight .spotlight__grid {
    display: block;
  }
}
</style>
