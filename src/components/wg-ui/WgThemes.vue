<template>
  <div class="wg-themes">
    <section v-if="themes">
      <div v-for="(theme, themeIndex) in themes" 
        :key="themeIndex"
        class="theme">
        <WgHeading level="h3">{{theme.title}}</WgHeading>
        <ul>
          <li v-for="(color, colorIndex) in theme.colors" 
            :key="colorIndex" 
            class="color">
            <div class="color__demo" :style="`background-color: ${color.value}`">
              <input class="color__hex" :value="color.value" />
            </div>
            <div class="color__var">--color-{{color.type}}</div>
          </li>
          <li class="theme__choose">
            <WgBtn @click.native="chooseTheme(themeIndex)">Choose</WgBtn>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import WgHeading from './WgHeading'
import WgBtn from './WgBtn'
import { WG_UI_SET_THEME_CSS } from '@/store/actions/WgUi'

export default {
  name: 'WgThemes',
  components: {
    WgHeading,
    WgBtn
  },
  props: {
    themes: {
      type: Array,
      required: true
    }
  },
  methods: {
    chooseTheme: function (themeIndex) {
      this.$store.commit(WG_UI_SET_THEME_CSS, {
        index: themeIndex,
        target: document.documentElement
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.theme {
  margin-bottom: var(--gutter-double);
  &:last-child {
    margin-bottom: 0;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0 calc(var(--gutter-half) * -1);
  }
  .color {
    margin: var(--gutter-half);
    box-shadow: 0 0 20px rgba(black, 0.1);
    &__demo {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      height: 100px;
      padding: var(--gutter);
      input {
        display: inline-block;
        padding: var(--gutter-half) var(--gutter);
        max-width: 60px;
        border-radius: var(--gutter-double);
        background-color: white;
        border: none;
        font-size: 0.8em;
        text-align: center;
        outline: none;
      }
    }
    &__var {
      box-sizing: border-box;
      padding: var(--gutter-half);
    }
  }
  .theme__choose {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: var(--gutter-half);
    padding: var(--gutter);
  }
}
</style>
