<template>
 <div class="main">
   <el-button type="primary" @click="$router.push({name:'Prototype'})">原型</el-button>
   <router-view></router-view>
 </div>
</template>

<script>
  //这里显示javascript 显示的考点的显示
  export default {
    data(){
       return {

       }
    },
  mounted(){

  }
  }
</script>

<style scoped>
  .main {
    position: absolute;
    left: 25%;

    width: 50%;
    height:50%;
  }

</style>
