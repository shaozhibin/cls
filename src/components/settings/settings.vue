<style scoped>
.settingsWrap {
	color: #ccc;
	overflow: hidden;
}
.settingsTools {
	padding:4px;
	position: absolute;
	top: 20;
	left: 20;
}
.blueBtn {
	display: inline-block;
    color: white;
    padding: 2px 4px;
    cursor: pointer;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    margin-left: 2px;
    margin-right: 2px;
    white-space: nowrap;
    background-color: #2299ff;
}
.settingsBox {
	overflow: auto;
	position: fixed;
    top: 0;
    right: 120px;
    width: 360px;
    bottom: 0;
    padding-bottom: 40px;
    background: #333;
	box-sizing:border-box;
	padding: 8px 4px;
}
.setting-area {
	border: solid 1px #222;
	border-radius: 2px;
	padding: 4px;
	margin-bottom: 8px;
}
.setting-area-name {
	background: #555;
	padding: 0 4px;
}
</style>
<template>
	<div class="settingsWrap">
		<div class="settingsTools">
			<div class="blueBtn" v-on:click="copyComponent">复制组件</div>
			<div class="blueBtn" v-on:click="deleteComponent">删除组件</div>
			<div class="blueBtn" v-on:click="upComponent">上移组件</div>
			<div class="blueBtn" v-on:click="upComponent">下移组件</div>
		</div>

		<div class="settingsBox">
			<div class="setting-area">
				<div class="setting-area-name">数据</div>
				<div class="setting-area-area"></div>
			</div>
			<div class="setting-area">
				<div class="setting-area-name">全局</div>
				<settings-area-data v-if="settingsdata.data" :areadata="settingsdata.data"></settings-area-data>

				<!-- <settings-area-style v-if="configdata.style" :areadata="configdata.style"></settings-area-style> -->
			</div>
			<div class="setting-area">
				<div class="setting-area-name">局部</div>
			</div>
		</div>
	</div>
</template>
<script>
	import settingsAreaStyle from './style.vue'
	import settingsAreaData from './data.vue'
	export default {
		data() {
			return {

			}
		},
		props:['settingsdata', 'configdata'],
		components: {
			settingsAreaStyle,
			settingsAreaData
		},
		methods: {
			copyComponent() {
				alert('复制组件')
			},
			deleteComponent() {
				alert('删除组件')
			},
			upComponent() {
				alert('上移组件')
			},
			upComponent() {
				alert('下移组件')
			}
		},
		mounted() {
			
			console.log('settingsdata:', this.settingsdata)
		}
	}
</script>
