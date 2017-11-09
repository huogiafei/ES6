'use strict';
let {toString: s} = 234
let {toString: b} = true
console.log(s, b)
console.log(s === Number.prototype.toString,
    b === Boolean.prototype.toString)

/*
Cannot destructure property `prop` of 'undefined' or 'null'.
let {prop : x} = undefined;
let {prop: y} = null;
*/

