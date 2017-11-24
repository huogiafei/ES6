'use strict';
//global._foo = 123
global.foo = 123
var a = require('./mod.js');
console.log(a.foo)