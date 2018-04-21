//这里是创建models中的model
var mongoose = require('mongoose'); //将插件引入
var Schema = mongoose.Schema;

var demoSchema = new Schema({
	  uid: String,
	  title: String,
	  content: String,
	  createTime: {
	  	type: Date,
	  	default: Date.now
	  }
});

exports.Demo = mongoose.model('demo',demoSchema,'demo');