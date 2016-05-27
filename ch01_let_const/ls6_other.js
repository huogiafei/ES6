'use strict';
console.log(new Date() * new Date());//interest
var obj1 = {
    name: 'tom'
}
var obj2 = Object.assign({}, obj1);
console.log(obj1 * obj2);

var obj3 = {
    0: 1,
    1: 3,
    length: 2
}
var obj4 = Object.assign({}, obj3);
console.log(obj3 * obj4);


