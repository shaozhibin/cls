<style scoped>
	.content-settings{
		overflow: hidden;
	}
	.input-item {
		width: 100%;
	}
	textarea {
		width: 100%;
	}
</style>


<template>
	<div class="content-settings">
		<div class="input-item">
			<textarea rows="10" v-on:change="updateComponent" v-model="boxdata"></textarea>
		</div>
	</div>
</template>


<script>

	import entity from '../../../static/js/entity.js'

	let vmConfig = {
		created() {
			this.boxdata = this.topboxdata.replace(/<br\/>/g, '\n')
		}
	}

	export default entity(vmConfig)
</script>

