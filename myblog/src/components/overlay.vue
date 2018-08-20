<template>
 <transition name="mu-overlay-fade">
     <div class="mu-overlay" v-if="show" @click="handleClick" @touchmove="prevent" :style="overlayStyle">
     	<slot name="header">fg</slot>
     </div>
 </transition>
</template>
<script>
export default {
	name:'mu-overlay',
	props:{
	   show:{
		  type:Boolean,
		  default: false
		},
		fixed:{
			type: Boolean,
			default: false
		},
		onClick:{
			type: Function
		},
		opacity:{
            type:Number,
            default: 0.4
		},
		color:{
			type: String,
			default: '#000'
		},
		zIndex:{
			type:Number
		}
	},
	computed:{
		overlayStyle(){
			return {
				'opacity': this.opacity,
				'background-color': this.color,
				'position': this.fixed ? 'fixed':'',
				 'z-index': this.zIndex
			}
		}
	},
	methods:{
		prevent(event){
			event.preventDefault(); //通知web浏览器不要执行与事件关联的默认动作
			/*
			该方法将停止事件的传播，阻止它被分配到其他Document节点。
			 */
			event.stopPropagation();
		},
	    handleClick(){
	    	if(this.onClick){
	    		this.onClick()
	    	}
	    }
	}
}
</script>
<style>
 .mu-overlay{
 	position: absolute;
 	left: 0;
 	right: 0;
 	top: 0;
 	bottom: 0;
 	background-color: #000;
 	opacity: 0.4;
 	z-index: 1000;
 }

 .mu-overlay-fade-enter-active,.mu-overlay-fade-leave-active{
 	  transition: opacity .45s cubic-bezier(0.23,1,0.32,1);
 }

 .mu-overlay-fade-enter,
 .mu-overlay-fade-leave-active {
 	opacity: 0 !important;
 }
</style>