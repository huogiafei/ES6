"use strict";

var a = 1;
console.log(window.a);
window.a = 2;
console.log(a);

let b = 3;
console.log(b);
console.log(window.b);

{
    let c = '123';
    //var c = '123';
}