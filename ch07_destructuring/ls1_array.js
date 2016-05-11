'use strict';
//demo1
console.info('---------- demo1 ----------');
{
    let a = 21;
    let b = 9;
    var arr = ['a', 'b', 'c'];
    a = arr[0];
    b = arr[1];
    console.log(a, b);
    console.log();
    let [x,y] = [1, 2];
    let [m,n] = arr;
    console.log(x, y, m, n);
}

//demo2
console.info('---------- demo2 ----------');
console.log([], [0]);
var [no] = [];
console.log(no);

//demo3 解构+迭代
console.info('---------- demo3 ----------');
function* fibs() {
    var [a,b] = [0, 1];
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

function* fibs2(length = 2) {
    var [a,b] = [0, 1];
    for (var j = 0, len = length; j < len; j++) {
        yield a;
        [a, b] = [b, a + b];
    }
}

//show method1
function getFibs1(len) {
    var [a,b,c,d,e,f,g,h,i] = fibs();
    var fibsSample = fibs();
    var result = [];
    for (var j = 0, len = len; j < len; j++) {
        //console.log(fibsSample.next().value);
        result.push(fibsSample.next().value);
    }
    return result;
}

//show method2
function getFibs2(len) {
    var fibsSample2 = fibs2(len);
    var result = [];
    for (let j of fibsSample2) {
        //console.log(j);
        result.push(j);
    }
    return(result);
}

//不用es6方法
function getFibs3(length) {
    var result = [];
    var a = 0;
    var b = 1;
    for (var j = 0, len = length; j < len; j++) {
        result.push(a);
        var temp = a;
        a = b;
        b = temp + b;
    }
    return result;
}
console.log(getFibs1(0));
console.log(getFibs2(1));
console.log(getFibs3(2));


