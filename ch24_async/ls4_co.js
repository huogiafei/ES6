'use strict';
let co = require('co'),
    fs = require('fs'),
    path = require('path'),
    readFile = require('fs-readfile-promise')

let gen = function *() {
    let f1 = yield readFile(__dirname + '/a.txt')
    let f2 = yield readFile(__dirname + '/a_copy.txt')
    console.log(f1.toString())
    console.log(f2.toString())
}
/*
let g = gen()
g.next().value.then(function (data) {
    console.log(data)
})*/

//co处理方法
co(gen)

console.info('\n---------- demo2 ----------')
co(function *() {
    let values = [
        __dirname + '/a.txt',
        __dirname + '/a_copy.txt'
    ]
    yield values.map(somethingAsync)
})

function* somethingAsync(x){
    readFile(x).then(res=> console.log(res.toString()))
}



