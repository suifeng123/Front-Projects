<template>
  <div class="login">
    <h1>上传操作要继续研究</h1>
   <el-form :model="ruleForm" ref="ruleForm" label-width="100px">
      <el-form-item label="上传文件" prop="filename">
        <el-upload class="upload-demo"
                   action="http://localhost:4000/api/upload"
                   ref="upload"
                   :on-success="onSuccess"
                   :on-error="onError"
                   :on-change="onChange"
                   :file-list="filelist">
          <el-button size="small" type="primary">选择文件</el-button>
        </el-upload>
      <el-button type="success" @click="submitForm('ruleForm')">开始上传</el-button>
      </el-form-item>
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
      filelist:[],
       ruleForm:{
         filename:''
       }

    }
  },
  methods:{
    submitForm(ruleForm){
       //进行提交announce
      this.axios.post('/api/upload',{
         "file": this.ruleForm.filename
      }).then((res) => {
         console.log("222");

      })
    },
    onSuccess(e,file,filelist){

    },
    onError(e,file,fileist){

    },
    onChange(file,filelist){
      console.log(file);
      this.ruleForm.filename = file;

    }
   }
  }
</script>
