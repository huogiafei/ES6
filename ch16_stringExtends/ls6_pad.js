"use strict";
//js Ipad? ES7
//demo1
console.info('---------- demo1 ----------');
console.log('x'.padStart(5,'by'));// 'bybyx'
console.log('x'.padEnd(5,'by')); // 'xbyby'

console.info('\n---------- demo2 ----------')
console.log('abc'.padStart(5,'hello'))
console.log('abc'.padStart(-1,'hello'))
console.log('abc'.padStart(NaN,'hello'))
console.log('abc'.padStart('f','hello'))
console.log('abc'.padStart(3,NaN))
console.log('abc'.padStart(NaN,321))


