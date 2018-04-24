var component = {
  data() {
    return {}
  },
  props: ['topboxdata', 'parts', 'componentKey'],
  components: {},
  computed: {},
  methods: {
    updateComponent() {
      var _boxdata = JSON.parse(JSON.stringify(this.boxdata))

      window.BUS_BACK.$emit('updateData', this.componentKey, _boxdata, this.parts)
    }
  }
}

module.exports =  function(config) {
  var _component = $.extend(true, {}, component, config)
  _component.data = function() {
    return $.extend({}, { boxdata: this.topboxdata }, config.data)
  }

  return _component
}
