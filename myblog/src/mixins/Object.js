/**
 * Created by Administrator on 2018/7/17.
 */
/**
 *  进行一些object 的方法的书写
 **/
if(!object.create){
  Object.create = function(o){
    function F(){}  //定义了一个隐式的构造函数
    F.prototype = o;//这样设置的话 那么通过F函数创造出来的实例的原型就是o
    return F();
  }
}
