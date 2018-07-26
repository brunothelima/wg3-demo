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
    i18n: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      model: this.value || ''
    }
  },
  methods: {
    t: function (str) {
      if (this.i18n && this.i18n.te(str)) {
        return this.i18n.t(str)
      }
      return str
    },
    onChange: function () {
      this.$emit('change', this.model)
    },
  },
  watch: {
    value: function (newVal) {
      this.model = newVal
    }
  }
}
