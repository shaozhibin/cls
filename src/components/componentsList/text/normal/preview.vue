<style scoped></style>
<template>
  <div>
    <div v-if="!componentdata.data.content">未添加内容</div>
    <entity v-else :componentdata="componentdata" :index="index"></entity>
  </div>
</template>
<script>
var config = {
  style: {
    'color': '#666',
    'font-size': '24',
    'text-align': 'left',
    'white-space': 'pre-wrap',
    'line-height': '',
    'background-color': 'white',
    'padding-top': '',
    'padding-bottom': '',
    'padding-left': '',
    'padding-right': '',
    'margin-top': '',
    'margin-bottom': '',
    'margin-left': '',
    'margin-right': '',
    'border': '0 none'
  },
  styleObj: {},
  data: {
    content: ''
  }
}

// var preview = require('core/gls/preview')(config)
// preview.components.entity = require('core/gls/text/normal/entity.vue')
import preview from '../../../../../static/js/previewConfig.js'
import entity from './entity.vue'

preview.components.entity = entity
export default preview(config)

</script>
