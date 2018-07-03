<template>
  <div class="wg-theme-editor-form tabs">
    <nav class="tabs__nav">
      <a v-for="(tab, index) in tabs" :key="index" 
        :class="['tab', {'tab--active': currentTab === tab.id}]" 
        @click="currentTab = tab.id">
          <span class="tab__icon"><img :src="tab.icon" :alt="tab.title" /></span>
          <span class="tab__title">{{tab.title}}</span>
      </a>
    </nav>
    <div class="tabs__blocks">
      <wg-theme-editor-fonts v-if="currentTab === 'fonts'"
        v-bind="WgThemeCurrentTheme"
        @change="onChange($event)"/>
      <wg-theme-editor-colors v-if="currentTab === 'colors'"
        v-bind="WgThemeCurrentTheme"
        @change="onChange($event)"/>
      <wg-theme-editor-layout v-if="currentTab === 'layout'"
        v-bind="WgThemeCurrentTheme"
        @change="onChange($event)"/>
      <wg-theme-editor-animation v-if="currentTab === 'animation'"
        v-bind="WgThemeCurrentTheme"
        @change="onChange($event)"/>
    </div>
  </div> 
</template>

<script>
import { WG_THEME_SET_PROPS } from '@/store/actions/WgTheme'
import { mapGetters } from 'vuex'

import WgThemeEditorFonts from './WgThemeEditorFonts'
import WgThemeEditorColors from './WgThemeEditorColors'
import WgThemeEditorLayout from './WgThemeEditorLayout'
import WgThemeEditorAnimation from './WgThemeEditorAnimation'
import WgBtn from '@/components/wg-ui/WgBtn'

const tabs = [
  { id: 'fonts', title: 'Fonts', icon: require('@/assets/img/wg-theme-editor/fonts-icon.svg') },
  { id: 'colors', title: 'Colors', icon: require('@/assets/img/wg-theme-editor/colors-icon.svg') },
  { id: 'layout', title: 'Layout', icon: require('@/assets/img/wg-theme-editor/layout-icon.svg') },
  { id: 'animation', title: 'Animation', icon: require('@/assets/img/wg-theme-editor/animation-icon.svg') },
]

export default {
  name: 'WgThemeEditorForm',
  components: {
    'wg-theme-editor-fonts': WgThemeEditorFonts,
    'wg-theme-editor-colors': WgThemeEditorColors,
    'wg-theme-editor-layout': WgThemeEditorLayout,
    'wg-theme-editor-animation': WgThemeEditorAnimation,
    'wg-btn': WgBtn,
  },
  data () {
    return {
      tabs: tabs,
      currentTab: 'fonts',
    }
  },
  computed: {
    ...mapGetters(['WgThemeCurrentTheme']),
  },
  methods: {
    onChange: function (field) {
      this.$store.commit(WG_THEME_SET_PROPS, { [field.name]: field.value })
    },
  }, 
}
</script>

<style lang="scss" scoped>
.tabs {
  height: 100%;
  $tabs-nav-height: 50px;
  &__nav {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: $tabs-nav-height;
    text-align: center;
  }
  &__blocks {
    position: relative;
    height: calc(100% - #{$tabs-nav-height});
    /deep/ .wg-form {
      box-sizing: border-box;
      overflow: auto;
      height: 100%;
      padding: var(--wg-gutter-xl) var(--wg-gutter-l) 0;
      background-color: $wg-color-sys-k;
    }
  }
}
.tab {
  flex: 1;
  overflow: hidden;
  height: 100%;
  cursor: pointer;
  filter: grayscale(100%);
  transition: all var(--wg-transition-duration-faster) var(--wg-transition-timing-function);
  &:hover, 
  &--active {
    filter: grayscale(0);
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
    font-size: var(--wg-font-size-s);
  }
}
</style>
