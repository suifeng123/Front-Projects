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
