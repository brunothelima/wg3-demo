<template>
  <div class="wg-list">
    <wg-container>
      <div class="wg-list__headlines headlines">
        <wg-heading level="h2">Headlines</wg-heading>
        <div class="headlines__content">
          <ul class="headlines__featured">
             <wg-content-mega tag="li" v-for="(item, index) in headlines.featured" :key="index" v-bind="item" />
          </ul>
          <ul class="headlines__aside">
             <wg-content-mini tag="li" v-for="(item, index) in headlines.aside" :key="index" v-bind="item" />
          </ul>
        </div>
      </div>
      <div class="wg-list__spotlight spotlight">
        <wg-heading level="h2">Spotlight</wg-heading>
        <div class="spotlight__content">
          <ul class="spotlight__featured">
             <wg-content-card tag="li" v-for="(item, index) in spotlight.featured" :key="index" v-bind="item" />
          </ul>
          <ul class="spotlight__list">
             <wg-content-mini tag="li" v-for="(item, index) in spotlight.list" :key="index" v-bind="item" />
          </ul>
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

export default {
  name: 'WgList',
  components: {
    'wg-container': WgContainer,
    'wg-heading': WgHeading,
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
    await this.$store.dispatch('content/related/fetchByContentId', id)
      .then(items => {
        this.headlines.featured = items
        this.headlines.aside = items.concat(items)
        this.spotlight.featured = items
        this.spotlight.list = items.concat(items.reverse(), items, items.reverse())
      })
  },
}
</script>

<style lang="scss" scoped>
$component: '.wg-list';
#{$component} {
  .headlines {
    &__content {
      display: flex;
      align-items: flex-start;
      margin: 0 calc(var(--wg-gutter) * -1);
    }
    &__featured {
      width: 70%;
      padding: var(--wg-gutter);
      .wg-content-mega {
        margin-bottom: var(--wg-gutter-xl);
      }
    }
    &__aside {
      width: 30%;
      padding: var(--wg-gutter);
      .wg-content-mini {
        margin-bottom: var(--wg-gutter-xl);
      }
    }
  }
  .spotlight {
    &__featured {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: stretch;
      margin: 0 calc(var(--wg-gutter-l) * -1);
      .wg-content-card, span {
        width: 33.33%;
      }
    }
    &__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
      align-items: top;
      margin: 0 calc(var(--wg-gutter-l) * -1);
      padding: var(--wg-gutter-l);
      .wg-content-mini {
        width: 33.33%;
        padding: 0 var(--wg-gutter);
      }
    }
  }
}
</style>
