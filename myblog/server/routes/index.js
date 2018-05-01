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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页' });
});

//这里写一个添加一个用户的操作
router.post('/api/adduser',function(req,res,next){
    console.log("进行跨域的操作");
    console.log(req.body);
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
    })
});

//进行必要的上传的路由信息
router.post('/api/upload',upload.any(),function(req,res,next){
     console.log("进行上传的操作");
     console.log(req.files);// 打印上传文件的信息
})



//添加数据库
module.exports = router;
