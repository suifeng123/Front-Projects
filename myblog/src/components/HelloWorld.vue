<template>
  <div class="hello">

     <myfenye></myfenye>
  </div>
</template>

<script>
import myCard from './card'          //引入子组件
import myfenye from './myfenye'
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
      
  },
  components:{
      myfenye
    },
   mounted(){
     
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   
  .hello{
    width: 500px;
    height: 500px;  
  }
</style>
