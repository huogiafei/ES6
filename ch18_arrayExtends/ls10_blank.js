'use strict';
/**
 * ES5
 * forEach(), filter(), every() 和some()都会跳过空位。
 * map()会跳过空位，但会保留这个值
 * join()和toString()会将空位视为undefined，而undefined和null会被处理成空字符串
 *
 * ES6
 * 空转为undefined
 */


console.info('\n---------- demo1 ----------')
let a1 = new Array(3)
let a2 = [undefined, undefined, undefined]
let a3 = [, , ,]
console.log(0 in a1, 0 in a2, 0 in a3);
console.log(a1.entries(), a1.toString(), Array.from(a1))
console.log(a2.entries(), a2.toString(), Array.from(a2))
console.log(a3.entries(), a3.toString(), Array.from(a3))

console.info('\n---------- demo2 ----------')
//1.Array from
console.log(Array.from(a3), Array.from(a2))

//2. ...
console.log([...a3], [...a2])

//3. copyWithin
console.log(a3.copyWithin(0, 1))

//4. for
for (let i of a3) {
    console.log(i)
}

//5. map
console.log(a3.map((x) => 10))

//6. join
console.log(a3.join('a'))
console.log(a2.join('b'))
console.log(['','',''].join('c'))







