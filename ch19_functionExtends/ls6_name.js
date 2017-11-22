'use strict';
/** function name **/
//demo1
console.info('---------- demo1 ----------');
function foobar(){};
console.log(foobar.name);

var fun1 = function(){};
console.log(fun1.name);

var fun2 = function bar(){};
console.log(fun2.name);

const fun3 = function () {}
console.log(fun3.name)

//demo2
console.info('---------- demo2 ----------');
console.log((new Function).name);

function test(){};
console.log(test.bind({}).name) // "bound foo"

console.log((function(){}).bind({}).name) // "bound "