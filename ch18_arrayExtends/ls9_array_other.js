'use strict';
//isArray()
console.info('\n----- isArray -----');
{
    console.log(
        Array.isArray([]),
        Array.isArray(Array.prototype),

        Array.isArray(new Set([1,2,3,45])),
        Array.isArray(),
        Array.isArray({}),
        Array.isArray(null),
        Array.isArray(undefined),
        Array.isArray(17),
        Array.isArray('str'),
        Array.isArray(true)
    )
}

//toLocaleString
console.info('\n----- toLocaleString -----');
{
    var number = 1337;
    var date = new Date();
    var myArr = [number, date, "foo"];

    var str = myArr.toLocaleString();

    console.log(str);
}
