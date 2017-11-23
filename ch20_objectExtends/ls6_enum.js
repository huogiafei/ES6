'use strict';
/**
 * 以下方法只针对可以枚举的属性 enumerable:true
 * for...in
 * Object.keys()
 * JSON.stringify()
 * Object.assign()
 */

//demo1
console.info('\n---------- demo1 ----------');
var dog = {
    name: 'cookie',
    age: '0.6'
}


Object.defineProperty(dog, 'sex', {
    value: 'm',
    writable: false,
    enumerable: false,
    configurable: false
});

console.log(dog.sex);
//console.log(delete(dog['sex'])); //Cannot delete property 'sex' of #<Object>
//dog.sex = 'f'; //Cannot assign to read only property 'sex' of object '#<Object>'
console.log(Object.getOwnPropertyDescriptor(dog, 'name'));
console.log(Object.getOwnPropertyDescriptor(dog, 'sex'));

//demo2 ignore Obj[enumerable:false]
console.info('\n---------- demo2 ----------');
//1
for (var item in dog) {
    console.log(item);
}
//2
console.log('keys: ' + Object.keys(dog));
//3
console.log('stringify: ' + JSON.stringify(dog));
//4
var dog2 = Object.assign({}, dog);
console.log(dog2.sex, dog2.name, dog.sex);
//5
//Reflect.enumerate
console.log(Reflect.ownKeys(dog))
console.log(Reflect.ownKeys(dog2))

//demo3
console.info('\n---------- demo3 ----------');
console.log(Object.getOwnPropertyDescriptor(
    Object.prototype, 'toString').enumerable);
console.log(Object.getOwnPropertyDescriptor(
    [], 'length').enumerable);
