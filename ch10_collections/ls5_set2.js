'use strict';

//Union,Intersect,Difference
let a = [1,4,5,6,2,13];
let b = [2,4,5,6,7,23];
console.log([a, b]);
console.log([...a, ...b]);
console.log(a.concat(b));

console.log(new Set([...a, ...b]));//union
console.log(
    new Set([...a].filter(x=>new Set(b).has(x)))
)
console.log(
    new Set([...a].filter(x=>!(new Set(b).has(x))))
)