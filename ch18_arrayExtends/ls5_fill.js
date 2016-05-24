'use strict';
/** fill() **/
//demo1
{
    let arr = new Array(5);
    arr.fill(7);

    let arr2 = new Array(3).fill('a');
    console.log(arr);
    console.log(arr2);
}

//demo2 fill(text,start,end)
{
    console.log([1,3,4,5,6,7,8].fill('a',0,3));
}