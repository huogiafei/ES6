"use strict";

/** 没有块级作用域之前 **/
//demo1
console.info('---------- demo1 ----------');
var str = 'allen';
for (var i = 0; i < str.length; i++) {
    console.log(str[i]);
}
console.log(i)//污染全局变量

//demo2
console.info('---------- demo2 ----------');
var str2 = 'hello';
function f() {
    console.log(str2);
    var str2 = 'fu*k'; //different with `str2 = 'fu*k'`
}
f();

/** ES6使用后，可以大量减少IIFE **/
console.info('---------- demo3 ----------');
//demo3
(function () {
    let tmp = 23111;
    console.log(tmp)
})();
{
    let tmp = 12358;
    console.log(tmp)
}

//demo4
console.info('---------- demo4 ----------');
function fq() {
    console.log('I am outside!');
}
(function () {
    if (false) {
        // 重复声明一次函数f
        function fq() {
            console.log('I am inside!');
        }
    }
    fq();
    // chrome50: fq is not defined
    // Firefox:I am outside!
}());

//demo5
if (1) {
    let qwe = 'haha';

    function test() {
        return qwe;
    }
}
//console.log(qwe);//qwe not defined
//console.log(test());//same

//demo6
'use strict';
if (true) {
    function f() {
        console.log('demo6')
    }
}
f(); // ReferenceError: f is not defined

//demo5 父域和子域
console.info('\n---------- demo5 ----------')
for(var p=0;p<3;p++){
    var p = 'abc'
    console.log(p)
}
console.log(p)

for(let q=0;q<3;q++){
    let q = 'xyz'
    console.log(q)
}
//console.log(q)

