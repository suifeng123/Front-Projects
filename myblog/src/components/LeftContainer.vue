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
         <el-menu-item index="1-3" @click="$router.push('css')">css属性</el-menu-item>
       </el-menu-item-group>

     </el-submenu>
     <el-submenu index="2">
       <template slot="title">
       <i class="el-icon-menu"></i>
        <span slot="title">前端工程师技能</span>
         </template>
         <el-menu-item-group>
           <el-menu-item index="2-1">HTML&&H5</el-menu-item>
           <el-menu-item index="2-2">CSS&CSS3</el-menu-item>

           <el-menu-item index="2-3" @click="$router.push('javascript')">JavaScript&&ES6/7/8</el-menu-item>
           <el-menu-item index="2-4">前端框架篇(Vue)</el-menu-item>
           <el-menu-item index="2-5">后端篇(Node)</el-menu-item>
           <el-menu-item index="2-6">WEB安全篇</el-menu-item>
         </el-menu-item-group>
     </el-submenu>
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
    width: 200px;
    height: 960px;
    border-right: 2px solid #d9d9d9;
 }
</style>
