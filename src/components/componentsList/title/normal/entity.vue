<style scoped>
.glk-title-normal {
	background: #fff;
	position: relative;;
	overflow: hidden;
	font-weight: bold;
	padding: .4rem .3rem .3rem;
	text-align: center;
	line-height: .4rem;
	color: #333;
	font-size: .4rem;
	word-wrap: break-word;
	word-break: break-all;
	white-space: pre-wrap;
}
.title-small {
	font-size: .26rem;
	font-weight: normal;
	padding: .2rem .3rem;
}
</style>

<template>
	<div class="glk-title-normal">
		<div class="title">
			<p>{{topcomponentdata.data.content}}</p>
		</div>
	</div>
</template>

<script>
// var entity = require('core/gls/entity')

// return entity()

export default {
	props: ['topcomponentdata', 'component_id'],
	mounted() {
		console.log('topcomponentdatatopcomponentdata:', this.topcomponentdata);
		console.log('component_id:', this.component_id);
	}
}
</script>
