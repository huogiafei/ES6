'use strict';
/**
 * find() 返回数组成员
 * findIndex() 返回数组成员索引
 **/

console.info('---------- demo1 ----------')
const arr = [1, 4, 7, 10];
//demo1:find
{
    console.log(arr.find((i) => i % 2 == 0));
    console.log(
        arr.find(function (item, index, arr) {
            if (item % 5 == 0) {
                return {v:item,i:index};
            }
        }))
}

//demo2: findIndex
console.info('\n---------- demo2 ----------')
{
    console.log(arr.findIndex((i) => i < 6));
}

console.info('\n---------- demo3 ----------')
//demo3: indexOf
{
    console.log(arr.indexOf(3));
    console.log([NaN].indexOf(NaN));
    console.log([NaN].findIndex(function (val) {
        return Number.isNaN(NaN)
    }));
    console.log([NaN].findIndex(y => Object.is(NaN, y)));
}

console.info('\n---------- demo4 ----------')
//demo4 Object.is
{
    console.log(
        NaN === NaN,
        Object.is(NaN, NaN),

        0 === -0,
        Object.is(0, -0),

        -0 === +0,
        Object.is(-0, +0)
    )
}