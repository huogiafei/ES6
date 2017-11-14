'use strict';
const testArr = [-1, 0, 1, 1.1, -1.1, NaN, '123', 'num'];
//t,t,t,f,f,f,f,f

function show(fun) {
    var result = [];
    for (let i of testArr) {
        result.push(fun(i).toString().charAt(0));
    }
    console.log(result);
}

console.info('---------- method1:regex ----------');
//method1:regex
function isInt(num) {
    if (typeof num === 'number') {
        var reg = /^-?\d+$/;
        return reg.test(num);
    }
    return false;
}
show(isInt);

console.info('---------- method2:Math ----------');
//method2:Math.fun()
function isInt2(num) {
    //better: return typeof num === 'number' && Math.floor(num) === num
    if (typeof num === 'number') {
        return Math.floor(num) === Math.ceil(num);
    }
    return false;
}
show(isInt2);

console.info('---------- method3: % ----------');
//method3: %
function isInt3(num) {
    //better : return typeof num === 'number' && num % 1 === 0
    if (typeof num === 'number') {
        return num % 1 == 0;
    }
    return false;
}
show(isInt3);

console.info('---------- method4:  parseInt----------');
function isInt4(num){
    return typeof num ==='number' && parseInt(num) === num;
}
show(isInt4);

console.info('---------- method5 : ES6 isInteger ----------');
function isInt5(num){
    return Number.isInteger(num);
}
show(isInt5);

console.info('---------- range test----------');
function getRange(num){
    var funArr = [isInt,isInt2,isInt3,isInt4,isInt5];
    var funArrLabel = ['reg','Math','%','parseInt','isInteger'];
    var result = [];
    for(let i = 0;i< funArr.length;i++){
        result.push(`${funArrLabel[i]} : ${funArr[i](num)}`);
    }
    return result;
}

console.log(getRange(Math.pow(2,512)));//1.3407807929942597e+154




