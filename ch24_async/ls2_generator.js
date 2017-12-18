'use strict';
// 协程
/*
function *asyncJob(){
    let f = yield readFile(fileA)
}*/

//1
function *gen(x) {
    let y = yield x+2;
    return y
}

let g = gen(1)
console.log(g.next())
console.log(g.next(2))

//2

let fetch = require('node-fetch')
function * gen2() {
    let url= 'https://api.github.com/users/github'
    let result = yield fetch(url)
    console.log(result)
}

let g2 = gen2();
let result = g2.next()
result.value.then(function (data) {
    console.log(data)
}).then(function (data) {
    g2.next(data)
})



