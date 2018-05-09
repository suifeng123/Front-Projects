var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var model = require('../models/users');
var Demo = model.Demo;

//进行文件上传时需要加载的插件
var multer = require('multer');
var upload = multer({dest:'upload_tmp/'});

//此处用来连接数据库
mongoose.connect('mongodb://localhost/users');

//这里是检查登录的
function  checkLogin(req,res){

}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页' });
});

//验证登录的时候
router.post('/api/login',function(req,res,next){
  res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码为utf-8
 //对前端返回数据
  var data = {
     status: '0',
     meg: 'login',
     data:{
       output:'用户登录成功'
     }
  };
  //打印一下req中的session
  console.log(req.session.cookie);
  //用户灯亮度成功后返回给前端必要的数据
  res.end(JSON.stringify(data));

})
//这里写一个添加一个用户的操作
router.post('/api/adduser',function(req,res,next){
    //首先创造一个对象用来针对这个mongodb的数据库
    var demo = new Demo({
    	uid: req.body.uid,
    	title: req.body.title,
    	content: req.body.content
    });

    console.log("========create users =========");
    demo.save(function(err,doc){
    	if(err){
    		//如果创建失败的话进行的操作
    		console.log("用户创建失败");
    	}
    	//创建成功的话不进行任何操作
    	console.log('用户创建成功');
      //创建用户成功后向前端发送一个

    })

  res.setHeader('Set-Cookie', 'name=binbinfang;path=/;max-age=1000;');
  console.log("设置cookie成功");
    res.send()
});

//进行必要的上传的路由信息
router.post('/api/upload',upload.any(),function(req,res,next){
     console.log("进行上传的操作");
     console.log(req.body.file);// 打印上传文件的信息


})



//添加数据库
module.exports = router;
