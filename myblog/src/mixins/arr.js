/**
 * Created by Administrator on 2018/7/10.
 */
function  Shape(){
  this.x = 0;
  this.y = 0;
}

Shape.prototype.move = function(){
  this.x += x;
  this.y += y;
  console.log('shape move');
}

function Rectangle(){
  Shape.call(this);
}

Rectangle.protoype = Object.create(Shape.prototype);
Rectangle.protoype.move = function(x,y){
  console.log('监听父类的move方法');
  Shape.prototype.move.call(this,x,y);
}

const rect = new Rectangle();
react.move(20,10);

function OBArray(){
  const arr = Array.apply(null,arguments);
  arr.__proto__ = OBArray.prototype;
  arr.constructor = OBArray;
  return arr;
}

OBArray.prototype = Object.create(Array.prototype);
OBArray.prototype.push = function(){
  const len = Array.prototype.push.apply(this,arguments);
  console.log('push:'+arguments[0]+'新的数组的长度为：'+len);
  return len;
}
OBArray.prototype.pop = function(){
  const temp = Array.prototype.pop.call(this);
  console.log('pop:'+temp);
  return temp;
}

OBArray.prototype.splice = function(){
    console.log('采用splice方法:');
    return Array.prototype.splice.apply(this,arguments);
}

const arr = new OBArray(1,2,3,4,5);

/*
模拟实现Set
 */
(function(gloabal){
    function Set(data){
      this._values = [];
      this.size = 0;

      data && data.forEach(function(item){
        this.add(item);

      },this)
    }

    Set.prototype['add'] = function(value){
        if(this._values.indexOf(value) == -1){
          this._values.push(value);
          ++this.size;
        }
       return this;
    }

    Set.prototype['has'] = function(value){
        return (this._values.indexOf(value) !== -1);
    }

    Set.prototype['delete'] = function(value){
        var idx = this._values.indexOf(value);
      if(idx == -1) return false;
      this._values.splice(idx,1);
      --this.size;
      return true;
    }
})(this);

function clone(origin){
  return Object.assign({},origin);
}

function clone2(origin){
  let originProto = Object.getPrototypeOf(origin); //获取这个实例对象的原型
  return Object.assign(Object.create(originProto),origin);//基于这个原型创建一个对象，并把原始的对象
}

//进行合并多个对象的方法......

const merge = (target,...sources) => Object.assign(target,...sources);

//合并多个对象
const merge = (...sources) => Object.assign({},...sources);

//为属性指定默认值
const DEFAULTS = {
  logLevel: 0,
  outputFormat: 'html'
};

function processContent(options){
  let options = Object.assign({},)
}


Object.defineProperty(Object.prototype,'__proto__',{
	get(){
		let _thisObj = Object(this);
		return Object.getPrototypeOf(_thisObj);
	},
	set(proto){
		if(this === undefined || this === null){
			throw new TypeError();
		}
		if(!isObject(this)){
			return undefined;
		}
		if(!isObject(proto)){
			return undefined;
		}
		let status = Reflect.setPrototypeOf(this,proto);
		if(!status){
			throw new TypeError();
		}
	}
});

function isObject(value){
	return Object(value) === value;
}

var obj = new Proxy({},{
	get: fucntion(target,key,receiver){
		console.log(`getting ${key}`);
		return Reflect.get(target,key,receiver);
	},
	set: function(target,key,value,receiver){
		console.log(`setting ${key}`);
		return ""
	}
})
