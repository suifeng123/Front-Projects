<template>
  <div class="hello">

     <!-- 使用css展示一个六扇形状 -->
    
    <el-button @click="open()">打开</el-button>
    <message></message>
  </div>
</template>

<script>

import  * as THREE from 'three' //
import alert from './alert'
import message from './message'
export default {
  name: 'HelloWorld',
  mounted: function(){
  },
  data() {
    return {
      data:'121212',
      message:"hello world",
      show: true
    }
  },
  methods:{
       handleClick(){
       	console.log("this is a click");
       },
       open(){

       }
  },
  components:{
      alert,
      message
  },
   mounted(){

   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   canvas{
   	width: 100%;
   	height: 100%;
   }
  .hello{

  }
  .aa{
    width: 0px;
    
    border:20px solid red;
    border-right-color: green;
    border-bottom-color: blue;
    border-left-color: black;
  }

  .border-style{
    width: 0;
    border:20px solid transparent;
    border-top-color: blue;
  }
  .border{

    width: 0;
    height:0;
    border-top: 20px solid blue;
    border-left: 20px solid red;
    border-right:20px solid green;
    border-bottom: none;
  }
</style>
