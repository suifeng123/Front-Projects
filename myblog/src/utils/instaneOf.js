//instanceof 运算符用于测试构造函数的prototype属性是否出现在对象的原型中的任何位置

function Car(make ,model,year){
   this.make = make;
   this.model = model;
   this.year = year;
}

var auto = new Car('Hoda','Accord',1998);


console.log(auto instanceof Car);
//expected output: true

console.log(auto instanceof Object);
//expected output: true

