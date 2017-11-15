'use strict';
/**
 * Array.of 和 Array.from的区别
 * from:将两类对象转为真正的数组(类似数组，可遍历)
 * of:将一组值，转换为数组
 * */

/*demo1*/
console.info('\n---------- demo1 ----------')
{
    //Array()会根据参数重载
    console.log(Array.of(3, 6, 9));
    let a1 = [];
    let a2 = new Array(3);
    let a3 = new Array(3, 6, 9);//[3,6,9]
    let a4 = new Array(undefined);
    console.log(a1, a2, a3, a4);

    let b1 = Array.of();
    let b2 = Array.of(1);
    let b3 = Array.of(2, 3);
    let b4 = Array.of(undefined);
    console.log(b1, b2, b3, b4);

    let c1 = Array.of({length: 3}, item => 3)
    console.log(c1)
}

console.info('\n---------- demo2 ----------')

/*demo2 : pollify*/
function ArrayOf() {
    return [].slice.call(arguments);
}

{
    Array.of = function () {
        var arr = [];
        for (var i = 0; i < arguments.length; i++) {
            arr.push(arguments[i]);
        }
        return arr;
    }

    let c = Array.of(1, 2, 3);
    let d = ArrayOf(2, 4, 6)
    console.log(c, d);
}


