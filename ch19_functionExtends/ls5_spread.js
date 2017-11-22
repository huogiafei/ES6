'use strict';
/** ES6 function spread
 * rest参数和扩展运算符都是 ...
 *
 * **/
console.info('---------- demo1 ----------');
{
    console.log([1, 2, 3]);
    console.log(1, 2, 3);
    console.log(...[1, 2, 3]);
    console.log(1, ...[2, 3, 4], 5);
}

console.info('---------- demo2 ----------');
{
    let myPush = function (arr, ...item) {
        arr.push(...item);
    };
    let array = [];
    myPush(array, 1, 4, 7, 10, 14);
    console.log(array);
}

console.info('---------- demo3 ----------');
function f(a, b, c, d) {}
var args = [0, 1];
f(-1, ...args, ...[3]);

//ES5 apply and ES6 spread(...)

console.info('---------- demo4 ----------');
{
    let show = (x, y, z) => console.log(x, y, z);
    let args1 = [0, 1, 2];

    show.apply(null, args1);//es5
    show(...args1);//es6
}

//sample1:Math.max
console.info('---------- demo5 ----------');
{
    let arr = [1, 2, 3, 4];
    console.log(Math.max.apply(null, arr));
    console.log(Math.max.call(null, ...arr));//interest
    console.log(Math.max(...arr));
}

//sample2:push
console.info('---------- demo6 ----------');
{
    let arr1 = [1, 3, 5];
    let arr2 = [2, 4, 6];
    Array.prototype.push.apply(arr1, arr2);
    console.log(arr1);
    console.log(arr1.concat(arr2));
    arr1.push(...arr2);
    console.log(arr1);
}

//sample3:concat
console.info('---------- demo7 ----------');
{
    let [more,origin] = [[3, 6, 9], [0, 1, 2]];
    console.log(origin.concat(more));//es5
    console.log([...origin, ...more]);//es6
}

//sample4:destructuring
console.info('---------- demo8 ----------');
{
    //const [a,...b,c]= [1,2,3,4,5,6]//Error
    const [a,b,...c] = [1, 2, 3, 4, 5, 6];
    console.log(a, b, c);
    const [first, ...rest] = ["foo"];
    console.log(first, rest);
}

console.info('---------- demo9 ----------');
{
    var tsArray = [2015,6,7];
    var dateArray = new Date(...tsArray);
    console.log(dateArray);

    console.log([...'hello'])
    console.log(Array.from('hello'))
}

console.log('---------- demo10 ----------');
{
    console.log('hello'.split(''));//es5
    console.log([...'world']);

    console.log('x\uD83D\uDE80y'.length) // 4
    console.log([...'x\uD83D\uDE80y'].length) // 3
}

console.info('---------- demo11 ----------');
{
    //var nodeList = document.querySelectorAll('div');
    //var array = [...nodeList];

    let arrObject = {
        0: 'a',
        1: 'b',
        2: 'c',
        length: 3
    }
    //console.log([...arrObject]);  //arrObject is not iterable
    // arrObject[Symbol.iterator] is not a function
    console.log(Array.from(arrObject))
}

console.info('---------- demo12 ----------');
{
    let myMap = new Map([
        [1,'a'],
        [2,'b'],
        ['name','map']
    ])
    let arr = [...myMap.keys()];
    
    console.log(arr);
    
    var go = function*(){
        yield   'c';
        yield   'd';
        yield   'w';
    }
    console.log([...go()]);
}

















