'use strict';
/** ES7 includes() **/

//demo1
console.log([1, 2, 3].includes(2));
console.log([1, 2, 3].includes(4));
console.log([1, 2, 3].includes(NaN));

console.log('\n');

console.log([1, 2, 3, 4].includes(3, 3));
console.log([1, 2, 3, 4].includes(3, 5));
console.log([1, 2, 3, 4].includes(3, -2));

console.log('\n');

{
    let arr = [1, 2, 3, 4, 5, 6];
    console.log(arr.indexOf(3));
    console.log(arr.includes(3));

    console.log([NaN].indexOf(NaN));
    console.log([NaN].includes(NaN));
}

console.log('\n');
//polyfill
{
    const contains = (()=>
            Array.prototype.includes ?
                (arr, value) => arr.includes(value)
                : (arr, value) => arr.some(i => i === value))();
    console.log(contains(['foo','bar'],'bar'));
}



