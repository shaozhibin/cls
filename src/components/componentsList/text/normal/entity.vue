<style scoped>
.glk-text-normal{
	position: relative;
	overflow: hidden;
	word-wrap: break-word;
	word-break: break-all;
	white-space: pre-wrap;
	-webkit-hyphens: auto;
	-ms-hyphens: auto;
	hyphens: auto;
	background-color: #fff;
	width: 100%;
	max-width: 100%;
}
.text {
	margin: .2rem .3rem;
}
</style>

<template>
<div class="glk-text-normal">
	<div>text</div>
	<!-- <div class="text" v-html="componentdata.data.content"></div> -->
</div>
<!-- <div class="glk-text-normal markdown" :style="componentdata.styleObj">
	<div class="text" v-html="componentdata.data.content"></div>
</div> -->
</template>

<script>
import entity from '../../../../../static/js/componentEntity.js'

let vmConfig = {
	created() {
		console.log('componentdataVm', this.componentdata)
	}
}

export default entity(vmConfig)
</script>
