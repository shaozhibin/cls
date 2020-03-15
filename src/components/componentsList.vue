<style scoped>
.components-list {
	position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 30px;
    padding: 8px;
    padding-bottom: 40px;
    overflow: auto;
}
.components-name {
  padding: 0 4px;
}

.components-area {
	text-align: center;
	line-height: 20px;
}
.components-area-name {
	padding: 4px;
}
.components-area-box {
	padding: 4px;
	margin-bottom: 8px;
	background-color: #555;
}

.components-box {
	text-align: center;
}

.components-box-box {
	cursor: pointer;
	background-color: #fff;
	padding: 4px;
	margin-top: 4px;
	border: 2px solid #555;
}
.components-box-box:hover {
	border: 2px solid #f66;
}


</style>
<template>
  <div class="components-list">
    <div class="components-area" v-for="classdata in listdata.list">
      <div class="components-area-name">{{ classdata.intro }}</div>
      <div class="components-area-box" v-for="orderdata in classdata.list">
        <div class="components-box-name">{{ listdata.data[orderdata].intro }}</div>
        <div class="components-box-box" v-for="familydata in listdata.data[orderdata].list" v-on:click="addComponent(orderdata, familydata)" :style="{ 'background-color': familydata.color }">
          <p>{{ familydata.intro }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  	data() {
    	return {
      		listdata: {
      			list: {
				    'glk-mix': { intro: '组件混合', list: ['glk-mix-hotmapgoods', 'glk-goods-mix', 'glk-mix-combination'] },
				    'glk-ending': { intro: '结束推荐', list: ['glk-ending-brand', 'glk-ending-shop'] },
				    'glk-title': { intro: '标题', list: ['glk-title-normal', 'glk-title-more', 'glk-title-center'] },
				    'glk-text': { intro: '文本', list: ['glk-text-normal'] },
				    'glk-image': { intro: '图片', list: ['glk-image-normal', 'glk-hotmap-normal', 'glk-image-banner'] },
				    'glk-goods': { intro: '单品', list: ['glk-goods-normal', 'glk-goods-list'] },
				    'glk-waterfall': { intro: '瀑布', list: ['glk-waterfall-normal'] },
				    'glk-shop': { intro: '店铺', list: ['glk-shop-group', 'glk-shop-normal'] },
				    'glk-coupons': { intro: '优惠券', list: ['glk-coupons-normal', 'glk-coupons-group'] },
				    'glk-bar': { intro: '导航', list: ['glk-bar-anchor', 'glk-bar-switch', 'glk-bar-fixed'] },
				    'glk-timedown': { intro: '倒计时', list: ['glk-timedown-normal', 'glk-timedown-calendar'] },
				    'glk-newin': { intro: 'NEWIN', list: ['glk-newin-normal'] },
				    'glk-video': { intro: '视频', list: ['glk-video-normal'] },
				    'glk-audio': { intro: '音乐', list: ['glk-audio-normal'] },
				    'glk-topic': { intro: '专题', list: ['glk-topic-card', 'glk-topic-hot'] },
				    'glk-comment': { intro: '评论', list: ['glk-comment-normal'] }
				},
				data: {
				    'glk-mix-hotmapgoods': {
				        intro: '',
				        type: [],
				        list: [
				            { intro: '服饰搭配', color: 'rebeccapurple' }
				        ]
				    },
				    'glk-title-normal': {
				        intro: '',
				        type: ['big', 'small'],
				        list: [
				            { intro: '普通标题' }
				        ]
				    },
				    'glk-title-more': {
				        intro: '',
				        type: [],
				        template: [],
				        list: [
				            { intro: '标题+更多' }
				        ]
				    },
				    'glk-title-center': {
				        intro: '',
				        type: [],
				        template: [],
				        list: [
				            { intro: '标题+装饰' }
				        ]
				    },
				    'glk-text-normal': {
				        intro: '',
				        type: [],
				        template: [],
				        list: [
				            { intro: '普通文本' }
				        ]
				    },
				    'glk-image-normal': {
				        intro: '',
				        type: ['1row', '3row'],
				        template: [],
				        list: [
				            { intro: '普通图片', type: '1row' }
				            // , { intro: '两列' , type: '2row' }
				            , { intro: '三列', type: '3row' }
				            // , { intro: '四列' , type: '4row' }
				        ]
				    },
				    'glk-image-banner': {
				        intro: '',
				        type: [],
				        template: [],
				        list: [
				            { intro: '轮播' }
				        ]
				    },
				    'glk-goods-list': {
				        intro: '列表单品',
				        type: ['left', 'right', 'both'],
				        template: ['goods-top', 'goods-story-v3', 'goods-story-v2', 'goods-common'],
				        list: [
				            { intro: '故事模式V3', template: 'goods-story-v3' }, { intro: '故事模式V2', template: 'goods-story-v2' }
				            , { intro: '榜单模式', template: 'goods-top' }, { intro: '普通模式', template: 'goods-common' }
				        ]
				    },
				    'glk-goods-normal': {
				        intro: '普通单品',
				        type: ['1row', '1row-small', '2row'],
				        template: ['goods-normal'],
				        list: [
				            { intro: '单列', type: '1row' }, { intro: '单列-小图', type: '1row-small' }, { intro: '两列', type: '2row' }, { intro: '三列', type: '3row' }
				            , { intro: '水平滚动', type: 'horizontal' }
				        ]
				    },
				    'glk-goods-mix': {
				        intro: '单品组合',
				        type: [],
				        template: [],
				        list: [
				            { intro: '标题+more', color: 'rebeccapurple' }
				        ]
				    },
				    'glk-mix-combination': {
				        intro: '',
				        type: ['1row', '2row', '3row'],
				        template: [],
				        list: [
				            { intro: '图片+单品', type: '2row', color: 'rebeccapurple' }
				        ]
				    },
				    'glk-waterfall-normal': {
				        intro: '',
				        type: ['2row'],
				        template: ['normal-goods'],
				        list: [
				            { intro: '普通瀑布', type: '2row' }
				        ]
				    },
				    'glk-shop-normal': {
				        intro: '普通店铺',
				        type: ['3goods', '2goods1coupon'],
				        template: [],
				        list: [
				            { intro: '三列单品', type: '3goods' }, { intro: '两列单品+一优惠券', type: '2goods1coupon' }
				        ]
				    },
				    'glk-shop-group': {
				        intro: '群圈',
				        type: [],
				        template: ['shop-group', 'shop-banner', 'shop-coupon'],
				        list: [
				            { intro: '大图', template: 'shop-banner' }, { intro: '群圈', template: 'shop-group' }, { intro: '店铺+优惠券', template: 'shop-coupon' }
				        ]
				    },
				    'glk-bar-anchor': {
				        intro: '',
				        type: ['1row', '2row', '3row', '4row', '5row', '6row', '7row', '8row'],
				        template: [],
				        list: [
				            { intro: '锚点型' }
				        ]
				    },
				    'glk-bar-switch': {
				        intro: '',
				        type: ['1row', '2row', '3row', '4row', '5row', '6row', '7row', '8row'],
				        template: [],
				        list: [
				            { intro: '切换型' }
				        ]
				    },
				    'glk-bar-fixed': {
				        intro: '',
				        type: ['top'],
				        template: [],
				        list: [
				            { intro: '顶部固定型', type: 'top' }
				        ]
				    },
				    'glk-coupons-normal': {
				        intro: '优惠券',
				        type: ['1row', '2row', '3row', '4row'],
				        template: [],
				        list: [
				            { intro: '单列', type: '1row' }, { intro: '两列', type: '2row' }, { intro: '三列', type: '3row' }, { intro: '四列', type: '4row' }
				        ]
				    },
				    'glk-coupons-group': {
				        intro: '',
				        type: [],
				        template: [],
				        list: [
				            { intro: '店铺优惠券' }
				        ]
				    },
				    'glk-timedown-normal': {
				        intro: '',
				        type: [],
				        template: [],
				        list: [
				            { intro: '普通倒计时' }
				        ]
				    },
				    'glk-timedown-calendar': {
				        intro: '',
				        type: [],
				        template: [],
				        list: [
				            { intro: '日历倒计时' }
				        ]
				    },
				    'glk-newin-normal': {
				        intro: '',
				        type: [],
				        template: [],
				        list: [
				            { intro: 'NEWIN' }
				        ]
				    },
				    'glk-video-normal': {
				        intro: '',
				        type: [],
				        template: [],
				        list: [
				            { intro: '第三方视频' }
				        ]
				    },
				    'glk-audio-normal': {
				        intro: '',
				        type: [],
				        template: [],
				        list: [
				            { intro: '第三方音乐' }
				        ]
				    },
				    'glk-hotmap-normal': {
				        intro: '',
				        type: [],
				        template: [],
				        list: [
				            { intro: '普通热区图', color: 'steelblue' }
				        ]
				    },
				    'glk-topic-card': {
				        intro: '',
				        type: [],
				        template: [],
				        list: [
				            { intro: '卡片', color: 'rebeccapurple' }
				        ]
				    },
				    'glk-topic-hot': {
				        intro: '',
				        type: [],
				        template: [],
				        list: [
				            { intro: '相关热点', color: 'rebeccapurple' }
				        ]
				    },
				    'glk-ending-brand': {
				        intro: '',
				        type: [],
				        template: [],
				        list: [
				            { intro: '推荐品牌', color: 'brown' }
				        ]
				    },
				    'glk-ending-shop': {
				        intro: '',
				        type: [],
				        template: [],
				        list: [
				            { intro: '推荐店铺', color: 'brown' }
				        ]
				    },
				    'glk-comment-normal': {
				        intro: '',
				        type: [],
				        template: [],
				        list: [
				            { intro: '留言板', color: 'brown' }
				        ]
				    }
				}
      		}
    	}
  	},
  	methods: {
  		addComponent(orderdata, familydata) {
			  console.log('orderdata:', orderdata)
			  console.log('familydata:', familydata);
			BUS_BACK.$emit('addComponent', {
				name: orderdata,
				template: familydata.template,
				type: familydata.type
			})
		}
  	}
}

</script>
