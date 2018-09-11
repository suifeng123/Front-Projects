<template>
<!--  进行一个slider的css实现 -->
<div class="slider__runway">
   <div class="slider__bar" style="width: 18%;left: 0;">
   	 <div class="slider__button-wrapper" style="left:18%;">
   	   <!-- 进行里面的圆球的编写 -->
   	    <div class="slider__button tooltip">
   	    </div>
   	 </div>
   </div>
</div>
</template>
<style scoped>
.tooltip{
	display: inline-block;
	vertical-align:middle;
}
.slider__button{
	width: 16px;
	height: 16px;
	border:2px solid #409eff;
	background-color: #fff;
	border-radius: 50%;
	transition:.9s;
	user-select:none;
}
.slider__runway{
	 width: 100%;
	 height: 6px;
	 margin: 16px 0;
	 background-color: #e4e7ed;
	 border-radius: 3px;
	 position: relative;
	 cursor: pointer;
	 vertical-align:middle;
}
.slider__bar{
	height: 6px;
	background-color:#409eff;
	border-top-left-radius: 3px;
	border-bottom-left-radius: 3px;
	position: absolute;
}
.slider__button-wrapper {
	height: 36px;
	width: 36px;
	z-index:1001;
	position: absolute;
	top: -15px;
	transform: translateX(-50%);
	background-color: transparent;
	text-align: center;
	user-select:none;
	line-height: normal;
}
div {
	display: block;
}
</style>