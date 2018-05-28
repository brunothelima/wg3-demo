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
}
h1 {
  font-size: 2em;
}
h2 {
  font-size: 1.6em;
}
h3 {
  font-size: 1.2em;
}
h4 {
  font-size: 1.1em;
}
h5 {
  font-size: 1.05em;
}
h6 {
  font-size: 1.025em;
}
</style>
