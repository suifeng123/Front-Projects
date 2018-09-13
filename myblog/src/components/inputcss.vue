<template>
<!-- 写一个组件用于展示input组件的css的作用-->
<div class="input">
    <input type="text" autocomplete="off" placeholder="请输入内容" class="input-inner">
</div>
</template>
<style scoped>
.input {
	position: relative;
	font-size: 14px;
	display: inline-block;
	width: 100%;
}
.input-inner:focus{
	outline: none;
	border-color: #409eff;
}
.input-inner {
	-webkit-appearance:none;
	background-color: #fff;
	background-image: none;
	border-radius: 4px;
	border: 1px solid #dcdfe6;
	box-sizing: border-box;
	color: #606266;
	font-size: inherit;
	height: 40px;
	outline:none;
	padding: 0 15px;
	transition: border-color .2s cubic-bezier(.645,.045,.355,1);
	width: 100%;
}
</style>