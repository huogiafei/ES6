'use strict';
const PI = 3.1415;
console.log(PI);
//const is read-only
//PI=31.3; //Assignment to constant variable.

//不能重复声明
var z = 0;
//const z = 0;

//demo1 : const 常量存的是一个不可变的地址
console.info('---------- demo1 ----------');


const a = [];
a.push('hello');
console.log(a);
//a = ['world'];
const b = Object.freeze({val: {t: 'test'}});
//b.name = 'demo1'; //Can't add property name, object is not extensible
const c = Object.freeze(new Array(1, 2, 3));
console.log(c);
//c.push(4);//Can't add property 3, object is not extensible
console.log(c.length);

//demo2 : 冻结对象本身和属性
console.info('---------- demo2 ----------');
var constantize = (obj) => {
    Object.freeze(obj);
    Object.keys(obj).forEach((key, value) => {
        if (typeof obj[key] === 'object') {
            constantize(obj[key]);
        }
    });
};

console.log(b.val);
constantize(b);
console.log(b.val);

console.info('---------- Object.keys() ----------')
let player = {
    name: 'tim',
    height: '193',
    weight: '90',
    position: [3, 4]
}
console.log(`player:${Object.keys(player)}`)

console.info('---------- global ----------')
console.log(global) //node
//console.log(window) //browser
