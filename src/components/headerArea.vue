<style scoped>
	.headerArea {
		color: #ccc;
	}
	.logo {
		padding: 20px 0;
	    font-size: 28px;
	    line-height: 40px;
	    text-align: center;
	    cursor: pointer;
	    color: #666;
	}
	.avatar {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background-color: #f66;
		margin: auto;
	}
	.userArea {
		font-size: 12px;
		text-align: center;
		width: 100%;
		overflow: hidden;
		cursor: pointer;
	}
	.name {
		margin-top: 5px;
		margin-bottom: 10px;
	}
	.settings {
		margin-left: auto;
	    margin-right: auto;
	    width: 60%;
	    margin-top: 20px;
	    overflow: hidden;
	}
	.setting-btn {
		border-radius: 6px;
	    font-size: 14px;
	    margin-top: 10px;
	    padding: 8px;
	    cursor: pointer;
	}
	.tools	{
	    margin-left: auto;
	    margin-right: auto;
	    width: 60%;
	    margin-top: 20px;
	    overflow: hidden
	}
	.tools .saveBtn {
		color: white;
    	background-color: #2299ff;
    	border: 1px solid #2299ff;
    	border-radius: 6px;
	    font-size: 14px;
	    margin-top: 10px;
	    padding: 8px;
	    cursor: pointer
	}
	.others {
		position: absolute;
    	bottom: 40px;
   	 	left: 0;
    	right: 0;
    	text-align: center;
	}
	.others a {
	    display: block;
    	margin-top: 10px;
    	color: #ccc;
	}
</style>
<template>
	<div class="headerArea">
		<div class="logo">CLS</div>
		<div class="userArea">
			<div class="avatar"></div>
			<p class="name">欢迎,邵智斌</p>
			<p>切换用户</p>
		</div>
		<div class="settings">
			<div class="setting-btn">高级设置</div>
			<div class="setting-btn">页面设置</div>
		</div>
		<div class="tools">
			<div class="tools-btn saveBtn">预览</div>
		</div>

		<div class="others">
			<a class="" href="https://www.baidu.com" target="_blank">答疑解惑</a>
			<a href="https://www.baidu.com" target="_blank">需求列表</a>
			<a class="" href="https://www.baidu.com" target="_blank">页面数据</a>
			<a class="" href="https://www.baidu.com" target="_blank">单宝细化</a>
		</div>
	</div>
</template>
<script>

</script>
