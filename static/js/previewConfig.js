
module.exports =  function(config) {
  var component = {
    props: ['topcomponentdata', 'topcomponentconfig', 'componentslist', 'index', 'view', 'area', 'isactive'],
    components: {},
    data: function() {
      return {
        componentconfig: {},
        componentdata: {}
      }
    },
    methods: {
      remTopx: function(data) {
        var _data = $.extend(true, {}, data)
        for (var key in _data) {
          var value = _data[key]

          if ((/^(-?[\d\.]+)rem$/ig).test(value)) {
            _data[key] = parseInt(value.replace('rem', '') * 100)
          }
        }
        return _data
      },
      pxTorem: function(data) {
        var _data = {}
        for (var key in data) {
          var value = data[key]

          if (value !== '') {
            if ((/^-?\d+$/ig).test(value))
              value = value / 100 + 'rem'

            _data[key] = value
          }
        }
        return _data
      },
      checkConfig: function(data, defs) {
        if (!data)
          return;

      },
      initConfig: function(config) {
        var componentdata = $.extend(true, {}, config, this.topcomponentdata)

        // this.initStyle(componentdata, config)
        componentdata.styleObj = this.pxTorem(this.componentconfig.style)

        if (config.parts) {
          for (var i in config.parts) {

            if (config.parts[i] !== '') {
              componentdata.parts[i].styleObj = this.pxTorem(this.componentconfig.parts[i].style)
            } else {
              delete componentdata.parts[i]
            }

            delete componentdata.parts[i].style
          }
        } else {
          delete componentdata.parts
        }

        delete componentdata.style

        Vue.set(this, 'componentdata', componentdata)
        window.BUS_PREVIEW.$emit('updateComponent', componentdata)
      },
      getData: function() {
        var data = JSON.parse(JSON.stringify(this.componentdata))
        return data
      },
      preConfig: function(config) {
        var _config = {}
        _config.id = this.topcomponentdata.id

        _config.style = $.extend(true, {}, config.style, this.remTopx(this.topcomponentdata.styleObj))


        if (config.parts) {
          _config['parts'] = $.extend(true, {}, config.parts)
          for (var i in this.topcomponentdata.parts) {
            if (this.topcomponentdata.parts[i]) {
              _config.parts[i].style = $.extend(true, {}, config.parts[i].style, this.remTopx(this.topcomponentdata.parts[i].styleObj))
            } else {
              delete componentdata.parts[i]
            }
          }
        }

        window.top.GLK_BACK.addComponentConfig(this.topcomponentdata.id, _config)

        window.BUS_PREVIEW.$emit('preComponentsConfig', this.topcomponentdata.id, _config)
        this.componentconfig = _config
      }
    },
    watch: {},
    created: function() {
      var self = this

      self.preConfig(config)
      self.initConfig(config)

      self.created && self.created()

      window.BUS_PREVIEW.$on('init', function(id) {
        if (id != self.componentdata.id)
          return;

        self.initConfig(config)
        self.$nextTick(function() {
          self.init && self.init(config)
        })
      })

      window.BUS_PREVIEW.$on('allready', function() {
        self.allready && self.allready()
      })
    },
    mounted: function() {
      this.$nextTick(function() {
        this.ready && this.ready()
      })
    }
  }

  return $.extend(true, {}, component)
}
