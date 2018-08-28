// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.prototype.axios = axios; //使用组件
Vue.use(ElementUI);

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
//从上面的写法可以看出   本身Vue应用为一个对象，其中传入的参数为
// el : 挂载点
// router: 路由信息
// components: 组件信息
//  template:  模板信息 
export default vm;
