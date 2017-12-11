'use strict';
/**
 * yield* 
 */

console.info('\n---------- demo1 ----------')

function* foo() {
    yield 'a';
    yield 'b'
}

function* bar() {
    yield 'x'
    foo() // no work
    yield 'y'
}

for (let v of bar()) {
    console.log(v)
}

console.info('----- split -----')

function* bar2() {
    yield 'x'
    yield* foo()
    yield 'y'
}

for (let v of bar2()) {
    console.log(v)
}

console.info('\n---------- demo2 ----------')
function* bar3() {
    yield 'x'
    yield foo()
    yield 'y'
}

let gen = bar3()
console.log(gen.next().value)
console.log(gen.next().value) //返回一个遍历器对象
console.log(gen.next().value)

console.info('\n---------- demo3 ----------')
function *gen2(){
    yield * ['a',1,'2',true]
    yield *'hello'
}

console.log(gen2().next().value)
for(let item of gen2()){
    console.log(item)
}
console.log(...gen2())

console.info('\n---------- demo4 ----------')
function *a() {
    yield 'Apple'
    return 'banana'
}

function *b() {
    yield 'Cat'
    let v = yield *a()
    console.log(v)
    yield 'Panda'
}

let x = b()
console.log(x.next())
console.log(x.next())
console.log(x.next())








