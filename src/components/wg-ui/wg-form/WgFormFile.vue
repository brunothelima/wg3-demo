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
    <span>{{selected || placeholder}}</span>
    <wg-btn :small="true"
     :disabled="disabled" 
     @click.native="open()">
      <i class="fa fa-search"></i>
    </wg-btn>
  </div>
</template>

<script>  
import { VueMaskDirective } from 'v-mask'
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
      selected: '',
    }
  },
  methods: {
    onChange(files) {
     this.selected = files[0].name
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
  padding: 0 var(--gutter-half);
  border: 2px solid var(--colors-neutral);
  outline: none;
  font-size: 0.7em;
  transition: all var(--speed) var(--cubic-bezier);
  .wg-btn {
    position: absolute;
    right: 2px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 12px;
  }
  input {
    display: none;
  }
}
</style>
