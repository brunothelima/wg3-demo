<template>
  <div class="wg-theme-editor" :class="{'wg-theme-editor--active': currentTab != 'tutorial'}">
    <wg-drag-resize v-bind="panel" ref="panel" class="panel">
      <div class="panel__content">
        <wg-theme-editor-tutorial v-if="currentTab === 'tutorial'" @confirm="initEditor"/>
        <wg-theme-editor-form v-if="currentTab === 'form'" />
        <div class="panel__actions">
          <wg-btn class="panel__preview" model="outline">Preview</wg-btn>
          <wg-btn class="panel__publish">Publish</wg-btn>
        </div>
      </div>
    </wg-drag-resize>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import WgDragResize from '@/components/wg-ui/WgDragResize'
import WgThemeEditorTutorial from './WgThemeEditorTutorial'
import WgThemeEditorForm from './WgThemeEditorForm'
import WgBtn from '@/components/wg-ui/WgBtn'

export default {
  name: 'WgThemeEditor',
  components: {
    'wg-drag-resize': WgDragResize,
    'wg-theme-editor-tutorial': WgThemeEditorTutorial,
    'wg-theme-editor-form': WgThemeEditorForm,
    'wg-btn': WgBtn,
  },
  props: {
    tutorial: {
      type: Boolean,
      default: true
    },
  }, 
  data () {
    return {
      currentTab: (this.tutorial) ? 'tutorial' : 'form',
      panel: {
        w: 495, 
        h: 588,
        x: (window.innerWidth - 495) / 2,
        y: (window.innerHeight - 588) / 2,
      },
    }
  },
  methods: {
    initEditor: function () {
      this.currentTab = 'form'
      this.$refs.panel.setCoords({
        x: 24, 
        y: 80, 
        w: 300,
        h: 613,
      });
    },
  },
  mounted: function () {
    if (!this.tutorial) {
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
    transition: all var(--wg-transition-duration-faster) var(--wg-transition-timing-function);
  }
  &--active {
    .panel {
      animation: none;
      opacity: 0.6;
      width: 300px;
      height: 505px;
      &:hover {
        opacity: 1;
        box-shadow: var(--wg-box-shadow-xxl);
      }
      /deep/ .wg-dr__drag-handle,
      /deep/ .wg-dr__resize-handle {
        display: flex;
      }
      &__actions {
        opacity: 1;
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
  animation: panel-animation var(--wg-transition-duration) var(--wg-transition-timing-function) forwards;
  transition: all var(--wg-transition-duration-faster) var(--wg-transition-timing-function);
  &__actions {
    display: flex;
    padding: var(--wg-gutter-xl) var(--wg-gutter) 0;
    border-top: var(--wg-border-width) var(--wg-border-style) $wg-color-sys-i;
    opacity: 0;
    > * {
      margin: 0 var(--wg-gutter);
    }
  }
  &__preview,
  &__editor{
    filter: grayscale(100%);
    opacity: 0.6;
  }
  &__publish {
    flex: 1;
  }
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
</style>
