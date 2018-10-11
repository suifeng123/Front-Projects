<template>
  <div class="hello">

     <!-- 使用css展示一个六扇形状 -->
     <div style="width: 50%;">
       <myCard>
        <div slot="header">
            <span>卡片名称</span>
        </div>
        <div v-for="o in 4" :key="o">
            {{'列表内容' + o}}
        </div>
        </myCard>
      </div>
  </div>
</template>

<script>
import myCard from './card' //引入子组件

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
       handleClick(e){

       	console.log('从子组件中传输过来的事件');
       	console.log(e);
       }
  },
  components:{
      myCard
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
