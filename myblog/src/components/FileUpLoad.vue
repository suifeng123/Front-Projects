<template>
  <div class="login">
    <h1>上传操作要继续研究</h1>
    <el-form :model="form" ref="form" label-width="180px">
      <el-form-item label="上传文件" prop="filename">
     <el-upload class="upload-demo" ref="upload"
                action="/upload"
                :on-sucess="handleSuccess"
                :on-change="handleChange"
                :on-remove="handleRemove"
                :file-list="fileList">
         <el-button size="small" type="primary">点击上传文件</el-button>
     </el-upload>
      </el-form-item>
      <el-button @click="submitForm">开始上传</el-button>
    </el-form>
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
      fileList:[],
      form:{
        filename:''
      }
    }
  },
  methods:{
    handleRemove(file,fileList){
      // console.log(file,fileList);

    },
    handleSuccess(file){

      this.form.filename = file;
    },
    handleChange(file,fileList){
      console.log("上传文件时的");
      console.log(file,fileList);
      this.form.filename = file;
    },
    submitForm(){

    }
  }
  }
</script>
