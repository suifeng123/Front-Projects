<template>
 <div class="leftDiv">
   <el-menu
     default-active="2"
     class="el-menu-vertical-demo"
     @open="handleOpen"
     @close="handleClose">
     <el-submenu index="1">
       <template slot="title">
         <i class="el-icon-location"></i>
         <span>Express</span>
       </template>
       <el-menu-item-group>
         <el-menu-item index="1-1" @click="$router.push('fileUpload')">文件上传</el-menu-item>
         <el-menu-item index="1-2">中间件</el-menu-item>
       </el-menu-item-group>

     </el-submenu>
     <el-menu-item index="2">
       <i class="el-icon-menu"></i>
       <span slot="title">导航二</span>
     </el-menu-item>
     <el-menu-item index="3">
       <i class="el-icon-document"></i>
       <span slot="title">导航三</span>
     </el-menu-item>
     <el-menu-item index="4">
       <i class="el-icon-setting"></i>
       <span slot="title">导航四</span>
     </el-menu-item>
   </el-menu>
 </div>
</template>

<script>
    export default {
      methods:{
        handleOpen(key, keyPath) {
         console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
      }
    }
</script>

<style scoped>
 .leftDiv {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 20%;
    height: 100%;
    border-right: 2px solid #d9d9d9;
 }
</style>
