'use strict';
/** function name **/

//sample1
var dog = {
    bark(){
        console.log('bark');
    },
    get dogName(){
        return 'cookie';
    }
};
console.log(dog.bark.name);
console.log(dog.dogName.name);

//sample2
console.log('s2:' + (new Function()).name);
var doSomething = function(){};
console.log(doSomething.name);
console.log(doSomething.bind().name);

//sample3
const key1 = Symbol('desc');
const key2 = Symbol();
let obj = {
    [key1](){},
    [key2](){},
};
console.log(obj[key1].name);
console.log(obj[key2].name);

