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

//写一版快速排序的写法
function quickSort(arr){
  if(arr.length <= 1){
    return arr;
  }

  var pivotIndex = Math.floor(arr.length / 2);

  var pivot = arr.splice(pivotIndex,1)[0];

  var left = [];

  var right = [];

  for(var i = 0 ; i < arr.length ; i++){
    if(arr[i] < pivot){
      left.push(arr[i]);
    }else{
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([pivot],quickSort(right));
}

var arr = [1,4,3,2,5];
console.log("在排序之前的数组为");
console.log(arr);
console.log("在排序之后的数组为");
console.log(quickSort(arr));
