'use strict';
console.info('\n---------- 不存在变量提升 ----------')
{
    //new Foo()
    //class Foo {}
}

{
    let Foo = class {
    };

    class Bar extends Foo {
    }
}

console.info('\n---------- Class Expression ----------')
{
    const MyClass = class Me {
        getClssName() {
            return Me.name
        }
    }

    let m = new MyClass()
    console.log(m.getClssName())

    const MyClass2 = class {
        //do something
    }

    let Person = new class {
        constructor(name) {
            this.name = name
        }

        getName() {
            console.log(this.name)
        }
    }('Tim')

    Person.getName()
}

console.info('\n---------- Private Methods ----------')
{
    //1
    class Widget {
        foo(baz) {
            this._bar(baz)
        }

        _bar(baz) {
            return this.snaf = baz;
        }
    }

    //2
    class Widget2 {
        foo(baz) {
            bar.call(this, baz)
        }
    }

    //3
    const bar = Symbol('bar');
    const snaf = Symbol('snaf');

    class Widget3 {
        foo(baz) {
            this[bar](baz)
        }

        [bar](baz) {
            return this[snaf] = baz
        }
    }
}

function bar(baz) {
    return this.sanf = baz;
}

console.info('\n---------- this ----------')
{
    class Logger {
        printName(name = 'Tim') {
            this.print(`Hello ${name}`);
        }

        print(text) {
            console.log(text)
        }
    }

    const logger = new Logger();
    const {printName} = logger //对象赋值
    //printName(); //error
}

{
    class Logger{
        constructor(){
            this.printName = this.printName.bind(this)
        }
        printName(name = 'Tim') {
            this.print(`Hello ${name}`);
        }

        print(text) {
            console.log(text)
        }
    }
    const logger = new Logger();
    const {printName} = logger //对象赋值
    printName();
}

{
    class Logger{
        constructor() {
            this.printName = (name = 'Tim') => {
                this.print(`Hello ${name}`)
            }
        }
    }
}

/** 类和模块内部默认严格模式 **/

console.info('\n---------- Name ----------')
class Point{}

console.log(Point.name)




