'use strict';
console.info('---------- demo1 ----------');
console.log(Math.pow(2,53));//MAX_SAFE_INT
console.log(Math.pow(2, 53) === Math.pow(2, 53) + 1);
console.log(Math.pow(2, 52) === Math.pow(2, 52) + 1);

//MAX_SAFE_INT and MIN_SAFE_INT
console.info('---------- demo2 ----------');
console.log(Number.MAX_SAFE_INTEGER + 1 == Math.pow(2,53));
console.log(Number.MAX_SAFE_INTEGER + 2 == Math.pow(2,53));
console.log(Number.MAX_SAFE_INTEGER + 3 == Math.pow(2,53));
console.log(Number.MIN_SAFE_INTEGER - 1 == Math.pow(-2,53));
console.log(Number.MIN_SAFE_INTEGER - 2 == Math.pow(-2,53));
console.log(Number.MIN_SAFE_INTEGER - 3 == Math.pow(-2,53));

//Interest
console.log(Number.MAX_SAFE_INTEGER+1 === Number.MAX_SAFE_INTEGER+2)

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

//isSafeInteger
console.info('---------- demo3 ----------');
console.log(Number.isSafeInteger(Math.pow(2, 53)));
console.log(Number.isSafeInteger(Math.pow(2, 53)-1));

console.info('\n---------- demo4 ----------')
function trusty (left, right, result) {
    if (
        Number.isSafeInteger(left) &&
        Number.isSafeInteger(right) &&
        Number.isSafeInteger(result)
    ) {
        return result;
    }
    throw new RangeError('Operation cannot be trusted!');
}
//trusty(9007199254740993, 990, 9007199254740993 - 990)
// RangeError: Operation cannot be trusted!
trusty(1, 2, 3)


