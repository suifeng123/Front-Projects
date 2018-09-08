<template>
<transition name="el-alert-fade">
<div  class="my-alert" :class="[typeClass, center ? 'is-center' : '']"  v-show="visible" role="alert">
   <!-- 进行一个icon的编写 -->
   <i class="my-alert__icon" :class="[ iconClass, isBigIcon]" v-if="showIcon"></i>
   <!--进行content的内容的编写 -->

   <div class="my-alert__content">
   <span  class="my-alert__title" v-if="title">{{title}}</span>
   <slot>
     <p class="my-alert-description" v-if="description">{{description}}</p>
   </slot>
   <!-- 用于是否关闭框的对话框的展示 -->
   <i class="my-alert__closebtn" :class="{ 'is-customed': closeText !== '','el-icon-close': closeText === ''}"
      v-show="closeable" @click="close()">{{closeText}}</i>
   </div>
</div>
</transition>
</template>
<script>
//进行一个alert的书写
const TYPE_CLASSES_MAP = {
	'success': 'el-icon-close',
	'warning': 'el-icon-warning',
	'error': 'el-icon-error'
};
export default {
	name: 'alert',
	props:{
		title:{
			type: String,
			default: '',
			required: true
		},
		description:{
			type: String,
			default: '',
		},
		type:{
			type: String,
			default:'info'
		},
		closeable:{
			type: Boolean,
			default: true
		},
		closeText:{
			type: String,
			default: ''
		},
		showIcon: Boolean,
		center: Boolean
	},
	data(){
		return {
			visible: true  //进行返回的固定的值,用于展示这个alert还用于展示与否
		}
	},
	methods:{
		close(){
            this.visible = false;
            this.$emit('close');//向父组件中传输这个事件
		}
	},
	//进行计算属性的编写
	computed: {
	    typeClass() {
	    	return `el-alert--${ this.type }`;
	    },
	    iconClass(){
	    	return TYPE_CLASSES_MAP[this.type] || 'el-icon-info';
	    },
	    isBigIcon(){
	    	return this.description || this.$slots.default ? 'is-big':"";
	    },
	    isBigTitle(){
	    	return this.description || this.$slots.default ? 'is-bold':'';
	    }
	}
}
</script>
<style scoped>
/* 进行必要的动画效果 **/
.el-alert-fade-enter,
.el-alert-fade-leave-to {
	opacity: 0;
}

.el-alert-fade-leave-active {
	transition: all .9s ease-in-out;
}
.my-alert {
	width: 100%;
	padding: 8px 36px;
	margin: 0;
	box-sizing: border-box; /* 所有的高度和宽度都由width包括内容的宽度+border + padding*/
	border-radius: 4px;
	position: relative;
	overflow: hidden;
	opacity: 1;
	display: flex;
	align-items: center; /*y轴 垂直居中 因为使用flex布局*/
	trnasition: opacity .2s;

}

.el-alert--success {
	background-color: #f0f9eb;
	color: #67c23a;
}
/**进行alert content 的内容的展示 --**/
.my-alert__icon{
	font-size: 16px;
	width: 16px;
}

[class*=" el-icon-"], [class^=el-icon-] {
    font-family: element-icons!important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.my-alert__content{
     display: table-cell;
     padding: 0 8px;
}
.my-alert__title {
    font-size: 13px;
    line-height: 18px;
}
.my-alert__closebtn{
	font-size: 12px;
	color: #c0c4cc;
	opacity: 1;
	position: absolute;
	top: 12px;
	right: 15px;
	cursor: pointer;
}
.my-alert .my-alert__description {
     font-size: 12px;
     margin: 5px 0 0;
}
</style>