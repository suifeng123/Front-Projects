<template>
  <div>
    <el-button>{{name}}</el-button>
  </div>

</template>

<script>
  //进行展示vue的组件显示
   export default {
     props:{
        name:{
          default:'',
          type: String
        }
     }
   }
</script>

<style>

</style>
