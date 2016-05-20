'use strict';
//demo1 ES5 isNaN(隐形转型)
console.info('---------- demo1 ----------');
console.log(isNaN('123'));
console.log(isNaN('foo'));
console.log(isNaN('2016/5/20'));
//demo2 ES6 Number.isNaN (if not a number or NaN ,return false)
console.info('---------- demo2 ----------');
console.log(Number.isNaN('123'));
console.log(Number.isNaN('foo'));
console.log(Number.isNaN('2016/5/20'));

//demo3 ES5 isFinite()
console.info('---------- demo3 ----------');
console.log(isFinite(1));
console.log(isFinite('123'));
console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));
console.log(isFinite(NaN));

//demo3 ES6 Number.isFinite()
console.info('---------- demo4 ----------');
console.log(Number.isFinite(1));
console.log(Number.isFinite('123'));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(NaN));
