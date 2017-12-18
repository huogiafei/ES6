'use strict';
//传值调用和传名调用
{
    let t = (m) => m * 2;
    let x = 1
    //1.   t(x+5)  =>   t(6)  => 6*2
    //2.   t(x+5)  =>  (x+5)*2
}

let fs = require('fs'),
    path = require('path'),
    readFile = require('fs-readfile-promise');

let thunkify = require('thunkify')


//Thunk函数
//正常版本：fs.readFile(fileName,callback)
//Thunk 版本
const fileName = __dirname + '/a.txt'
const fileName2 = __dirname + '/a_copy.txt'
let callback = (err, data) => console.log(data)

let Thunk = (filename) =>
    (callback) => fs.readFile(filename, callback)
let readFileThunk = Thunk(fileName)
readFileThunk(callback)

//es5 Thunk
let Thunk_es5 = function (fn) {
    return function () {
        var args = Array.prototype.slice.call(arguments);
        return function (callback) {
            args.push(callback);
            return fn.apply(this, args)
        }
    }
}

//es6 Thunk
let Thunk_es6 = function (fn) {
    return function (...args) {
        return function (callback) {
            return fun.call(this, ...args, callback)
        }
    }
}

/*var readFileThunk = Thunk(fs.readFile);
readFileThunk(fileA)(callback);*/

//thunkify
let read = thunkify(fs.readFile);
read(fileName)(function (err, str) {
    console.log(`echo: ${str}`)
})

//Thunk函数的自动流程
function run(fn) {
    var gen = fn();

    function next(err, data) {
        let result = gen.next(data);
        if (result.done) return;
        result.value(next)
    }

    next();
}

function *g() {
    var f1 = yield readFile(fileName);
    var f2 = yield readFile(fileName2);
}

run(g)



