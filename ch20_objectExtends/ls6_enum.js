'use strict';
//demo1
console.info('---------- demo1 ----------');
var dog = {
    name : 'cookie',
    age : '0.6'
}

Object.defineProperty(dog,'sex',{
    value:'m',
    writable:false,
    enumerable:false,
    configurable:false
});

console.log(dog.sex);
//console.log(delete(dog['sex']));
//dog.sex = 'f';
console.log(Object.getOwnPropertyDescriptor(dog, 'name'));
console.log(Object.getOwnPropertyDescriptor(dog, 'sex'));

//demo2 ignore Obj[enumerable:false]
console.info('---------- demo2 ----------');
//1
for(var item in dog){console.log(item);}
//2
console.log('keys: '+Object.keys(dog));
//3
console.log('stringfy: '+JSON.stringify(dog));
//4
var dog2 = Object.assign({},dog);
console.log(dog2.sex,dog2.name,dog.sex);
//5
//Reflect.enumerate

//demo3
console.info('---------- demo3 ----------');
console.log(Object.getOwnPropertyDescriptor(
    Object.prototype, 'toString').enumerable);
console.log(Object.getOwnPropertyDescriptor(
    [], 'length').enumerable);
