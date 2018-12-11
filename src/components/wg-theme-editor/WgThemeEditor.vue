<i18n>
{
  "en": {
    "publish": "Publish",
    "preview": "Preview",
    "editor": "Editor"
  },
  "pt": {
    "publish": "Publicar",
    "preview": "Preview",
    "editor": "Editor"
  }
}
</i18n>

<template>
  <div class="wg-theme-editor" :class="{'wg-theme-editor--active': panelVisible != 'tutorial'}">
    <wg-drag-resize ref="panel" class="panel" 
      v-bind="{ 
        w: 495, 
        h: 588, 
        x: panelCenterX, 
        y: panelCenterY 
      }" 
      :drag="panelVisible != 'tutorial'"
      :resize="panelVisible != 'tutorial'">
        <div class="panel__content">
          <component :is="`wg-theme-editor-${panelVisible}`"
            @formTabChange="shrinkPanel"
            @tutorialConfirm="initEditor"
            @viewUpdate="normalize"/>
          <div class="panel__actions" v-if="panelVisible != 'tutorial'">
            <wg-btn v-if="panelVisible === 'form'"
              class="panel__preview" 
              :outline="true"
              @click="showPanel('preview')">
                {{$t('preview')}}
            </wg-btn>
            <wg-btn :outline="true" v-if="panelVisible === 'preview'"
              class="panel__editor" 
              @click="showPanel('form')">
                {{$t('editor')}}
            </wg-btn>
            <wg-btn model="primary" class="panel__publish">
              {{$t('publish')}}
            </wg-btn>
          </div>
        </div>
    </wg-drag-resize>
  </div>
</template>

<script>
import WgDragResize from '@/components/wg-uikit/WgDragResize'
import WgBtn from '@/components/wg-uikit/WgBtn'
import WgThemeEditorTutorial from './wg-theme-editor-tutorial/WgThemeEditorTutorial'
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
  data () {
    return {
      panelVisible: 'tutorial',
      normalizeTimeout: null,
    }
  },
  computed: {
    panelCenterX () {
      return (window.innerWidth - 495) / 2
    },
    panelCenterY () {
      return (window.innerHeight - 588) / 2
    },
  },
  methods: {
    shrinkPanel () {
      this.$refs.panel.shrink()
    },
    showPanel (panel) {
      this.panelVisible = panel
      this.shrinkPanel()
    },
    initEditor () {
      this.showPanel('form')
      this.$refs.panel.setCoords({ 
        x: 32, 
        y: 88, 
        w: 282 
      });
    },
    normalize () {
      clearTimeout(this.normalizeTimeout)
      this.normalizeTimeout = setTimeout(() => {
        document.querySelectorAll('.swiper-container').forEach(slider => {
          slider.swiper.update()
        })
      }, 250);
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
    content: '';
    height: 100vh;
    width: 100vw;
    background-color: rgba($wg-color-sys-g, 0.8);
    transition: all var(--wg-transition-duration) var(--wg-transition-timing-function);
  }
  &--active {
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
  border-radius: var(--wg-border-radius-l);
  background-color: $wg-color-sys-k; 
  box-shadow: var(--wg-box-shadow-xxl);
  animation: panel-animation var(--wg-transition-duration) var(--wg-transition-timing-function) forwards;
  transition: all var(--wg-transition-duration) var(--wg-transition-timing-function);
  &__content {
    overflow: hidden;
  }
  &__actions {
    display: flex;
    justify-content: center;
    padding: var(--wg-gutter-xl) var(--wg-gutter) 0;
    border-top: var(--wg-border-width) var(--wg-border-style) $wg-color-sys-i;
    > * {
      margin: 0 var(--wg-gutter);
      height: $wg-input-height;
    }
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
