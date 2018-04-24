<template>
  <div id="app">
    <div v-show="$route.fullPath == '/login'">
      <Login></Login>
    </div>
    <div v-show="$route.fullPath != '/login'">
      <LeftContainer></LeftContainer>
    </div>
    <div v-show="$route.fullPath != '/login'">

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
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
