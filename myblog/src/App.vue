<template>
  <div id="app">

    <div v-show="$router.fullPath != '/login'">
      <LeftContainer></LeftContainer>
       <router-view/>
    </div>
  </div>
</template>

<script>
  import login from '@/components/Login';
  import LeftContainer from '@/components/LeftContainer';
export default {
  name: 'App',
  components:{
      LeftContainer
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
