'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.foo = exports.random = exports.year = exports.stuName = undefined;
exports.multiply = multiply;

var _fs = require('fs');

//export
var stuName = 'Tom'; //Node CommonJS
//let {stat,exitsts,readFile} = require('fs')

//es6 module

var year = 1992;

exports.stuName = stuName;
exports.year = year;
'use strict';
function multiply(a, b) {
    return a * b;
}
exports.random = getRandomInt;


function getRandomInt(range) {
    var r = Number.parseInt(range);
    return Number.parseInt(Math.random() * r);
}

var foo = exports.foo = 'abc';
setTimeout(function () {
    return exports.foo = foo = 'xyz';
}, 5);

//error
/*
function foo() {
    export default 'bar' // SyntaxError
}
foo()*/

//# sourceMappingURL=ls1_basic-compile.js.map