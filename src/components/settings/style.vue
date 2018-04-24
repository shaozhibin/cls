<style></style>

<template>
	<div class="input-area">
		<div class="input-area-name">样式</div>
		<div class="input-area-area">
			<settings-style :boxdata="areadata" :parts="parts"></settings-style>
		</div>
	</div>
</template>


<script>
import settingsStyle from '../componentConfig/style.vue'
export default {
	components: {
		settingsStyle
	},
	props: [ 'areadata', 'parts' ],
	data() {
		return {
			translate : {
				'template' : '模板',
				'type' : '类型'
			}
		}
	}
}
</script>

