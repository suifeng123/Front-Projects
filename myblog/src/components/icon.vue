<template>
<!-- 进行icon组件的编写 -->
<i :class="icon-"+name></i>
</template>
<script>
//进行必要的修改
export default {
	props:{
		name: String
	}
}
</script>