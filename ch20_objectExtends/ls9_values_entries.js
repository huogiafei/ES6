'use strict';
/** Object.values() & Object.entries() **/

//demo1:ES5 Object.keys()
console.info('\n---------- demo1 ----------')
var obj = {foo: 'bar', hello: 'world', [Symbol('desc')]: 'description'};
var map = new Map([['a', 1], ['b', 3]]);
console.log(Object.keys(obj));


//demo2:ES7 Object.values
console.info('\n---------- demo2 ----------')
console.log(Object.values(obj));
console.log(map.values());

//demo3:ES7 Object.values
console.info('\n---------- demo3 ----------')
console.log(Object.entries(obj));
console.log(map.entries());

//demo4:entries polyfill
console.info('\n---------- demo4 ----------')

function* myEntries(obj) {
    for (var prop in obj) {
        yield [prop, obj[prop]];
    }
}

for (var item of myEntries(obj)) {
    console.log(item);
}

let myEntries2 = (obj) => {
    let arr = [];
    for(let key of Object.keys(obj)){
        arr.push([key,obj[key]])
    }
    return arr
}

console.log(myEntries2(obj))

console.info('\n---------- demo5 ----------')
let obj2 = Object.create({}, {a: {value: 42}})
console.log(Object.values(obj2))

//console.log(Reflect.ownEntries(obj))


