'use strict';

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    printName(){
        console.log('point:'+this.x,this.y)
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color
    }
    printName(){
        super.printName()
    }
}

let cp1 = new ColorPoint(5, 6, '');
console.log(cp1 instanceof Point)
console.log(cp1 instanceof ColorPoint)

console.info('\n---------- prototype & __proto__ ----------')
console.log(ColorPoint.__proto__ == Point,
    ColorPoint.prototype.__proto__ == Point.prototype)

console.info('\n---------- 继承目标 ----------')
//1. 子类继承Object，如ColorPoint 继承 Point

//2，不继承
class A {}
console.log(A.__proto__ == Function.prototype)
console.log(A.prototype.__proto__ == Object.prototype)

//3.继承null
class B extends null{}
console.log(B.__proto__ === Function.prototype)
console.log(B.prototype.__proto__ === null,B.prototype.__proto__ === undefined)

//getPrototypeOf
console.info('\n---------- Object.getPrototypeOf() ----------')
console.log(Object.getPrototypeOf(ColorPoint) === Point)

//super关键字
console.info('\n---------- super ----------')
//1.构造函数 super(...args)
//2.对象调用 super.prop , super.foo()
let obj = {
    toString(){
        return "MyObject: " + super.toString()
    }
}
console.log(obj.toString())

//__proto__
console.info('\n---------- __proto__ ----------')
let p1 = new Point(2,3)
p1.printName()


let cp2 = new ColorPoint(3,4,'green')
cp2.printName()

cp2.__proto__.__proto__.printName = function () {
    console.log('modify')
}
cp2.printName()








