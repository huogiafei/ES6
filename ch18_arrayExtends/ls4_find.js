'use strict';
/** find() & findIndex() **/

const arr = [1, 4, 7, 10];
//demo1:find
{
    console.log(arr.find((i) => i % 2 == 0));

    console.log(
        arr.find(function (item, index, arr) {
            if (item % 5 == 0) {
                return item;
            }
        }))
}

//demo2: findIndex
{
    console.log(arr.findIndex((i)=> i < 6));

}

//demo3: indexOf
{
    console.log(arr.indexOf(3));
    console.log([NaN].indexOf(NaN));
    console.log([NaN].findIndex(y => Object.is(NaN, y)));
}

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