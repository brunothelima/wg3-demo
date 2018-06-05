<template>
  <component :is="level" class="heading">
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
  },
}
</script>

<style lang="scss" scoped>
.heading {
  padding: 0;
  margin: 0;
  font-weight: 700;
  margin-bottom: var(--gutter);
  font-family: var(--font-headings);
}
h1 {
  font-size: var(--headings-h1);
}
h2 {
  font-size: var(--headings-h2);
}
h3 {
  font-size: var(--headings-h3);
}
h4 {
  font-size: var(--headings-h4);
}
h5 {
  font-size: var(--headings-h5);
}
h6 {
  font-size: var(--headings-h6);
}
</style>
