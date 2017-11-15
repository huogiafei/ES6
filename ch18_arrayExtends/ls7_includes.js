'use strict';
/** ES7 includes() **/

//demo1
console.info('\n---------- demo1 ----------')
console.log([1, 2, 3].includes(2));
console.log([1, 2, 3].includes(4));
console.log([1, 2, NaN].includes(NaN));
console.log([].includes(undefined))
console.log([].includes(null))


console.info('\n---------- demo2 ----------')

console.log([1, 2, 3, 4].includes(3, 3));
console.log([1, 2, 3, 4].includes(3, 6)); //fromIndex大于数组长度，返回false
console.log([1, 2, 3, 4].includes(3, -2));

console.info('\n---------- demo3 ----------')

{
    let arr = [1, 2, 3, 4, 5, 6];
    console.log(arr.indexOf(3));
    console.log(arr.includes(3));

    console.log([NaN].indexOf(NaN));
    console.log([NaN].includes(NaN));
}

console.info('\n---------- demo4 ----------')
//polyfill
{
    const contains = (() =>
        Array.prototype.includes ?
            (arr, value) => arr.includes(value)
            : (arr, value) => arr.some(i => i === value))();
    console.log(contains(['foo', 'bar'], 'bar'));
}



