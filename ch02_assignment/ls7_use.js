'use strict';
console.info('---------- demo1 ----------')

function swap(a, b) {
    return [a, b] = [b, a];
}

let [x, y] = [1, 10]
console.log(x, y)
console.log(swap(x, y))

console.info('\n---------- demo2 ----------')

//返回多个值
function foo() {
    return [1, 2, 3]
}

function bar() {
    return {
        first: 'a',
        second: 'b'
    }
}

let [a, b] = foo()
console.log(a, b)

let {m, n} = bar()
let {first, second} = bar()
console.log(m, n)
console.log(first, second)

console.info('\n---------- demo3 ----------')

function add([x=0, y=0, z=0]) {
    return x + y + z
}
console.log(add([1, 2, 3]))
console.log(add([1, 2]))

console.info('\n---------- demo4 ----------')
var jsonData = {
    id:12395,
    status:1,
    data:[23,15]
}
let {id,status,data:categoryID} = jsonData
console.log(id,status,categoryID)


console.info('\n---------- demo5 ----------')
let map = new Map();
map.set('a','Ali')
map.set('j','JD')
map.set('t',"Tencent")

for(let [key,value] of map){
    console.log(`${key.toUpperCase()} for ${value}`)
}







