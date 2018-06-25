<template>
  <div class="wg-input-file" 
    :hover="hover"
    :focus="focus"
    :disabled="disabled"
  >
    <input type="file" 
      ref="input" 
      :name="name"
      @change="onChange($event.target.files)"/> 
    <span>{{selected.name || placeholder}}</span>
    <wg-btn :small="true"
     :disabled="disabled" 
     @click.native="open()">
      <i class="fa fa-search"></i>
    </wg-btn>
  </div>
</template>

<script>  
import WgBtn  from '@/components/wg-ui/WgBtn'
export default {
  name: 'WgFormFile',
  components: {
    'wg-btn': WgBtn
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Type Here'
    },
    value: {
      type: Object,
      default: () => {}
    },
    focus: {
      type: Boolean,
      default: false
    },
    hover: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      selected: {},
    }
  },
  methods: {
    onChange(files) {
     this.selected = files[0]
     this.$emit('change', files[0])
    },
    open() {
     this.$refs.input.click()
    }
  }
}
</script>

<style lang="scss" scoped>
.wg-input-file {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 40px;
  width: 100%;
  padding: 0 var(--wg-gutter-l);
  background-color: $wg-color-sys-k;
  border: var(--wg-border-width) var(--wg-border-style) $wg-color-sys-h;
  border-radius: var(--wg-border-radius);
  font-size: var(--wg-font-size);
  color: $wg-color-sys-f;
  outline: none;
  transition-duration: var(--wg-transition-duration);
  transition-timing-function: var(--wg-cubic-bezier);
  transition-property: border-color, box-shadow, color; 
  .wg-btn {
    position: absolute;
    height: 38px;
    right: var(--wg-border-width);
    padding: 0 var(--wg-gutter);
    font-size: var(--wg-font-size-s);
  }
  input {
    display: none;
  }
}
</style>
