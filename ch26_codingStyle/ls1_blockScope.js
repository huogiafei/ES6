'use strict';
console.info('\n---------- let 取代 var ----------')
if(true){
    console.log(x)
    //console.log(y) //y is not defined
    var x = "hello"
    let y = "world"
}
//console.log(x,y) // y is not defined

for(var i = 0 ;i < 5 ;i++){
    setTimeout(function () {
        console.log(i)
    },1)
}

for(let i = 0 ;i < 5 ;i++){
    setTimeout(function () {
        console.log(i)
    },1)
}

console.info('\n---------- 全局常量和线程安全 ----------')
//bad
var a = 1;
var b = 2;

//good
const PI =Math.PI

//best
const [FOO,BAR] = ['a','x']



