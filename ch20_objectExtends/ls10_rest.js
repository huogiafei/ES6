'use strict';
/**
 * Rest & Object
 * **/
console.info('\n---------- demo1 ----------')
{
    let {x, y, ...z} = {x: 1, y: 2, a: 3, b: 4}
    console.log(z)
    //Error
    //let {a, b, ...c} = null;
    //let {i, j, ...k} = undefined;
}

console.info('---------- demo2 ----------')
{
    let o1 = {fullname: 'dobe'}
    let o2 = {age: '1'}
    o2.__proto__ = o1;
//console.log(Object.getOwnPropertyDescriptor(o2,'fullname'))
    let o3 = {...o2}
    console.log(o3)
}

console.info('\n---------- demo3 ----------')
let emptyObject = {...null,...undefined}
console.log(emptyObject)
//合并对象
let a = {
    name:'drunk me',
    trackId:'007'
}
let b = {
    time:'3:46',
    singer:['eason','hints']
}
//es5
let ab1 = Object.assign({},a,b)
//es6
let ab2 = {...a,...b}
console.log(ab1)
console.log(ab2)













