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

//进行路由的守卫函数

router.beforeEach((to,from,next) => {
   next();
})

router.beforeResovle((to,from,next) => {
    next();

})


/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

export default vm;
