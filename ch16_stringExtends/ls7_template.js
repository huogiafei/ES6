'use strict';
//demo1 : basic
console.info('---------- demo1 ----------');
var myDog = 'cookie';
var obj = {x: 1, y: 2}

function show(val) {
    return `hello world,${val}`;
}

console.log(`this is line 1
and this is line 2
${myDog}
${show(myDog)}
${obj.x + obj.y}`);

console.info('\n---------- demo2 ----------');

function harmony(StringArr, ...val) {
    for (let i of val) {
        console.log(i);
    }
    var arr = [];
    StringArr.forEach(function (str, index) {
        if (str.includes('fuck')) {
            arr.push(str.replace('fuck', '****'));
        }
        else {
            arr.push(str)
        }
    });
    return arr;
}

console.log(`${10 - 20}hello fucker${10 + 20}` + '');
console.log(harmony `${10 - 20}hello fucker${10 + 20}` + '');
console.log(String.raw`${10 - 20}hello fucker${10 + 20}`);


console.info('\n---------- demo3 ----------')
let stringA = `\nStringA`
console.log(stringA)
console.log(String.raw `${stringA}`)
console.log(String.raw `\nStringA`)
console.log(String.raw({ raw: 'test' }, 0, 1, 2))

console.log(String.raw({raw:'hlo'},3,5,7))


