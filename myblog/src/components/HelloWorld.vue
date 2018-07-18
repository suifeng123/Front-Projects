<template>
  <div class="hello">

     <!-- 使用css展示一个六扇形状 -->
    <div class="triangle"></div>

  </div>
</template>

<script>
  import myComponent from './myComponent'
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

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{

  }
  .triangle{
    width: 0;
    height: 0;
    border-width: 40px 40px 40px 40px;
    border-style: solid;
    border-color: #ff0000 transparent transparent transparent;
  }
</style>
