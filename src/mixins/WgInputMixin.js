export const WgInputMixin = {
  props: {
    cols: {
      type: Number,
      default: 12
    },
    label: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text',
    },
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {
      model: this.value || ''
    }
  },
  methods: {
    onChange: function (value) {
      this.$emit('change', this.model)
    }
  },
  watch: {
    value: function (newVal, oldVal) {
      this.model = newVal
    }
  }
}
