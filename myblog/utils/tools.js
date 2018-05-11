/**
 * Created by Administrator on 2018/5/11.
 */

  function arrayRemove(arr,type,val){
     /*
       这里arr 是传输过来的数组，
       type  表示是数组中某个元素对应的key
       val   是数组中某个元素 岁对应 的key 所对应的value值
      */
     //首先进行类型检测
     console.log(val);
    console.log(type);
    if(Object.prototype.toString.call(arr) !== '[object Array]'){
          return -1;
    }
    if(Object.prototype.toString.call(type) !== '[object String]'){
         return -1;
    }
     console.log("传输过来的数组");
     console.log(arr);
     var index = [];
     for(var i = 0 ; i < arr.length; i++){
       console.log(arr[i]);
       console.log(arr[i][type]);
       if(arr[i][type] == val){
           index.push(i);
       }
     }
     console.log(index);
     //进行对数组进行精简
     for(var i = 0 ; i < index.length ; i++){
           arr.splice(index[i],1);  //此处是改变的是数组对象 本身
     }
     console.log("打印经过的修改的数组");
     console.log(arr);
  }

var arr = [{
  "name":"wang",
  "age": 16
},{
    "name":"sheng",
    "age": 17
},{
    "name":"wen",
    "age": 18

}];

arrayRemove(arr,"name","wang");
console.log("打印最终获得数组");
console.log(arr);
