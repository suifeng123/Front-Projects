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

  /**进行设置header的头部的css样式 ***/
  .my-header{
  	 text-align: center; /** 设置成头部中央的  **/
  }

  .my-header{
  	background-color: #b3c0d1;
  	color: #333;
  	line-height: 60px;
  }

  .my-header {
  	box-sizing: border-box;
  	flex-shrink: 0;
  }

  .my-header{
  	  padding: 0 20px;
  }

  /**进行设置main的css样式  ***/
  .my-main {
  	background-color: #e9eef3;
  	color: #333;
  	text-align: center;
  	line-height: 160px;
  }

  .my-main{
  	box-sizing: border-box; /** 进行设置必要的  ***/
    display: block;
    flex: 1;
    flex-basis: auto;
    padding: 20px;
  }

  .my-main{
  	overflow: auto;
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
			   	   return tag === 'my-header' || tag === 'my-footer';
			   })
			   : false
		}
	},

	mounted(){
		//进行挂载后进行的操作
	}
}
</script>