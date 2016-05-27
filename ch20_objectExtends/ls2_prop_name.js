'use strict';
/** props name **/
//sample1
var b = 'nt';
let obj = {};
obj.foo = true;
obj[1 + 2 + 'a' + b] = 123;
for (let p in obj) {
    console.log(p);
}

//sample2
let foo = {
    ['b'+'a'+'r']() {
        return 'hello world.';
    }
}
console.log(foo.bar());

//sample3
var a= 1;
var aObj = {a};
var tmp = 'c';
var c = 2;
//var bObj = {[tmp]} //SyntaxError
