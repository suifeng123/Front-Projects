<template>
  <div id="app">
    <div v-show="$route.fullPath == '/login'">
      <Login></Login>
    </div>
    <div v-show="$route.fullPath != '/login'">
      <LeftContainer></LeftContainer>
    </div>
    <div v-show="$route.fullPath != '/login'" style="margin-top:-960px;left:200px;position:relative;">

       <router-view/>
    </div>
  </div>
</template>

<script>
  import Login from '@/components/Login';
  import LeftContainer from '@/components/LeftContainer';
export default {
  name: 'App',
  components:{
      LeftContainer,
     Login,
  },
  mounted(){
    //在这里判断是否还存储在cookie 如果不存在的话 弹出框 提示用户cookie过期
    console.log()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;

}
  body{
    margin:0px;
  }
</style>
