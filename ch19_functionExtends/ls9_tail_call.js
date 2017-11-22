'use strict';

/**
 * ES6提出为调用优化
 * 防止栈溢出,节省内存
 */

function factorial(n) {
    if(n === 1) return 1;
    return n * factorial(n-1)
}

console.log(factorial(5))

//optimize
function factorial2(n,total){
    if(n===1) return total;
    return factorial2(n-1,n*total)
}

console.log(factorial2(5,1))

function factorial3(n,total = 1){
    if(n===1) return total;
    return factorial3(n-1,n*total)
}

console.log(factorial3(5))