<i18n>
{
  "en": {
    "fonts": "Fonts",
    "colors": "Colors",
    "layout": "Layout",
    "animation": "Animation"
  },
  "pt": {
   "fonts": "Fontes",
    "colors": "Cores",
    "layout": "Layout",
    "animation": "Animação"
  }
}
</i18n>

<template>
  <div class="wg-theme-editor-form forms">
    <nav class="forms__nav">
      <a v-for="(form, index) in forms" 
        :key="index"
        :class="['form', { 
          'form--active': formVisible === form.id 
        }]"
        @click="showForm(form.id)">
          <span class="form__icon"><img :src="form.icon" :alt="form.title" /></span>
          <span class="form__title">{{$t(form.id)}}</span>
      </a>
    </nav>
    <div class="forms__components">
      <component v-bind="currentTheme"
        :is="`wg-theme-editor-form-${formVisible}`"
        @change="onFormChange($event)"/>
    </div>
  </div> 
</template>

<script>
import { mapState } from 'vuex'

import WgThemeEditorFormFonts from './WgThemeEditorFormFonts'
import WgThemeEditorFormColors from './WgThemeEditorFormColors'
import WgThemeEditorFormLayout from './WgThemeEditorFormLayout'
import WgThemeEditorFormAnimation from './WgThemeEditorFormAnimation'
import WgBtn from '@/components/wg-uikit/WgBtn'

export default {
  name: 'WgThemeEditorForm',
  components: {
    'wg-theme-editor-form-fonts': WgThemeEditorFormFonts,
    'wg-theme-editor-form-colors': WgThemeEditorFormColors,
    'wg-theme-editor-form-layout': WgThemeEditorFormLayout,
    'wg-theme-editor-form-animation': WgThemeEditorFormAnimation,
    'wg-btn': WgBtn,
  },
  data () {
    return {
      formVisible: 'fonts',
      forms: [
        { 
          id: 'fonts',  
          icon: require('@/assets/img/wg-theme-editor/fonts-icon.svg'),
        },
        { 
          id: 'colors', 
          icon: require('@/assets/img/wg-theme-editor/colors-icon.svg'), 
        },
        { 
          id: 'layout', 
          icon: require('@/assets/img/wg-theme-editor/layout-icon.svg'),
        },
        { 
          id: 'animation', 
          icon: require('@/assets/img/wg-theme-editor/animation-icon.svg'), 
        },
      ],
    }
  },
  computed: {
    ...mapState({
      currentTheme: state => state.theme.editor.theme,
    }),
  },
  methods: {
    showForm (form) {
      this.formVisible = form
      this.$emit('formTabChange', this.formVisible)
    },
    onFormChange (field) {
      this.$store.commit('theme/editor/setTheme', { 
        [field.name]: field.value 
      })
      this.$emit('viewUpdate')
    },
  }, 
}
</script>

<style lang="scss" scoped>
.forms {
  $tabs-nav-height: 50px;
  &__nav {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: $tabs-nav-height;
    text-align: center;
  }
  &__components {
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
  .form {
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
}
</style>
