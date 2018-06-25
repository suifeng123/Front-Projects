<template>
  <div class="hello">
    <el-form ref="form" :model="form">
       <el-form-item label="id号">
            <el-input v-model="form.id"></el-input>
       </el-form-item>
       <el-form-item  label="头衔">
            <el-input v-model="form.title"></el-input>
       </el-form-item>
       <el-form-item label="内容">
            <el-input type="textarea" rows="5" cols="5" v-model="form.content"></el-input>
       </el-form-item>
       <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
       </el-form-item>

    </el-form>
  </div>
</template>

<script>
  import myMixin from '@/mixins/time'
export default {
  name: 'HelloWorld',
  mixins: [myMixin],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      form:{
        id:"",
        content:"",
        title:""
      }
    }
  },
  methods:{
      onSubmit(){
        console.log('进行提交');
        this.axios.post('/api/adduser',{
          "uid": this.form.id,
          "content": this.form.content,
          "title": this.form.title
        }).then((res) => {
          console.log("前端进行返回的数据");
          console.log(res);

        }).catch((err) =>{
           console.log(err);

       })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  position: absolute;
  left:25%;

  width: 400px;
  height: 400px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
