'use strict';
//demo1
console.info('\n----- demo1 -----');
var symbol = Symbol('a');
//var bar = new Symbol('b');//Symbol is not a constructor
/*
 这会阻止创建一个显式的符号包装器对象而不是一个新的符号值。
 围绕原始数据类型创建一个显式包装器对象从 ECMAScript 6 开始不再被支持。
 然而，现有的原始包装器对象，如 new Boolean、 new String以及new Number
 因为遗留原因仍可被创建。From:MDN
 */
var num = Number('123');
var str = String('hello');
var obj = Object({name: 'cookie'});
var boolean = Boolean('true');
console.log(symbol, num, str, obj, boolean);

//demo2
console.info('\n----- demo2 -----');
{
    let foo = Symbol.for('x');
    let bar = Symbol('y');
    console.log(foo);
    console.log(foo.toString());
    console.log(Symbol.keyFor(foo));//x
    console.log(Symbol.keyFor(bar));//undefined

    let tmp = Symbol.for('');
    console.log(Symbol.keyFor(tmp));
}

//demo3
console.info('\n----- demo3 -----');
{
    console.log(Symbol.length);//1
    console.log(Symbol.prototype);
}

//demo4
console.info('\n----- demo4 -----');
{
    console.log(
        typeof Symbol() === 'symbol',
        typeof Symbol('foo') === 'symbol',
        typeof Symbol.iterator === 'symbol'
    )
}



