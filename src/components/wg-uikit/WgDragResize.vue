<template>
  <div ref="wgDr" 
    :class="['wg-dr', {'wg-dr--active': isMoving || isResizing }]"
    :style="{'left': `${pos.x}px`, 'top': `${pos.y}px`,
      'width': `${size.w}px`, 'height': `${size.h}px`,}"> 
      <div v-if="drag" 
        class="wg-dr__drag-handle" 
        ref="wgDrDragHandle" 
        @mousedown="onDragStart($event)" >
          <i class="fa fa-bars"></i>
      </div>
      <div class="wg-dr__content" ref="wgDrContent">
        <slot />
      </div>
      <div v-if="resize" 
        class="wg-dr__resize-handle" 
        ref="wgDrResizeHandle" 
        @mousedown="onResizeStart($event)" >
          <i class="fa fa-ellipsis-h"></i>
      </div>
  </div>
</template>

<script>
export default {
  name: 'WgDragResize',
  props: {
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    },
    w: {
      type: Number,
      default: 0
    },
    h: {
      type: Number,
      default: 0
    },
    drag: {
      type: Boolean,
      default: true
    },
    resize: {
      type: Boolean,
      default: true
    },
  },
  data () {
    return {
      isMoving: false,
      isResizing: false,
      pos: {
        y: this.y,
        x: this.x,
      },
      size: {
       w: this.w,
       h: this.h,
      },
    }
  },
  methods: {
    minHeight: function () {  
      let minHeight = this.$refs.wgDrContent.children[0].clientHeight
      minHeight += this.$refs.wgDrDragHandle.clientHeight
      minHeight += this.$refs.wgDrResizeHandle.clientHeight
      return minHeight
    },
    shrink: function () {
      setTimeout(() => {
        this.size.h = this.minHeight()
        this.checkBoundaries()
      }, 250);
    },
    setCoords: function (coords) {
      this.pos.x = coords.x || this.pos.x
      this.pos.y = coords.y || this.pos.y
      this.size.w = coords.w || this.size.w
      this.size.h = coords.h || this.size.h
    },
    checkBoundaries: function () {
      if (this.pos.x < 0) {
        this.pos.x = 0
      }
      if ((this.pos.x + this.size.w) > window.innerWidth) {
        this.pos.x = window.innerWidth - this.size.w
      }
      if (this.pos.y < 0) {
        this.pos.y = 0
      }
      if ((this.pos.y + this.size.h) > window.innerHeight) {
        this.pos.y = window.innerHeight - this.size.h
      }
    },
    onDragStart: function (dragStart) {   
      this.$emit('dragStart')   
      this.isMoving = true
      let lastClientX = dragStart.clientX
      let lastClientY = dragStart.clientY
      document.onmousemove = (dragMove) => {
        this.$emit('dragMove')   
        this.pos.x = this.$refs.wgDr.offsetLeft - (lastClientX - dragMove.clientX)
        this.pos.y = this.$refs.wgDr.offsetTop - (lastClientY - dragMove.clientY)
        lastClientX = dragMove.clientX
        lastClientY = dragMove.clientY
      }
      document.onmouseup = () => {
        this.$emit('dragStop')   
        this.isMoving = false
        document.onmousemove = null
        this.checkBoundaries()
      }
    },
    onResizeStart: function (resizeStart) {
      this.$emit('resizeStart')   
      this.isResizing = true
      let firstHeight = this.size.h
      document.onmousemove = (resizing) => {
        let minHeight = this.minHeight()
        let newHeight = firstHeight + (resizing.pageY - resizeStart.pageY);
        if (newHeight >= minHeight) {
          this.shrink()
          return
        }
        this.$emit('resizing')   
        this.size.h = newHeight
      }
      document.onmouseup = () => {
        this.$emit('resizeStop')   
        this.isResizing = false
        document.onmousemove = null
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.wg-dr {
  overflow: hidden;
  position: fixed;
  &--active {
    transition: none !important;
  }
  &__drag-handle {
    height: 50px;
  }
  &__resize-handle {
    height: 32px;
  }
  &__drag-handle,
  &__resize-handle {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    i {
      position: relative;
      z-index: -1;
      color: $wg-color-sys-g;
    }
  }
  &__drag-handle {
    cursor: grab;
    &:active {
      cursor: grabbing;
    }
  }
  &__resize-handle {
    width: 100%;
    cursor: n-resize;
    background-color: $wg-color-sys-k;
  }
  &__content {
    overflow: auto;
    height: calc(100% - 82px);
    &:first-child:last-child {
      height: 100%;
    }
  }
}
</style>
