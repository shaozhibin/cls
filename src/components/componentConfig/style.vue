<style scoped>
.style-box {}

.style-settings {
  overflow: hidden;
}

.style-settings-area {
	overflow: hidden;
	padding: 4px 0px;
}
.style-settings-area:nth-last-child(1) {
	border: 0 none;
}
.style-settings-name {
	margin-top: 2px;
	float: left;
	width: 40px;
}
.style-settings-box {
	margin-left: 40px;
	overflow: hidden;
}

.input-item input[type="text"]{
	width: 70px;
}
.input-item input[type="number"]{
	width: 50px;
	text-align: center;
}

</style>
<template>
  <div class="style-settings">
    <div class="style-settings-area">
      <div class="style-settings-name">文字</div>
      <div class="style-settings-box">
        <div class="input-item" v-for="(itemdata , itemname) in text" v-if="boxdata[itemname] != undefined">
          <label :for="'area|style|'+ itemname">{{ itemdata.label }}:</label>
          <select v-if="itemdata.type == 'select'" v-model="boxdata[itemname]" v-on:change="changeComponent(itemname, $event)">
            <option v-for="option in itemdata.options" :value="option">{{ option }}</option>
          </select>
          <input v-else :type=" itemdata.type || 'text' " :id="'area|style|'+itemname" placeholder="" :value="boxdata[itemname]" v-on:change="changeComponent(itemname, $event)" /> {{ itemdata.unit||'' }}
        </div>
      </div>
    </div>
    <div class="style-settings-area">
      <div class="style-settings-name">背景</div>
      <div class="style-settings-box">
        <div class="input-item" v-for="(itemdata , itemname) in background" v-if="boxdata[itemname] != undefined">
          <label :for="'area|style|' + itemname">{{ itemdata.label }}:</label>
          <input :type=" itemdata.type || 'text' " :id="'area|style|'+itemname" placeholder="" :value="boxdata[itemname]" v-on:change="changeComponent(itemname, $event)" /> {{ itemdata.unit||'' }}
        </div>
      </div>
    </div>
    <div class="style-settings-area">
      <div class="style-settings-name">布局</div>
      <div class="style-settings-box">
        <div class="input-item" v-for="(itemdata , itemname) in layout" v-if="boxdata[itemname] != undefined">
          <label :for="'area|style|' + itemname">{{ itemdata.label }}:</label>
          <input :type=" itemdata.type || 'text' " :id="'area|style|'+itemname" placeholder="" :value="boxdata[itemname]" v-on:change="changeComponent(itemname, $event)" /> {{ itemdata.unit || '' }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      layout: {
        'padding-top': { label: '上留白', type: 'number', unit: 'px' },
        'padding-bottom': { label: '下留白', type: 'number', unit: 'px' },
        'padding-left': { label: '左留白', type: 'number', unit: 'px' },
        'padding-right': { label: '右留白', type: 'number', unit: 'px' },
        'margin-top': { label: '上边距', type: 'number', unit: 'px' },
        'margin-bottom': { label: '下边距', type: 'number', unit: 'px' },
        'margin-left': { label: '左边距', type: 'number', unit: 'px' },
        'margin-right': { label: '右边距', type: 'number', unit: 'px' },
        'height': { label: '高', type: 'number', unit: 'px' },
        'width': { label: '宽', type: 'number', unit: 'px' },
        'border': { label: '边框' },
        'border-bottom': { label: '下边框' }

      },
      text: {
        'color': { label: '颜色' },
        'font-size': { label: '字号', type: 'number', unit: 'px' },
        'line-height': { label: '行高', type: 'number', unit: 'px' },
        'text-align': { label: '对齐', type: 'select', options: ['left', 'center', 'right', 'justify'] },
        'white-space': { label: '换行方式', type: 'select', options: ['normal', 'pre-wrap', 'pre', 'nowrap', 'pre-line', 'inherit'] }
      },
      background: {
        'background-color': { label: '颜色' }
      }
    }
  },
  props: ['boxdata', 'parts'],
  methods: {
    changeComponent: function(key, e) {
      _boxdata = JSON.parse(JSON.stringify(this.boxdata))
      _boxdata[key] = $(e.target).val()

      window.BUS_BACK.$emit('updateConfig', 'style', _boxdata, this.parts)
    }
  }
}

</script>
