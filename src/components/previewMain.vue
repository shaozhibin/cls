<style scoped>
	.previewArea {
		background-color: #f1f1ed;
		height: 100%;
		width: 100%;
	}
	.glk-component {
		position: relative;
	}
	.focus{
		border: 4px solid #2299ff;
	}

</style>
<template>
	<div class="previewArea">
		<div ref="componentsarea" class="componentsArea" :style="{ 'padding-top' :view.top + 'px', 'padding-bottom': view.bottom + 'px' }">
			<component
				v-if="componentsdata[id]"
				ref="component"
				v-for="(id, index) in componentslist"
				:is="componentsdata[id].name"
				:class="['glk-component', id, (id == focusid && 'focus'), (state =='select' && 'select')]"
				:component_id="id"
				:topcomponentdata="componentsdata[id]"
				:topcomponentconfig="componentsconfig[id]"
				:componentslist="componentslist"
				:area="area"
				:view="view"
				:index="index"
				:key="id"
				v-on:click.native="clickComponent(id)"
			>
			</component>

		<ending ref="ending"></ending>

	</div>

	</div>
</template>
<script>
	import Vue from 'vue'
	/**
	 * preview 组件集合
	 * created by szbhome@163.com 2018.3
	 */
	import ending from './ending.vue'
	import glkTextNormal from './componentsList/text/normal/entity.vue'
	import glkTitleNormal from './componentsList/title/normal/entity.vue'

	const components = {
		ending,
		glkTextNormal,
		glkTitleNormal
	}

	window.GLK_PREVIEW = new Vue()

	export default {
		data() {
			return {
				componentsconfig: {},
				view: {
					top: 0,
					bottom : 0
				},
				area: {
					top: 0,
					bottom: 0
				},
				focusid: null,
				state: 'focus'
			}
		},
		props: ['componentsdata', 'componentslist'],
		components: components,
		methods: {
			changeState(state) {
				this.state = state
			},
			clickComponent(id) {
				console.log("id:", id)
				console.log("state:", this.state)
				switch(this.state){
					case 'select' :
						this.selectComponent(id)
						break;

					case 'focus' :
						this.focusComponent(id)
						break;

					default :
						break;
				}
			},
			selectComponent(id) {
				window.top.GLK_BACK.selectComponent(id)
				this.changeState('focus')
			},
			focusComponent(id) {
				var self = this
				this.focusid = id
				window.GLK_BACK.focusComponent(id)

			},
			addComponent(config) {
				var index = this.componentslist.indexOf(this.focusid)

				config = JSON.parse(JSON.stringify(config))

				config.id = config.name + '_'
					+ (new Date()).valueOf()
					+ Math.floor(Math.random()*10000)
					+ Math.floor(Math.random()*100)
					+ ''

				Vue.set(this.componentsdata, config.id, config)
				if(index !== -1){
					this.componentslist.splice(index+1, 0, config.id)
					console.log("componentslist1:", this.componentslist)
				} else {
					this.componentslist.push(config.id)
					console.log("componentslist2:", this.componentslist)
				}

				this.$nextTick(function(){
					this.focusComponent(config.id)
					// this.updateListToBack()

					var index = this.componentslist.indexOf(this.focusid)
					// this.$refs.component[index].$el.scrollIntoView()
				})
			}
		},
		created() {
			var self = this
			console.log('componentsdatacomponentsdata:', this.componentsdata)
			window.GLK_PREVIEW.addComponent = function(config) {
				self.addComponent(config)
			}
		},
		mounted() {
		}
	}
</script>
