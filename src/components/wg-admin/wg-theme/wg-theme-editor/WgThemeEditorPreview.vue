<template>
  <div class="wg-theme-editor-preview preview">
    <div class="preview__brakepoints">
      <a v-for="(brakepoint, index) in brakepoints" :key="index" 
        :class="['brakepoint', {'brakepoint--active': brakepointActive === brakepoint.id}]" 
        @click="showBrakepoint(brakepoint.id)">
          <span class="brakepoint__icon"><img :src="brakepoint.icon" :alt="brakepoint.title" /></span>
          <span class="brakepoint__title">{{brakepoint.title}}</span>
      </a>
    </div>
    <wg-input-btn-group :options="templates" />
  </div>
</template>

<script>
import WgInputBtnGroup from '@/components/wg-ui/wg-form/wg-input/WgInputBtnGroup';

const brakepoints = [
  { id: 'large', title: 'Desktop', icon: require('@/assets/img/wg-theme-editor/desktop-icon.svg') },
  { id: 'medium', title: 'Laptop', icon: require('@/assets/img/wg-theme-editor/laptop-icon.svg') },
  { id: 'small', title: 'Tablet', icon: require('@/assets/img/wg-theme-editor/tablet-icon.svg') },
  { id: 'minimal', title: 'Mobile', icon: require('@/assets/img/wg-theme-editor/mobile-icon.svg') },
]
const templates = [
  { value: 'post', title: 'Post' },
  { value: 'widgets', title: 'Widgets' },
  { value: 'list', title: 'List' },
]
export default {
  name: 'WgThemeEditorPreview',
  components: {
    'wg-input-btn-group': WgInputBtnGroup
  },
  data () {
    return {
      brakepointActive: 'large',
      brakepoints: brakepoints,
      templates: templates
    }
  },
  methods: {
    showBrakepoint: function (brakepoint) {
      this.brakepointActive = brakepoint
      this.$store.commit('theme/editor/setPreview', brakepoint)
    }
  }
}
</script>

<style lang="scss" scoped>
.preview {
  $brakepoints-nav-height: 50px;
  &__brakepoints {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: $brakepoints-nav-height;
    text-align: center;
    margin-bottom: var(--wg-gutter-xl);
  }
}
.brakepoint {
  flex: 1;
  overflow: hidden;
  height: 100%;
  cursor: pointer;
  filter: grayscale(100%);
  opacity: 0.6;
  transition: all var(--wg-transition-duration-faster) var(--wg-transition-timing-function);
  &:hover, 
  &--active {
    filter: grayscale(0);
    opacity: 1;
  }
  img {
    display: block;
    margin: auto;
  }
  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto var(--wg-gutter);
    width: 24px;
    height: 24px;
  }
  &__title {
    font-size: var(--wg-font-size-xs);
    font-weight: $wg-font-weight-bold;
  }
}
</style>
