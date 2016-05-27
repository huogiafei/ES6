'use strict';
let obj = {
    '-2':'0',
    '-1':'a',
    '0' :'b',
    '10':'c',
    'y':'9527',
    'x':'5354',
    [Symbol('z')]:'123'
}

var keys = [];
for(let key in obj){
    keys.push(key);
}
console.log(keys);

console.log(Reflect.ownKeys(obj));

//Number(asc) > String > Symbol
//number order : (0, 1,2,...+Infinite),(-Infinite,...,-2,-1)