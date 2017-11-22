'use strict';
/** default arguments **/
//demo1 : es5
console.info('\n---------- demo1 ----------');
function myConcat(x, y) {
    y = y || 'World';
    console.log(x, y);
}

myConcat('Hello');
myConcat('Hello', '');

//demo2 :es6
console.info('\n---------- demo2 ----------');
function log(x = 'Hello', y = "World") {
    console.log(x, y);
}
log('', '');
log(undefined,'NBA');

//demo3
console.info('\n---------- demo3 ----------');
function fun(x=2){
    //let x=2;  //Identifier 'x' has already been declared
    x=5;
    var x =4;
    console.log(x);
}
fun(3);

//demo4 destructuring & default
console.info('---------- demo4 ----------');
function bar({x,y=5}){
    console.log(x, y);
}

bar({});
bar({x:1});
bar({x:1,y:2});
//bar();//Cannot match against 'undefined' or 'null'

//demo5 default position
console.info('---------- demo5 ----------');
function f(x,y=5,z){
    console.log(x, y, z);
}
f();
f(1);
f(1,2);
//f(1, ,2);//Error
f(1,undefined,2);
f(1,null,2);

//demo6
console.info('\n---------- demo6 ----------')
function m1({x=0,y=0} = {}) {
    return [x,y]
}

function m2({x,y} = {x:0,y:0}) {
    return [x,y]
}

function m3(x = 5,y=6) {
    return [x,y]
}

console.log(m1('',''))
console.log(m2('',''))
console.log(m3(null,undefined))





