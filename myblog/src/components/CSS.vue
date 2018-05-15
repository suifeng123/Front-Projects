<template>
  <div style="position: absolute;
     left: 25%;
     top: 25%;
     width: 50%;
     height:50%;">
  <div class="wraper">
    <div class="float-1"></div>
    <div class="float-2"></div>
  </div>
  </div>
</template>

<script>
    export default {}
</script>

<style scoped>
  .wraper{
    width: 200px;
    border: 1px solid #ff6633;
    overflow: hidden;
  }
  /**
  .wraper:after{
    content: '';
    height: 0;
    display: block;
    clear: both;
  }
  **/
  .float-1{
    float: left;
    background:  blue;
    height: 100px;
    width: 100px;
  }
  .float-2{
    float: left;
    background:  #ff0;
    height: 50px;
    width: 100px;
  }
</style>
