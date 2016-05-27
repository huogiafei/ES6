'use strict';
/** __proto__ , Object.setPrototypeOf(), Object.getPrototypeOf() **/

console.info('\n----- demo1 -----');
const OBJ = {
    a: '1',
    b: '2',
    c: '3',
    [Symbol('c')]: '4',
    [Symbol('d')]: '5',
}

//demo1:__proto__
console.log(Object.getPrototypeOf({
    __proto__:null
}))

console.log(OBJ.__proto__ == Object.prototype);
console.log(Object.getPrototypeOf(OBJ) == Object.prototype);

console.info('\n----- demo2 -----');
//demo2:Object.setPrototypeOf()
let proto = {};
let obj = {x:10};
Object.setPrototypeOf(obj,proto);

proto.name = 'cc';
proto.age = '21';

console.log(obj);
console.log(obj.name);

//demo3:Object.getPrototypeOf()
console.info('\n----- demo3 -----');
function Round(){
    this.radius = 5
}

var r1 = new Round();
console.log(Object.getPrototypeOf(r1));
console.log(r1.radius);


Object.setPrototypeOf(r1,Object.prototype);
console.log(Object.getPrototypeOf(r1));
console.log(r1.radius);



