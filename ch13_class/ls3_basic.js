'use strict';
//Class可以理解成语法糖
console.info('\n---------- demo1 ----------')

class Demo {}

console.log(typeof Demo)
console.log(Demo === Demo.prototype.constructor)

console.info('\n---------- demo2 ----------')

class Foo {
    do() {
        console.log('doSomething')
    }
}

new Foo().do()

console.info('\n---------- demo3 ----------')

class B {}

let b = new B()
console.log(b.constructor === B.prototype.constructor)

console.info('\n---------- demo4 ----------')
// 定义方法不可枚举
let arg = 'test'
class C{
    constructor(a,b){}
    toString(){}
    [arg](){}
}

console.log(Object.keys(C.prototype))
console.log(Object.getOwnPropertyNames(C))
console.log(Object.getOwnPropertyNames(C.prototype))

console.info('\n---------- demo5 ----------')
class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    toString(){
        return `(${this.x},${this.y})`
    }
}

let p = new Point(2,4)
console.log(p.hasOwnProperty('x'))
console.log(p.hasOwnProperty('y'))
console.log(p.hasOwnProperty('toString'))
console.log(p.__proto__.hasOwnProperty('toString'))

let p2 = new Point(1,3)
console.log(p.__proto__ === p2.__proto__)

p.__proto__.printName = function(){
    console.log('light')
}

p2.printName()











    


