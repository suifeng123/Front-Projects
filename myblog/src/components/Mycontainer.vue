<template>
<!-- 进行书写一个容器 -->
<section class="my-container" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
</section>
</template>

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