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

      <span>{{message.split('').reverse().join('')}}</span>

      <div class="myslie" v-bind:class="{active: isActive}"></div>
      <!-- 进行部分的显示操作 -->
      <template v-if="loginType=='username'">
        <label>Username</label>
        <input placeholder="Enter the name" key="username-input">

      </template>
      <template v-else>
        <label>Email</label>
        <input placeholder="Enter the Email" key="email-input">
      </template>

      <ul id="v-for-object" class="demo">
        <li v-for="value in object">
          {{value}}
        </li>
      </ul>

      <!-- 进行button 事件的显示 -->
      <button v-on:click="greet">点击</button>


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
      message:"hello world",
      form:{
        id:"",
        content:"",
        title:"",

      },
      object:{
        firstName:'Wsw',
        lastName:'wang',
        age:29
      },
      isActive: true,
      loginType:'username'
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
      },
    greet(event){
      console.log("进行事件的显示");
      console.log(event);
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

  .active{

  }
</style>
