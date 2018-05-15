import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FileUpload from '@/components/FileUpload'
import Login from '@/components/Login'
import CSS from '@/components/CSS'
Vue.use(Router)

export default new Router({
  routes: [
    {
       path: '/',
       redirect:'/login'
    },
    {
      path: '/dashboard',
      name: 'HelloWorld',
      component: HelloWorld
    },{
    	path:'/fileUpload',
    	name: 'FileUpload',
    	component: FileUpload
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
        path:'/css',
        name: 'CSS',
        component: CSS
    },
    {
      path: '/upload',
      redirect: '/fileUpload'
    }
  ]
})
