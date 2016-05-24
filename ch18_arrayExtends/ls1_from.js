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
    var arr1 = [].slice.call(arr);
    var arr2 = Array.from(arr);
    console.log(arr1, arr2);
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
    var arr = Array.from({length: 5}, () => parseInt(Math.random() * 10));
    console.log(arr);

    var arr2 = [1, 2, 3, 4, 5];
    var result1 = arr2.map((item) => item * item);
    var result2 = Array.from(arr2, (x)=>x * x);
    console.log(result1);
    console.log(result2);
}







