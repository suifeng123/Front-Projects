var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var model = require('../models/model');
var Demo = model.Demo;

//此处用来连接数据库
mongoose.connect('mongodb://localhost/myusers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页' });
});

//这里写一个添加一个用户的操作
router.post('/adduser',function(req,res,next){
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



//添加数据库
module.exports = router;
