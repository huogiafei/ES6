'use strict';
/**Number Property and Method**/

/*props(constant)*/
{
    //single
    console.log(Number.EPSILON);
    console.log(Number.NaN);
    console.log(typeof NaN, typeof Number.NaN);

    console.info('----- pairs -----');
    //pair
    console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
    console.log(Number.MAX_VALUE, Number.MIN_VALUE);
    console.log(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY);
}

/*method*/
//draft phrase：isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt

console.info('\n----- toExponential -----');
{
    //toExponential
    let arr = [1.2, 120, 1500];
    var result = arr.map(function (item) {
        return item.toExponential();
    });
    console.log(result);
}

console.info('\n----- toFixed -----');
{
    let a = -1.23571;
    console.log(a.toFixed(0));
    //console.log(a.toFixed(-1));//RangeError
    console.log(a.toFixed(3));
}

console.info('\n----- toLocaleString -----');
{
    let number = 1.23456789;
    number.toLocaleString("zh-Hans-CN-u-nu-hanidec")
}

console.info('\n----- toPrecision -----');
{
    let num = 21.2456789;
    console.log(num.toFixed(5));
    console.log(num.toPrecision(5));
}





