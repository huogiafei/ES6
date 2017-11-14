'use strict';
/**ES6将全局方法parseInt()和parseFloat()，
 *  移植到Number对象上面，行为完全保持不变。
 *  逐步减少全局性方法，使得语言逐步模块化。
 */

//es5
console.info('---------- demo1 ----------');
console.log(parseInt(-1));
console.log(parseFloat(-1));
console.log(parseInt(0.53));
console.log(parseFloat(0.53));

//es6
console.info('---------- demo2 ----------');
console.log(Number.parseInt(-1));
console.log(Number.parseFloat(-1));
console.log(Number.parseInt(0.53));
console.log(Number.parseFloat(0.53));

console.info('---------- demo3 ----------');
console.log(Number.parseInt === parseInt);
console.log(Number.parseInt === parseInt);

