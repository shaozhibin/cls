<style scoped>
	.container{
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
	}
	.body {
		position: absolute;
		height: 100%;
		width: 100%;
		min-height: 500px;
		min-width: 960px;
		padding-left: 80px;
		background-color: #333;
	}

	.body-content {
		position: relative;
		height: 100%;
		width: 100%;
		overflow: hidden;
	}

	.headerArea {
		z-index: 9;
	    width: 80px;
	    position: fixed;
	    top: 0;
	    left: 0;
	    bottom: 0;
	    color: #ccc;
	    background-color: #282828;
	}

	.componentsArea {
		position: fixed;
		right: 0;
	    top: 0;
	    bottom: 0;
	    width: 120px;
	    border: 1px solid #222;
	    background-color: #444;
	    color: #ccc;
	    z-index: 100;
	}

	.componentsArea h3 {
		text-align: center;
    	line-height: 30px;
	}

	.preView {
		position: absolute;
		top: 0;
	    right: 0;
	    left: 0;
	    bottom: 0;
	    background-color: #383838;
	}
	.viewArea {
		position: absolute;
		top: 0;
	    right: 480px;
	    left: 0;
	    bottom: 0;
	    background-color: #383838;
	}

</style>
<template>
	<div class="container">
		<div class="headerArea">
			<header-area ref="headerArea"></header-area>
		</div>
		<div class="body">
			<div class="body-content">
				<div class="componentsArea">
					<h3>组件集合</h3>
					<components-list></components-list>
				</div>

				<div class="viewArea">
					<pre-view ref="viewarea" :componentsdata="componentsdata" :componentslist="componentslist"></pre-view>
				</div>

				<div class="settingsArea" v-if="router == 'pagesSetting' && componentslist.indexOf(focusid) != -1">
					<settings :settingsdata="componentsdata[focusid]" :configdata="componentsconfig[focusid]"></settings>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue'
	import headerArea from './headerArea.vue'
	import preView from './view.vue'
	import componentsList from './componentsList.vue'
	import settings from './settings/settings.vue'

	import glkTextNormal from './componentsList/text/normal/preview.vue'
	import glkTitleNormal from './componentsList/title/normal/preview.vue'


	window.BUS_BACK = new Vue()
	window.GLK_BACK = new Vue()

	export default {
		data() {
			return {
				router: 'pagesSetting',
				focusid: null,
				componentsconfig: {},
				componentsdata: {
					// "glk-text-normal_1522325650466234382": {
					// 	"styleObj": {
					// 	"color": "#666",
					// 	"font-size": "0.24rem",
					// 	"text-align": "left",
					// 	"white-space": "pre-wrap",
					// 	"background-color": "white",
					// 	"padding-top": "0.1rem",
					// 	"padding-right": "0.1rem",
					// 	"border": "0 none"
					// 	},
					// 	"data": {
					// 		"content": "我是文本"
					// 	},
					// 	"name": "glk-text-normal",
					// 	"id": "glk-text-normal_1522325650466234382"
					// },
					"glk-title-normal_1522326084314599785": {
						"styleObj": {
						"text-align": "center",
						"font-size": "0.4rem",
						"color": "#000000",
						"padding-top": "0.4rem",
						"padding-bottom": "0.1rem"
						},
						"data": {
							"content": "我是标题"
						},
						"type": "big",
						"name": "glk-title-normal",
						"id": "glk-title-normal_1522326084314599785"
					}
				},
				componentslist: [ "glk-text-normal_1522325650466234382", "glk-title-normal_1522326084314599785"],
			}
		},
		components: {
			headerArea,
			preView,
			componentsList,
			settings
		},
		methods: {
			setEvents() {
				var self = this

				window.BUS_BACK
					.$on('addComponent', function(config) {
						console.log("config:", config)
						console.log('viewarea:', self.$refs.viewarea)
						// self.$refs.viewarea.addComponent(config)
						window.GLK_PREVIEW.addComponent(config)
					})
					.$on('updateData', function(key, data, isParts) {
						var target = self.componentsdata[self.focusid]

						if(isParts){
							var _aa = isParts.split('.')
							for(var i = 0, l = _aa.length;i<l;i++){
								target = target[_aa[i]]
							}
						}

						Vue.set(target.data, key, data)

						var config = self.componentsdata[self.focusid]

						// self.$refs.viewarea.$refs.view.contentWindow.GLK_PREVIEW.updateComponent(config)
					})
			},
			addComponent1(config) {
				console.log(1)
			},
			setBackFn() {
				var self = this
				window.GLK_BACK.focusComponent = function(id) {
					self.focusid = null
					self.$nextTick(function() {
						self.focusid = id
						console.log("focusid:", self.focusid)
					})
				},
				window.GLK_BACK.ready = function() {
					var config = {
						data: self.componentsdata,
						list: self.componentslist,
						// settings: fml.vars.PAGES_SETTINGS
					}

					console.log('config111:', config);

					// mSelf.$refs.viewarea.$refs.view.contentWindow.GLK_PREVIEW.initData(config)
				}
			}
		},
		created() {
			this.setEvents()
			this.setBackFn()
		},
		mounted() {
			console.log('componentsdata1111:', this.componentsdata);
		}
	}
</script>
