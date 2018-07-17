<template>
  <div class="hello">

     <!-- 一个展示fade显示  -->

  </div>
</template>

<script>
  import myComponent from './myComponent'
export default {
  name: 'HelloWorld',
  mounted: function(){
  },
  data() {
    return {
      data:'121212',
      message:"hello world",

    }
  },
  methods:{
      randomIndex(){
          return Math.floor(Math.random() * this.items.length)
      },
      add(){
          this.items.splice(this.randomIndex(),0,this.nextNum++)
      },
      remove(){
          this.items.splice(this.randomIndex(),1)
      },
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
  },
  components:{
    myComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .list-item{
    display: inline-block;
    margin-right: 10px;
  }

  .list-enter-active,.list-leave-active {
    transition: all 1s;
  }
  .list-enter,.list-leave-to{
    opacity: 0;
    transform: translateY(30);
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
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
