/**
 * 原生构造函数
 * Boolean
 * Number
 * String
 * Array
 * Date
 * Function
 * RegExp
 * Error
 * Object
 */

console.info('---------- Demo1 ----------')
let str = 'Javascript'
console.log(str.length)

//es5
function MyString() {
    String.apply(this, arguments)
}

MyString.prototype = Object.create(String.prototype, {
    constructor: {
        value: MyString,
        writable: true,
        configurable: true,
        enumerable: true
    }
})
let myStr = new MyString('Hello')
console.log(myStr.length);

//es6
class MyString2 extends String {
    constructor(str) {
        super(str)
    }
}

let str2 = new MyString2('hello')
console.log(str2.length)

console.info('\n ---------- versionedArray ----------')
class VersionedArray extends Array {
    constructor() {
        super();
        this.history = [];
    }

    commit() {
        this.history.length = 0
        this.history.push(...this);
    }

    revert() {
        this.splice(0, this.length, ...this.history);

    }
}

let x = new VersionedArray();
x.push(1);
x.push(2);
console.log(...x)
console.log(x.history)
x.commit();
console.log(...x)
console.log(x.history)
x.push(3);
console.log(x)
x.revert();
console.log(x)

x.push(3,4,56)
x.commit()
console.log(x)
x.push(100)
console.log(x)
x.revert()
console.log(x)

console.info('\n---------- Custom Error ----------')

class ExtendableError extends Error{
    constructor(message){
        super();
        this.message = message;
        this.stack = (new Error()).stack;
        this.name = this.constructor.name;
    }
}

class MyError extends ExtendableError{
    constructor(m){
        super(m)
    }
}

let myError = new MyError('test')
console.log(myError.message)
console.log(myError.stack)
console.log(myError.name)

console.info('\n---------- Object Different ----------')
class NewObj extends Object{
    constructor(){
        super(...arguments)
    }
}

let newObj = new NewObj({test:true})
console.log(newObj.test === true)

let newObj2 = new Object({test:true})
console.log(newObj2.test === true)

















