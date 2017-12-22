class MyClass {
    constructor() {

    }

    get prop() {
        return 'getter';
    }

    set prop(value) {
        console.log('setter' + value)
    }
}

let mc = new MyClass()
mc.prop = '123'
console.log(mc.prop)

let desc = Object.getOwnPropertyDescriptor(
    MyClass.prototype, 'prop'
)
console.log(desc)

console.info('\n---------- Static Method ----------')

class Foo {
    static test() {
        return 'Hello'
    }
}

class Bar extends Foo {
    constructor() {
        super()
    }
}

console.log(Foo.test(), Bar.test())
let [f, b] = [new Foo(), new Bar()]

//console.log(f.test(),b.test())  //error:not a function

class Bar2 extends Foo {
    constructor() {
        super()
    }

    static test() {
        return super.test() + ' World'
    }
}

console.log(Bar2.test())

console.info('\n---------- 静态属性 & 实例属性 ----------')

//ES7
class Car {
    //wheel = 4;
    //static type = 'automotive'
    constructor() {
        console.log(this.wheel)
    }
}

console.info('\n---------- new.target ----------')

//用来确定构造函数怎么调用
function Foobar(name) {
    console.log(new.target === Foobar)
}

let fb = new Foobar('Sam')
let fb2 = Foobar('Hui')
let fb3 = Foobar.call(fb, "Tam")

//子类继承的时候new.target 返回子类
class Rectangle {
    constructor(length, height) {
        this.length = length;
        this.height = height;
        console.log(new.target)

    }
}

class Square extends Rectangle {
    constructor(length) {
        super(length, length)
    }
}

let c1 = new Square(5)

//只能继承不能实例化（抽象类）
class Abstract {
    constructor() {
        if (new.target === Abstract) {
            throw new Error('不能实例化')
        }
        console.log(new.target)
    }
}

class Instance extends Abstract {
    constructor() {
        super()
    }
}

//let a = new Abstract() //error
let ins = new Instance()

console.info('\n---------- Mixin Mode ----------')

//Mixin模式
function mix(...mixins) {
    class Mix {
    }

    for (let mixin of mixins) {
        copyProps(Mix, mixin);
        copyProps(Mix.prototype, mixin.prototype);
    }
    return Mix;
}

function copyProps(target, source) {
    for (let key of Reflect.ownKeys(source)) {
        if (key !== 'constructor' && key !== 'name' && key !== 'prototype') {
            let desc = Object.getOwnPropertyDescriptor(source, key);
            Object.defineProperty(target, key, desc)
        }
    }
}

class Color{
    constructor(c){
        this.color = c
    }
}

class ColorSquare extends mix(Square,Color){
}

console.log(Reflect.ownKeys(cs1))









