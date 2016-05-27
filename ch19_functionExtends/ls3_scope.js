'use strict';
/** function scope **/
//demo1
console.info('---------- demo1 ----------');
var x = 10;
function f(x, y = x) {
    console.log(`y: ${y} , x + y: ${x + y}`);
}
f(20);
f();

console.info('---------- demo2 ----------');
let a = 2;
function bar(b = a) {
    a = 10;
    console.log(b, a);
}
bar();