<style scoped>
.viewBox {
  left: 50%;
  top: 50%;
  overflow: auto;
  position: absolute;
  background-color: #fff;
}

.viewInfo {
  bottom: 5px;
  text-align: center;
  width: 100%;
  position: absolute;
  color: #ccc;
}

.view {
  border: 0 none;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
}

</style>
<template>
  <div>
    <div class="viewBox" :style="viewstyle">
      <preview-main :componentsdata="componentsdata" :componentslist="componentslist"></preview-main>
    </div>
    <div class="viewInfo">编辑视图模式，真实效果请点击左侧“预览”按钮，手机扫码预览</div>
  </div>
</template>
<script>
import previewMain from './previewMain.vue'
export default {
  data() {
    return {
      printdata: {
        width: 0,
        height: 0
      }
    }
  },
  props: ['componentsdata', 'componentslist'],
  components: {
  	previewMain
  },
  computed: {
    viewstyle() {
      var printdata = this.printdata
      return {
        "width": printdata.width / 2 + 'px',
        "height": printdata.height / 2 + 'px',
        "margin-left": printdata.width / 2 * 1 / -2 + 'px',
        "margin-top": printdata.height / 2 * 1 / -2 + 'px'
      }
    }
  },
  methods: {
    resizePrint(printdata) {
      for (var i in printdata) {
        this.printdata[i] = printdata[i] || 0
      }
    }
  },
  created() {
    this.resizePrint({
      width: 750,
      height: ($(window).height() - 100) * 2
    })
  }
}

</script>
