<style scoped></style>
<template>
  <div class="input-area">
    <div class="input-area-name">数据</div>
    <div class="input-area-area">
      <div v-for="(boxdata, boxname) in areadata">
        <component :is="'settings' + boxname" :component-key="boxname" :parts="parts" :topboxdata="boxdata"></component>
      </div>
    </div>
  </div>
</template>
<script>
import settingscontent from '../componentConfig/content.vue'
export default {
  components: {
    settingscontent
  },
  props: ['areadata', 'parts'],
  created() {
  	console.log('areadata:', this.areadata)
  }
}

</script>
