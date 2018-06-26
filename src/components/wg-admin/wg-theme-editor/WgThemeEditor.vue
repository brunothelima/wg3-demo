<template>
  <div class="wg-theme-editor" :class="{'wg-theme-editor--active': !showIntro}">
    <wg-drag-resize v-bind="panel" ref="panel" class="panel">
      <div class="panel__content">
        <wg-theme-editor-intro v-if="showIntro" @confirm="initEditor"/>
        <div class="panel__tabs tabs" v-else>
          <nav class="tabs__nav">
            <a v-for="(tab, index) in tabs" :key="index" 
              :class="['tab', {'tab--active': currentTab === tab.id}]" 
              @click="currentTab = tab.id">
                <span class="tab__icon"><img :src="tab.icon" :alt="tab.title" /></span>
                <span class="tab__title">{{tab.title}}</span>
            </a>
          </nav>
          <div class="tabs__blocks" v-if="theme">
           <wg-theme-editor-fonts v-bind="theme.fonts" v-if="currentTab === 'fonts'"/>
           <wg-theme-editor-colors v-bind="theme.colors" v-if="currentTab === 'colors'"/>
           <wg-theme-editor-layout v-bind="theme.layout" v-if="currentTab === 'layout'"/>
           <wg-theme-editor-animation v-bind="theme.animation" v-if="currentTab === 'animation'"/>
          </div>
        </div> 
      </div>
    </wg-drag-resize>
  </div>
</template>

<script>
import WgDragResize from '@/components/wg-ui/WgDragResize'
import WgThemeEditorIntro from './WgThemeEditorIntro'
import WgThemeEditorFonts from './WgThemeEditorFonts'
import WgThemeEditorColors from './WgThemeEditorColors'
import WgThemeEditorLayout from './WgThemeEditorLayout'
import WgThemeEditorAnimation from './WgThemeEditorAnimation'

const tabs = [
  { id: 'fonts', title: 'Fonts', icon: require('@/assets/img/wg-theme-editor/fonts-icon.svg') },
  { id: 'colors', title: 'Colors', icon: require('@/assets/img/wg-theme-editor/colors-icon.svg') },
  { id: 'layout', title: 'Layout', icon: require('@/assets/img/wg-theme-editor/layout-icon.svg') },
  { id: 'animation', title: 'Animation', icon: require('@/assets/img/wg-theme-editor/animation-icon.svg') },
]

export default {
  name: 'WgThemeEditor',
  components: {
    'wg-drag-resize': WgDragResize,
    'wg-theme-editor-intro': WgThemeEditorIntro,
    'wg-theme-editor-fonts': WgThemeEditorFonts,
    'wg-theme-editor-colors': WgThemeEditorColors,
    'wg-theme-editor-layout': WgThemeEditorLayout,
    'wg-theme-editor-animation': WgThemeEditorAnimation,
  },
  props: {
    intro: {
      type: Boolean,
      default: true
    },
    theme: {
      type: Object,
      default: () => {}
    },
  }, 
  data () {
    return {
      tabs: tabs,
      currentTab: 'fonts',
      showIntro: this.intro,
      panel: {
        w: 495, h: 588,
        x: (window.innerWidth - 495) / 2,
        y: (window.innerHeight - 588) / 2,
      },
    }
  },
  methods: {
    initEditor: function () {
      this.showIntro = false
      this.$refs.panel.setCoords({
        x: 24,  y: 80, w: 287,  h: 505,
      });
    },
  },
  mounted: function () {
    if (!this.showIntro) {
      this.initEditor()
    }
  },
}
</script>

<style lang="scss" scoped>
.wg-theme-editor {
  overflow: visible;
  position: fixed;
  z-index: 4;
  left: 0;
  top: 0;
  &:before {
    position: absolute;
    z-index: 1;
    content: '';
    height: 100vh;
    width: 100vw;
    background-color: rgba($wg-color-sys-g, 0.8);
    transition: all var(--wg-transition-duration-faster) var(--wg-cubic-bezier);
  }
  &--active {
    .panel {
      animation: none;
      opacity: 0.6;
      width: 287px;
      height: 505px;
      &:hover {
        opacity: 1;
        box-shadow: var(--wg-box-shadow-xxl);
      }
      /deep/ .wg-dr__drag-handle,
      /deep/ .wg-dr__resize-handle {
        display: flex;
      }
    }
    &:before {
      visibility: hidden;
      opacity: 0;
    }
  }
} 
.panel {
  z-index: 3;
  overflow: hidden;
  position: fixed;
  border-radius: var(--wg-border-radius);
  background-color: $wg-color-sys-k; 
  animation: panel-animation var(--wg-transition-duration) var(--wg-cubic-bezier) forwards;
  transition: all var(--wg-transition-duration-faster) var(--wg-cubic-bezier);
  &.wg-dr--active {
    transition: none;
    opacity: 1;
  }
  /deep/ .wg-dr__drag-handle,
  /deep/ .wg-dr__resize-handle {
    display: none;
  }
  @keyframes panel-animation {
    from {
      transform: translateY(calc(var(--wg-box-shadow-y) * 8));
      box-shadow: 0 0 0 rgba(black, 0);
      opacity: 0;
    } to {
      transform: translateY(1%);
      box-shadow: var(--wg-box-shadow-xxl);
      opacity: 1;
    }
  }
}

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
      padding: var(--wg-gutter-xl) var(--wg-gutter-l);
      background-color: $wg-color-sys-k;
    }
  }
}
.tab {
  flex: 1;
  overflow: hidden;
  height: 100%;
  cursor: pointer;
  opacity: 0.4;
  transition: opacity var(--wg-transition-duration-faster) var(--wg-cubic-bezier);
  &:hover, 
  &--active {
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
    font-size: var(--wg-font-size-s);
  }
}
</style>
