'use strict';
console.info('---------- demo1 ----------');
console.log(Math.pow(2,53));//MAX_SAFE_INT
console.log(Math.pow(2, 53) === Math.pow(2, 53) + 1);
console.log(Math.pow(2, 52) === Math.pow(2, 52) + 1);

//MAX_SAFE_INT and MIN_SAFE_INT
console.info('---------- demo2 ----------');
console.log(Number.MAX_SAFE_INTEGER + 1 == Math.pow(2,53));
console.log(Number.MIN_SAFE_INTEGER - 1 == Math.pow(-2,53));

//isSafeInteger
console.info('---------- demo3 ----------');
console.log(Number.isSafeInteger(Math.pow(2, 53)));
console.log(Number.isSafeInteger(Math.pow(2, 53)-1));


