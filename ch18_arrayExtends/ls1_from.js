'use strict';
/**Array.from**/
//demo1
console.info('\n----- demo1 -----');
{
    let arr = {
        'a': '2',
        'b': 1,
        0: 'huo',
        1: 'gia',
        2: 'fei',
        length: 5
    }
    console.log([].slice.call(arr));
    console.log(Array.from(arr))
}

//demo2
console.info('\n----- demo2 -----');
{
    var foo = function () {
        console.log(Array.from(arguments));
    };
    var bar = function (...args) {
        console.log(Array.from([...args]));
    }
    foo(1, 2, 3, 4, 7, 8, 9);
    bar(1, 2, 3, 4, 7, 8, 9);
    console.log(Array.from('hello world'));
}

//demo3 : set and map
console.info('\n----- demo3 -----');
{
    let mySet = new Set(['a', 'b', 'c', 'a']);
    console.log(Array.from(mySet));
    let myMap = new Map([['a', 'Apple'], ['b', 'Banana'], ['c', 'Candy']]);
    console.log(myMap);
    console.log(Array.from(myMap));
    console.log(Array.from(myMap.keys()));
    console.log(Array.from(myMap.values()));
}

//demo4 : Array.from(arr,fn());
console.info('\n----- demo4 -----');
{
    let arr = Array.from({length: 5}, () => Math.trunc(Math.random() * 10));
    console.log(arr);

    let arr2 = [1, 2, 3, 4, 5];
    let result1 = arr2.map((item) => item * item);
    let result2 = Array.from(arr2, (x) => x * x);
    console.log(result1);
    console.log(result2);
}

//demo5 生成指定长度的非空数组
console.info('\n---------- demo5 ----------')
/* map */
let arr_m = new Array(10)
let arr_m2 = arr_m.map(function (item) {
    return 10;
})
console.log(arr_m2)

/*ES6*/
let array = Array.from({length:10} ,(x) => 10)
console.log(array)

let array2 = new Array(10).fill(10)
console.log(array2)

console.info('\n---------- temp ----------')
{
    let a = '浪子心声';
    let b = {
        0: 'first',
        name: 'bb',
        age: 21,
        length: 3
    }
    let c = new Map()
    c.set(0, 'a')
    c.set(1, 'b')
    c.set('key', 'c')

    console.log(Array.from(a))
    console.log(Array.from(b))
    console.log(Array.from(c))

    console.log(Array.from({length:3}))
}







