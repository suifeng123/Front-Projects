<template>
  <div class="hello">

     <!-- 使用css展示一个六扇形状 -->
    <div class="aa">
    </div>
    <div style="height:10px;"></div>
    <div class="border-style"></div>
    <div style="height: 10px"></div>
    <div class="border"></div>
    <div style="height: 10px"></div>
   

    <!-- 下面编写一个ul的对话框的数据 -->
    <digui></digui>
  </div>
</template>

<script>
  import myComponent from './myComponent'
  import digui from './digui'
export default {
  name: 'HelloWorld',
  mounted: function(){
  },
  data() {
    return {
      data:'121212',
      message:"hello world",
    }
  },
  methods:{

  },
  components:{
      digui
  },
   mounted(){
      
      

   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
