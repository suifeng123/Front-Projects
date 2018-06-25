/**
 * Created by Administrator on 2018/6/25.
 */
  //首先定义一个混入对象
var myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}

export default myMixin;
