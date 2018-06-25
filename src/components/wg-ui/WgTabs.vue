<template>
<div class="wg-tabs">
  <nav class="wg-tabs__nav">
    <a v-for="(tab, index) in tabs" :key="index" 
      :class="[{'active': currentTab === index}, 'wg-tab--tab tab']" 
      @click="currentTab = index">
        <span class="tab__icon" v-if="tab.icon"><img :src="tab.icon" :alt="tab.title || ''" /></span>
        <span class="tab__title" v-if="tab.title">{{tab.title}}</span>
    </a>
  </nav>
  <div class="wg-tabs__blocks">
    <component v-for="(tab, index) in tabs" :key="index" 
      v-if="currentTab === index"
      class="wg-tabs__block block"
      :is="getComponentName(tab.component)" />
  </div>
</div> 
</template>

<script>
// const tabs = [
//   { 
//     title: 'Fonts', 
//     icon: require('@/assets/img/wg-theme-editor/fonts-icon.svg'),
//     component: '@/components/wg-admin/wg-theme-editor/WgThemeEditorFonts'
//   },
//   { 
//     title: 'Colors', 
//     icon: require('@/assets/img/wg-theme-editor/colors-icon.svg'),
//     component: '@/components/wg-admin/wg-theme-editor/WgThemeEditorColors'
//   },
//   { 
//     title: 'Layout', 
//     icon: require('@/assets/img/wg-theme-editor/layout-icon.svg'),
//     component: '@/components/wg-admin/wg-theme-editor/WgThemeEditorLayout'
//   },
//   { 
//     title: 'Animation', 
//     icon: require('@/assets/img/wg-theme-editor/animation-icon.svg'), 
//     component: '@/components/wg-admin/wg-theme-editor/WgThemeEditorAnimation'
//   },
// ]

export default {
  name: 'WgTabs',
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      currentTab: 0
    }
  },
  methods: {
    getComponentName: function (componentPath) {
      return componentPath.split('/').reverse()[0]
    }
  },  
  created: function () {
    if (!this.tabs.length) {
      return
    }
    this.tabs.map(tab => {
      if (tab.component) {
        this.$options.components[this.getComponentName(tab.component)] =  () => import(tab.component)
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.wg-tabs {
  height: 100%;
  $tabs-nav-height: 50px;
  &__nav {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: $tabs-nav-height;
    text-align: center;
    .tab {
      position: relative;
      flex: 1;
      overflow: hidden;
      height: 100%;
      cursor: pointer;
      opacity: 0.4;
      transition: opacity var(--wg-transition-duration-faster) var(--wg-cubic-bezier);
      &:hover, &.active {
        opacity: 1;
      }
      img {
        display: block;
        margin: auto;
      }
      .tab__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto var(--wg-gutter);
        width: 24px;
        height: 24px;
      }
      .tab__title {
        font-size: var(--wg-font-size-s);
      }
    }
  }
  &__blocks {
    position: relative;
    height: calc(100% - #{$tabs-nav-height});
    .block {
      display: block;
      box-sizing: border-box;
      overflow: auto;
      height: 100%;
      padding: var(--wg-gutter-l);
      background-color: $wg-color-sys-k;
    }
  }
}
</style>
