'use strict';
/** Array.copyWithin **/
//demo1
{
    let arr = [2,4,6,8,10,12];
    arr.copyWithin(0,2);
    console.log(arr);
}

//demo2
{
    //Array.prototype.copyWithin(target, start = 0, end = this.length)
    let arr = [1,2,3,4,5,6,7,8,9,10];
    arr.copyWithin(5,0,5);
    console.log(arr);
}