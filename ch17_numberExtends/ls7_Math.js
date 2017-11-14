'use strict';
/**ES6: 17 new Math methods**/

//Math.trunc
console.info('\n----- Math.trunc -----');
{
    let arr = [1.2, -1.2, 0, 'a', ' ', NaN];
    for (let item of arr) {
        console.log(item + ' => ' + Math.trunc(item)
            + "," + parseInt(item));
    }

    //polyfill
    Math.trunc = Math.trunc || function (x) {
        return x < 0 ? Math.ceil(x) : Math.floor(x);
    }
}

//Math.sign
console.info('\n----- Math.sign -----');
{
    let arr = [1.2, -1.2, 0, 'a', ' ', NaN];
    var result = arr.map(function (item) {
        return Math.sign(item);
    })
    console.log(result);

    //polyfill
    Math.sign = Math.sign || function (x) {
        x = +x; //maybe covert NaN
        if (x === 0 || isNaN(x)) {
            return x;
        }
        return x > 0 ? 1 : -1
    }
}

//Math.cbrt
console.info('\n----- Math.cbrt -----');
{
    let x = Math.pow(3, 3);
    console.log(x);
    console.log(Math.cbrt(x));
    console.log(Math.cbrt('512'));
    console.log(Math.cbrt('512a'));

    //polyfill
    Math.cbrt = Math.cbrt || function (x) {
        var y = Math.round(Math.pow(Math.abs(x), 1 / 3));
        return x > 0 ? y : -y;
    }
}

//Math.clz32
console.info('\n----- Math.clz32 -----');
{
    console.log(Math.clz32(0));//32
    console.log(Math.clz32(1));//31
}

//Math.imul
console.info('\n----- Math.imul -----');
{
    console.log(Math.imul(2, 4));
    console.log(Math.imul(0x7fffffff, 0x7fffffff)); // 1
}

//Math.fround
console.info('\n----- Math.fround -----');
{
    console.log(Math.fround(0));
    console.log(Math.fround(1));
    console.log(Math.fround(1.5453));
}

//Math.hypot 勾股定理
console.info('\n----- Math.hypot -----');
{
    let r = 4;
    console.log(Math.hypot(r, r));//对角线
}

//other Method:
//log: expm1,log1p,log10,log2
//triangle: sinh,cosh,tanh,asinh,acosh,atanh;

console.info('\n---------- Exponential operator ----------')
//es7 new synatx
//2**2 = 4 , 2**5 = 32 , 2**=6(64)
console.log(2**5)
let c = 3;
c **= 4;
console.log(c)



