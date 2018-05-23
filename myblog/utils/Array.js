/**
 * Created by Administrator on 2018/5/23.
 */
//对数组进行去重操作
const arr = [];
//生成[0,100000] 之间的随机数
for(let i = 0 ;  i < 100000 ; i++){
  arr.push(0 + Math.floor(100000 - 0 + 1) * Math.random());
}

//实现算法
Array.prototype.unique = function(){
  const newArray = [];
  let isRepeat;
  for(let i = 0 ; i < this.length ; i++){
    isRepeat = false;
    for(let j = 0 ; j < newArray.length ; j++){
      if(this[i] == newArray[j]){
        isRepeat = true;
        break;
      }
    }
    if(!isRepeat){
      newArray.push(this[i]);
    }
  }
  return newArray;
}

var newArr = [1,1,1,3,3,3,555,3,4,4,4];
console.log(newArr.unique());
