'use strict';
//map init
console.info('---------- demo1 ----------');
var map1 = new Map();
map1.set('name','funny');
var map2 = new Map([["name",'interest'],["age","24"]]);
console.log(map1,map2);

//map iterator
console.info('---------- demo2 ----------');
console.log(map2.keys());
console.log(map2.values());
console.log(map2[Symbol.iterator]());
console.log(map2.entries());
console.log(map2[Symbol.iterator] == map2.entries);

