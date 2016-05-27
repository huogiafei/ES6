'use strict';
/** function length **/
console.info('---------- demo1 ----------');
{
    let foo = function(a,c,d){};
    console.log(foo.length);
}

console.info('---------- demo2 ----------');
{
    console.log((function(a=1,c,d){}).length);
    console.log((function(a,c=1,d){}).length);
    console.log((function(a,c,d=1){}).length);
    console.log((function(a=1,c,d,e=1){}).length);
    console.log((function(...args){}).length);
}




