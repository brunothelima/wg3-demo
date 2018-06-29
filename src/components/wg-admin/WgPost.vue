<template>
  <div class="wg-post">
    <wg-container class="wg-grid">
      <main class="wg-post__content">
        <div class="wg-post__loading placeholder" v-if="WgPostStatus === 'loading'">
            <img src="@/assets/img/wg-post-mockup.svg">
        </div>
        <article v-else>
          <div class="wg-post__title">
            <wg-heading level="h1">{{post.title}}</wg-heading>            
            <wg-heading level="h4">{{post.subtitle}}</wg-heading>        
            <time class="wg-post__last-update">
              <i class="fa fa-clock"></i>
              <span>{{post.lastUpdate}}</span>
            </time>
            <wg-social-share />
          </div>
          <wg-text v-html="post.text"/>
          <wg-social-share />
        </article>
      </main>
      <aside class="wg-post__sidebar">
        <wg-post-related :posts="relatedPosts" />
        <div class="wg-banner">
          <img src="@/assets/img/wg-ad-example.png">
        </div>
        <wg-newsletter />
      </aside>
    </wg-container>
    <wg-container>
      <wg-read-more :posts="readMorePosts" />
    </wg-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { WG_POST_REQUEST } from '@/store/actions/wg-post/WgPost'
import { WG_POST_RELATED_REQUEST } from '@/store/actions/wg-post/WgPostRelated'
import { WG_READ_MORE_REQUEST } from '@/store/actions/wg-post/WgReadMore'

import WgContainer from '@/components/wg-ui/wg-layout/WgContainer'
import WgHeading from '@/components/wg-ui/wg-text/WgHeading'
import WgText from '@/components/wg-ui/wg-text/WgText'
import WgSocialShare from '@/components/wg-ui/wg-social/WgSocialShare'
import WgPostRelated from '@/components/wg-widgets/WgPostRelated'
import WgReadMore from '@/components/wg-widgets/WgReadMore'
import WgNewsletter from '@/components/wg-widgets/WgNewsletter'

export default {
  name: 'WgPost',
  components: {
    'wg-container': WgContainer,
    'wg-heading': WgHeading,
    'wg-text': WgText,
    'wg-social-share': WgSocialShare,
    'wg-post-related': WgPostRelated,
    'wg-read-more': WgReadMore,
    'wg-newsletter': WgNewsletter,
  },
  data () {
    return {
      post: {},
      relatedPosts: [],
      readMorePosts: []
    }
  },
  computed: {
     ...mapGetters([
      'WgPostStatus', 
      'WgPostRelatedStatus',
      'WgReadMoreStatus',
    ]),
  },
  async created () {
    this.post = await this.$store.dispatch(WG_POST_REQUEST, {id: 1})
    this.relatedPosts = await this.$store.dispatch(WG_POST_RELATED_REQUEST, {id: 1})
    this.readMorePosts = await this.$store.dispatch(WG_READ_MORE_REQUEST, {id: 1})
  },
}
</script>

<style lang="scss" scoped>
.wg-grid {
  display: grid;
  grid-template-columns: auto 320px;
  grid-template-rows: auto;
  grid-gap: var(--wg-gutter-xl);
  box-sizing: border-box;
  grid-template-areas:
    "content sidebar";
  @media screen and (max-width: #{$wg-brakepoint-medium}) {
    display: block;
  }
}
.wg-post {
  &__loading {
    img, svg {
      display: block;
      width: 100%;
      color: $wg-color-sys-e;
    }
  }
  &__title {
    h1 {
      margin-bottom: var(--wg-gutter-l);
      color: $wg-color-sys-b;
    }
    h4 {
      margin-bottom: var(--wg-gutter-xxl);
      color: $wg-color-sys-e;
    }
  }
  &__last-update {
    display: flex;
    align-items: center;
    margin-bottom: var(--wg-gutter-xl);
    span {
      color: $wg-color-sys-e;
      font-size: var(--wg-font-size-s);
    }
    i {
      margin-right: var(--wg-gutter);
      color: $wg-color-sys-e;
      font-size: var(--wg-font-size-xl);
    }
  }
  &__content {
    margin-bottom: var(--wg-gutter-xxl);
    grid-area: content;
  }
  &__sidebar {
    margin-bottom: var(--wg-gutter-xxl);
    grid-area: sidebar;
  }
}
.wg-banner {
  padding: var(--wg-gutter-xl) 0;
  margin-bottom: var(--wg-gutter-xxl);
  background-color: $wg-color-sys-h;
  border-radius: var(--wg-border-radius);
  img {
    display: block;
    margin: 0 auto;
    border-radius: var(--wg-border-radius);
  }
}
</style>
