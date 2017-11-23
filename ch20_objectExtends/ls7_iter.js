'use strict';
/** 5 iterator methods
 *  for...in
 *  Object.keys(obj)
 *  Object.getOwnPropertySymbols(obj)
 *  Object.getOwnProperTyNames(obj)
 *  Reflect.ownKeys(obj)
 * **/



const OBJ = {
    a: '1',
    b: '2',
    c: '3',
    [Symbol('c')]: '4',
    [Symbol('d')]: '5',
    [Symbol()]: '6',
}

//m1:for...in (no symbol)
console.info('\n----- demo1 -----');
for (let item in OBJ) {
    console.log(item);
}

//m2:Object.keys() (no symbol)
console.info('\n----- demo2 -----');
console.log(Object.keys(OBJ));

//m3:Object.getOwnPropertyNames() (no symbol)
console.info('\n----- demo3 -----');
console.log(Object.getOwnPropertyNames(OBJ));

//m4:Object.getOwnPropertySymbols() (only symbol)
console.info('\n----- demo4 -----');
console.log(Object.getOwnPropertySymbols(OBJ));

//m5:Reflect.ownKeys() (all props)
console.info('\n----- demo5 -----');
console.log(Reflect.ownKeys(OBJ));

//m6:Reflect.enumerate(obj)
console.info('\n----- demo6 -----');
/*
for(let prop of Reflect.enumerate(OBJ)){
    console.log(prop)
}*/

//iter order
/*number(asc) > str(init order) > symbol(init order) */
console.info('\n----- Order -----');
console.log(Reflect.ownKeys({[Symbol()]: 0, b: 0, 10: 0, 2: 0, a: 0}));

