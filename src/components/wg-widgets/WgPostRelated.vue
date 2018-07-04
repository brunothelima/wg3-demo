<template>
  <div class="wg-post-related" v-if="posts">
    <wg-heading level="h4">Stories you may like</wg-heading>
    <div class="wg-post-related__loading placeholder" v-if="!posts.length">
      <img src="@/assets/img/wg-post-related-mockup.svg" />
    </div>
    <ul v-else>
      <li v-for="(post, index) in posts" class="post" :key="index">
        <a :href="post.href">
          <span v-if="post.img" class="post__img">
            <img :src="post.img">
          </span>
          <span class="post__info">
            <span class="post__title">{{post.title}}</span>
            <span v-if="!post.img" class="post__subtitle">{{post.subtitle}}</span>
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import WgHeading from '@/components/wg-ui/wg-text/WgHeading'
export default {
  name: 'WgPostRelated',
  components: {
    'wg-heading': WgHeading
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
$component: '.wg-post-related';
#{$component} {
  margin-bottom: var(--wg-gutter-xl);
  h4 {
    margin-bottom: var(--wg-gutter-xl);
  }
  ul {
    @media screen and (max-width: #{$wg-brakepoint-medium}) and (min-width: #{$wg-brakepoint-minimal}) {
      display: flex;
      flex-wrap: wrap;
    }
  }
  .placeholder {
    svg, img {
      width: 100%;
    }
  }
  .post {
    box-sizing: border-box;
    margin-bottom: var(--wg-gutter-xl);
    &__img {
      height: 80px;
      width: 80px;
      border-radius: var(--wg-border-radius);
      background-color: var(--wg-color-primary);
      img {
        display: block;
        border-radius: inherit;
        transition: opacity var(--wg-transition-duration-faster) var(--wg-transition-timing-function);
      }
      ~ .post__info {
        box-sizing: border-box;
        padding-left: var(--wg-gutter-l);
      }
    }
    &__title {
      display: block;
      font-size: var(--wg-font-size-l);
      color: $wg-color-sys-c;
      font-weight: $wg-font-weight-bold;
      line-height: $wg-line-height-xl;
      transition: color var(--wg-transition-duration-faster) var(--wg-transition-timing-function);
      ~ .post__subtitle {
        padding-top: var(--wg-gutter);
      }
    }
    &__subtitle {
      display: block;
      line-height: $wg-line-height-xl;
      color: $wg-color-sys-e;
      font-weight: $wg-font-weight-light;
      transition: color var(--wg-transition-duration-faster) var(--wg-transition-timing-function);
    }
    a {
      display: flex;
      text-decoration: none;
      &:visited {
        .post__title {
          color: $wg-color-sys-d;
        }
      } 
      &:hover {
        .post__img img {
          opacity: 0.8;
        }
        .post__title {
          color: var(--wg-color-secondary);
        }
        .post__subtitle {
          color: $wg-color-sys-d;
        }
      }
    }
  }
}
@include wg-brakepoint ($component, $wg-brakepoint-small) {
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  .post {
    width: 50%;
    padding-right: var(--wg-gutter);
  }
}
@include wg-brakepoint ($component, $wg-brakepoint-minimal) {
  ul {
    display: block;
  }
  .post {
    width: auto;
  }
}
</style>
