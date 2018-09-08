<template>
 <section class="mycontainer" :class="{ 'is-vertical' : isVertical}">
     <slot></slot>
 </section>
</template>
<script>
export default {
	name:'MyContainer',

	componentName:'MyContainer',

	props:{
		direction: String
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
			    	return tag === 'header' || tag === 'footer'
			    })
			    : false;
		}
	}
}
</script>
<style scoped>
.mycontainer {
	display: flex;
	flex-direction: row;
	flex: 1;
	box-sizing: border-box;
	min-width: 0;
}

.mycontainer.is-vertical {
	flex-direction: column;
}

</style>