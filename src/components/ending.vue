<style scoped>
	.core-ending {
	  	width: 100%;
	  	height: 1.2rem;
	  	background: url(https://static.lehe.com/higo/feseTT/m/refund/glk_end.jpg) no-repeat top left;
	  	background-size: 100%;
	  	cursor: not-allowed;
	  	overflow: hidden;
	}
</style>
<template>
  <div class="core-ending" v-show="show"></div>
</template>
<script>
	export default {
		data() {
			return {
			  show: true
			}
		},
		created() {

		}
	}
</script>
