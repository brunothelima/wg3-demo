<template>
  <component :is="tag" class="wg-text">
      <slot/>
  </component>
</template>

<script>  
export default {
  name: 'WgText',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
  }
}
</script>

<style lang="scss" scoped>
$component: '.wg-text';
#{$component} {
  font-size: var(--wg-font-size-xl);
  font-weight: $wg-font-weight-light;
  color: $wg-color-sys-b;
  /deep/ p {
    font-size: inherit;
    line-height: $wg-line-height-body;
    margin: 0 0 var(--wg-gutter-xl);
  }
  /deep/ a {
    font-weight: $wg-font-weight-bold;
    color: var(--wg-color-secondary);
    transition: color var(--wg-transition-duration-faster) var(--wg-transition-timing-function);
    &:hover {
      color: var(--wg-color-primary);
    }
  }
  /deep/ ul {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
    grid-gap: var(--wg-gutter-l);
    box-sizing: border-box;
    padding-left: var(--wg-gutter-l);
    margin-bottom: var(--wg-gutter-xl);
    list-style: disc;
    li {
      line-height: $wg-line-height-xl;
      padding-right: var(--wg-gutter-l);
    }
  }
  /deep/ picture {
    display: block;
    margin-left: calc(var(--wg-gutter-l) * -1);
    img {
      display: block;
      width: 100%;
      border-radius: var(--wg-border-radius);
    }
    p {
      display: inline-block;
      margin: 0;
      padding: var(--wg-gutter) var(--wg-gutter-l);
      font-size: var(--wg-font-size-s);
      line-height: $wg-line-height-xl;
      color: $wg-color-sys-e;
    }
    &.right,
    &.left {
      width: 50%;
      margin-top: var(--wg-gutter-l);
      p {
        padding: var(--wg-gutter) 0;
      }
    }
    &.right {
      float: right;
      margin-left: var(--wg-gutter-l);
    }
    &.left {
      float: left;
      margin-right: var(--wg-gutter-l);
    }
  }
  /deep/ #{$component}__quote {
    position: relative;
    display: block;
    margin-bottom: var(--wg-gutter-xl);
    i.fa-quote-left {
      display: block;
      z-index: 1;
      position: absolute;
      left: 0;
      top: 0;
      font-size: 36px;
      color: $wg-color-sys-h;
      transform: translate(calc(var(--wg-gutter) * -1), calc(var(--wg-gutter) * -1));
    }
    p {
      position: relative;
      z-index: 1;
      margin-bottom: var(--wg-gutter);
      font-size: var(--wg-font-size-xl);
      font-weight: $wg-font-weight-bold;
      color: $wg-color-sys-b;
      line-height: $wg-line-height-xl;
    }
    span {
      display: block;
      font-size: var(--wg-font-size);
    }
    &.right,
    &.left {
      width: 50%;
      margin-top: var(--wg-gutter-l);
    }
    &.right {
      float: right;
      margin-left: var(--wg-gutter-l);
    }
    &.left {
      float: left;
      margin-right: var(--wg-gutter-l);
    }
  }
}
@include wg-brakepoint($component, $wg-brakepoint-small) {
  /deep/ ul {
    display: block;
    li {
      margin-bottom: var(--wg-gutter-l);
    }
  }
  /deep/ picture {
    margin-left: 0;
    p {
      padding-left: 0;
    }
    &.right,
    &.left {
      float: none;
      width: 100%;
    }
  }
  /deep/ #{$component}__quote {
    &.right,
    &.left {
      float: none;
      width: 100%;
    }
  }
}
</style>
