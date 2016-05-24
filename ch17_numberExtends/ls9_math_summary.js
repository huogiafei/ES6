'use strict';
/** Math properties and methods**/

//只列出常用
/*props*/
{
    console.log(Math.PI);
    console.log(Math.SQRT2);//计算正方形的斜边
}

/*methods*/
{
    //1.abs
    console.log(Math.abs(-10));
    //2.sqrt,cbrt,pow,
    console.log(Math.cbrt(27),Math.sqrt(16),Math.pow(3,3));
    //3.ceil,round,floor,trunc
    console.log(Math.ceil(1.4),Math.round(1.4),Math.floor(1.4));
    console.log(Math.trunc(1.5),Math.trunc(1.4));
    //4.hypot
    console.log(Math.hypot(3,4));//勾股定理
    //5.max,min
    console.log(Math.max(1, 2, 3), Math.min(1, 2, 3));
    //6.random
    console.log(parseInt(Math.random()*100));
    //7.sign
    console.log(Math.sign(-5.3));
}