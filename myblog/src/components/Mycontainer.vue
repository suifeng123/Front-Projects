<template>
<!-- 进行书写一个容器 -->
<section class="my-container" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
</section>
</template>

<style scoped>
  .my-container {
  	display: flex; /** 采用flex布局 */
  	flex-direction: row;
  	flex: 1;
  	flex-basis: auto;
  	box-sizing: border-box;
  	min-width: 0;
  }


  /**进行设置必要的参数  ****/
  .my-container.is-vertical{
  	  flex-direction: column;
  }
  </style>

<script>
export default {
	name: 'ElContainer',
	componentName: 'ElContainer',

	props:{
		direction: String,
	},

	computed: {
		isVertical(){
			if(this.direction === 'vertical'){
				return true;
			}else if(this.direction === 'horizontal'){
				return false;
			}
            //进行必要的计算slot布局
			return this.$slots && this.$slots.default ?
			   this.$slots.default.some(vnode => {
			   	   const tag = vnode.componentOptions && vnode.componentOptions.tag;
			   	   return tag === 'el-header' || tag === 'el-footer';
			   })
			   : false
		}
	},

	mounted(){
		//进行挂载后进行的操作
	}
}
</script>