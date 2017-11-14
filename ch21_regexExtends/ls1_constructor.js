'use strict';
//es5
var regex = new RegExp('ab','i');
var regex2 = /ab/i;
var regex3 = new RegExp(/ab/i)

console.log("abcd".match(regex))
console.log("absence".match(regex))

//es6
let regex4 = new RegExp(/ab/,'ig')
console.log('abcdab'.match(regex4))
console.log(regex4.flags)


