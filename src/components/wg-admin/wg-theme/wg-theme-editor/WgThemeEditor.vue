<template>
  <div class="wg-theme-editor" :class="{'wg-theme-editor--active': ['tutorial', 'none'].indexOf(currentComponent) < 0}">
    <wg-drag-resize v-bind="panel" ref="panel" class="panel">
      <div class="panel__content">
        <wg-theme-editor-tutorial v-if="currentComponent === 'tutorial'" @confirm="initEditor"/>
        <wg-theme-editor-form v-if="currentComponent === 'form'" @tabChange="$refs.panel.normalizeSizes()" />
        <wg-theme-editor-preview v-if="currentComponent === 'preview'" />
        <div class="panel__actions" v-if="['tutorial', 'none'].indexOf(currentComponent) < 0">
          <wg-btn v-if="currentComponent === 'form'"
            class="panel__preview" 
            model="outline"
            @click="changeComponent('preview')">
              Preview
          </wg-btn>
          <wg-btn v-if="currentComponent === 'preview'"
            class="panel__editor" 
            model="outline"
            @click="changeComponent('form')">
              Editor
          </wg-btn>
          <wg-btn class="panel__publish">
            Publish
          </wg-btn>
        </div>
      </div>
    </wg-drag-resize>
  </div>
</template>

<script>
import WgDragResize from '@/components/wg-ui/WgDragResize'
import WgBtn from '@/components/wg-ui/WgBtn'
import WgThemeEditorTutorial from './WgThemeEditorTutorial'
import WgThemeEditorPreview from './WgThemeEditorPreview'
import WgThemeEditorForm from './wg-theme-editor-form/WgThemeEditorForm'

export default {
  name: 'WgThemeEditor',
  components: {
    'wg-drag-resize': WgDragResize,
    'wg-theme-editor-tutorial': WgThemeEditorTutorial,
    'wg-theme-editor-form': WgThemeEditorForm,
    'wg-theme-editor-preview': WgThemeEditorPreview,
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
      currentComponent: (this.tutorial) ? 'tutorial' : 'form',
      panel: {
        w: 495, 
        h: 588,
        x: (window.innerWidth - 495) / 2,
        y: (window.innerHeight - 588) / 2,
      },
    }
  },
  methods: {
    changeComponent: function (tab) {
      this.currentComponent = tab
      this.$refs.panel.normalizeSizes()
    },
    initEditor: function () {
      setTimeout(() => {
        this.changeComponent('form')
        this.$refs.panel.setCoords({
          x: 32, 
          y: 88, 
          w: 282
        });
      }, 200);
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
$component: '.wg-theme-editor';
#{$component} {
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
    &:before {
      visibility: hidden;
      opacity: 0;
    }
    .panel {
      animation: none;
      opacity: 0.6;
      &:hover {
        opacity: 1;
      }
      &__actions {
        opacity: 1;
      }
      /deep/ .wg-dr__drag-handle,
      /deep/ .wg-dr__resize-handle {
        display: flex;
      }
    }
  }
  &:not(#{$component}--active) {
    /deep/ .wg-dr__content {
      height: 100%;
    }
  }
} 
.panel {
  z-index: 3;
  overflow: hidden;
  position: fixed;
  border-radius: var(--wg-border-radius-l);
  background-color: $wg-color-sys-k; 
  box-shadow: var(--wg-box-shadow-xxl);
  animation: panel-animation var(--wg-transition-duration) var(--wg-transition-timing-function) forwards;
  transition: all var(--wg-transition-duration-faster) var(--wg-transition-timing-function);
  &__content {
    overflow: hidden;
  }
  &__actions {
    display: flex;
    justify-content: center;
    padding: var(--wg-gutter-xl) var(--wg-gutter) 0;
    border-top: var(--wg-border-width) var(--wg-border-style) $wg-color-sys-i;
    opacity: 0;
    > * {
      margin: 0 var(--wg-gutter);
      height: $wg-input-height;
    }
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
