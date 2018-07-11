<template>
  <div class="wg-post">
    <wg-container class="wg-post__grid">
      <main class="wg-post__content">
        <div class="wg-post__loading placeholder" v-if="!post">
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
      post: null,
      relatedPosts: [],
      readMorePosts: []
    }
  },
  async created () {
    let id = 1
    this.post = await this.$store.dispatch('content/fetchById', id)
    await this.$store.dispatch('content/related/fetchByContentId', id)
      .then(items => {
        console.log(items)
        this.relatedPosts = items
        this.readMorePosts = items
      })
  },
}
</script>

<style lang="scss" scoped>
$component: '.wg-post';
#{$component} {
  &__grid {
    display: grid;
    grid-template-columns: auto 320px;
    grid-template-rows: auto;
    grid-gap: var(--wg-gutter-xl);
    box-sizing: border-box;
    grid-template-areas:
      "content sidebar";
  }
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
@include wg-brakepoint ($component, $wg-brakepoint-small) {
  #{$component}__grid {
    display: block;
  }
}
</style>
