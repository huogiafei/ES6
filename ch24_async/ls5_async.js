'use strict';
let fs = require('fs')

console.info('\n---------- demo1 ----------')
let readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (err, data) {
            if (err) reject(err)
            resolve(data);
        })
    })
}

//normal
let gen = function* () {
    let f1 = yield readFile(__dirname + '/a.txt')
    let f2 = yield readFile(__dirname + '/a_copy.txt')
    console.log(f1.toString())
    console.log(f2.toString())
}

//async
let asyncRead = async function () {
    let f1 = await readFile(__dirname + '/a.txt')
    let f2 = await readFile(__dirname + '/a_copy.txt')
    console.log(f1.toString())
    console.log(f2.toString())
}

console.info('\n---------- demo2 ----------')
/** async 与 Generator 对比 **/
// 1.自带执行器
let result = asyncRead()
// 2.更好语义
// 3.适用性，yield后面跟Thunk或者Promise对象，而await除了Promise,还可以跟原始类值
// 4.直接返回Promise

async function fun1() {
    let str = await 'Merry '
    console.log(str)
    return "X'max"
}

let f1 = fun1()
f1.then(r => console.log(r))

async function fun2() {
    throw new Error('some problem')
}

fun2().then(
    val => console.log(val),
    err => console.log(err)
)

console.info('\n---------- demo3 ----------')

//await后面的promise变成reject,整个async中断，避免方法：
async function fun3() {
    await Promise.reject('test error')
        .catch(err => console.log(err))
    return await Promise.resolve('hello js');
}

fun3().then(v => console.log(v))

async function fun4() {
    try {
        await new Promise(function (resolve, reject) {
            throw new Error('test2 error')
        })
    } catch (err) {
        console.log(err)
    }
    return await('hello es6')
}

fun4().then(r => console.log(r))

console.info('\n---------- demo4 ----------')
async function getStockPriceByName(name) {
    let symbol = await getStockSymbol(name)
    let price = await getStockPrice(symbol);
    return price;
}

function getStockSymbol() {
    //do something
    return 0
}

function getStockPrice() {
    //do something
    return 3200
}

getStockPriceByName('a').then(result => console.log(result))

function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve,ms)
    })
}

async function asyncPrint(value,ms) {
    await timeout(ms)
    console.log(value)
}

asyncPrint('ABC',1000)



