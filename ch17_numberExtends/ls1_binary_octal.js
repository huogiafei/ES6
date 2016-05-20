'use strict';

//demo1:es5
console.info('---------- demo1 ----------');
{
    let numB = '111';
    console.log(numB.toString(2));
    let numO = '701';
    console.log(numO.toString(8));
//var numO2 = 0701;//not allow in strict mode
//console.log(numO2);
    let numH = 0x14;
    console.log(numH);
}
//demo2
console.info('---------- demo2 ----------');
{
    let numB = 0b111;
    console.log(numB);
    let numO = '701';
    console.log(numO);
    console.log(Number(numB) + 1);
    console.log(Number(numO) + 1);
}

//demo3




