<template>
  <component :is="level"  :class="[
    {'heading--underline': underline},
    `heading heading--${weight}`]">
      <slot/>
  </component>
</template>

<script>
export default {
  name: 'WgHeading',
  props: {
    level: {
      type: String,
      default: 'h1',
      validator: value => {
        return value.match(/(h1|h2|h3|h4|h5|h6)/)
      },
    },
    weight: {
      type: String,
      default: 'bold',
      validator: value => {
        return value.match(/(light|regular|bold|semi-bold|heavy)/)
      },
    },
    underline: {
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.heading {
  padding: 0;
  margin: 0;
  margin-bottom: var(--wg-gutter); 
  color: $wg-color-sys-b;
  &--light {
    font-weight: $wg-font-weight-light;
  }
  &--regular {
    font-weight: $wg-font-weight-regular;
  }
  &--semi-bold {
    font-weight: $wg-font-weight-semi-bold;
  }
  &--bold {
    font-weight: $wg-font-weight-bold;
  }
  &--heavy {
    font-weight: $wg-font-weight-heavy;
  }
  &--underline {
    padding-bottom: var(--wg-gutter);
    border-bottom: var(--wg-border-width) var(--wg-border-style) $wg-color-sys-h; 
  }
}
h1 {
  font-size: calc(var(--wg-font-size) * 2.6);
  line-height: $wg-line-height-l;
}
h2 {
  font-size: calc(var(--wg-font-size) * 2.2);
  line-height: $wg-line-height-l;
}
h3 {
  font-size: calc(var(--wg-font-size) * 1.8);
  line-height: $wg-line-height-l;
}
h4 {
  font-size: calc(var(--wg-font-size) * 1.6);
  line-height: $wg-line-height-xl;
}
h5 {
  font-size: calc(var(--wg-font-size) * 1.4);
  line-height: $wg-line-height-xl;
}
h6 {
  font-size: calc(var(--wg-font-size) * 1.2);
  line-height: $wg-line-height-xl;
}
</style>
