<template>
  <div class="login">
    <h1>上传操作要继续研究</h1>
    <form method="post" enctype="multipart/form-data" action="/api/upload">
      <input type="file" name="thumbnail" />
      <input type="submit" />
    </form>
  </div>
</template>
<style scoped>
  .login {
    position: absolute;
    left: 25%;
    top:25%;
    width: 50%;
    height: 50%;
  }
</style>
<script>
  export default  {
    data(){
    return {

    }
  },
  methods:{
    submitForm(){
    }
  }
  }
</script>
