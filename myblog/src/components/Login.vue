<template>
  <div class="login">
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button>取消</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>
<style scoped>
   .login {
     position: absolute;
     left: 25%;
     top: 25%;
     width: 50%;
     height:50%;
   }
</style>
<script>
  export default {
    data(){
    return {
      form:{
        username:'',
        password:''
      }
    }
  },
  methods:{
    onSubmit(){
      //登录成功后登录
      /*
      this.axios.post('/api/login',{
        "username": this.form.username,
        "password": this.form.password
      }).then((res) => {
        //在这里获得的服务器端的反应，这里你来决定是否登录
        this.$router.push('dashboard');
      }).catch((err) => {
         console.log("登录失败");
         console.log(err);

    })
    **/
    this.$router.push('dashboard');

    }
  }
  }
</script>
