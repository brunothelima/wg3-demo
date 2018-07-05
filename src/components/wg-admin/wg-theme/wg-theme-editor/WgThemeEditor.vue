<template>
  <div class="wg-theme-editor" :class="{'wg-theme-editor--active': ['tutorial', 'none'].indexOf(currentTab) < 0}">
    <wg-drag-resize v-bind="panel" ref="panel" class="panel">
      <div class="panel__content">
        <wg-theme-editor-tutorial v-if="currentTab === 'tutorial'" @confirm="initEditor"/>
        <wg-theme-editor-form v-if="currentTab === 'form'" />
        <wg-theme-editor-preview v-if="currentTab === 'preview'" />
        <div class="panel__actions" v-if="['tutorial', 'none'].indexOf(currentTab) < 0">
          <wg-btn v-if="currentTab === 'form'"
            class="panel__preview" 
            model="outline"
            @click="currentTab = 'preview'">
              Preview
          </wg-btn>
          <wg-btn v-if="currentTab === 'preview'"
            class="panel__editor" 
            model="outline"
            @click="currentTab = 'form'">
              Editor
          </wg-btn>
          <wg-btn class="panel__publish">Publish</wg-btn>
        </div>
      </div>
    </wg-drag-resize>
  </div>
</template>

<script>
import WgDragResize from '@/components/wg-ui/WgDragResize'
import WgBtn from '@/components/wg-ui/WgBtn'
import WgThemeEditorTutorial from './wg-theme-editor-tutorial/WgThemeEditorTutorial'
import WgThemeEditorForm from './wg-theme-editor-form/WgThemeEditorForm'
import WgThemeEditorPreview from './WgThemeEditorPreview'

export default {
  name: 'WgThemeEditor',
  components: {
    'wg-drag-resize': WgDragResize,
    'wg-btn': WgBtn,
    'wg-theme-editor-tutorial': WgThemeEditorTutorial,
    'wg-theme-editor-form': WgThemeEditorForm,
    'wg-theme-editor-preview': WgThemeEditorPreview,
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
        x: 32, 
        y: 88, 
        w: 282,
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
      width: 282px;
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
      height: $wg-input-height;
    }
  }
  &__preview,
  &__editor{
    width: 95px;
    filter: grayscale(100%);
    opacity: 0.6;
  }
  &__publish {
    width: 128px;
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
