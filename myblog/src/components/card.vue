<template>
<!-- 进行展示一个card -->
  <div class="my-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
      <div class="my-card__header" v-if="$slots.header || header">
          <slot name="header">{{header}}</slot>
      </div>
      <div class="my-card__body" :style="bodyStyle">
         <slot></slot>
      </div>
  </div>
</template>
<style scoped>
 .my-card {
 	border-radius: 4px;
 	border: 1px solid #ebeef5;
 	background-color: #ffff;
 	overflow: hidden;
 	color: #303133;
 	transition: .3s;
 }
 .my-card.is-always-shadow,.my-card.is-hover-shadow:focus,.el-card.is-hover-shadow:hover{
 	  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
 }

 .my-card__header {
    padding: 18px 20px;
    border-bottom: 1px solid #ebeef5;
    box-sizing: border-box;	
 }

 .my-card__body {
 	padding: 20px;
 }

</style>
<script>
  export default {
  	 props:{
  	 	header:{},
  	 	bodyStyle:{},
  	 	shadow:{
  	 		type: String
  	 	}
  	 }
  }
</script>