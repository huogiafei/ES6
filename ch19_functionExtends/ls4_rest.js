'use strict';
//es5 arguments
console.info('---------- demo1 ----------');
function foo(){
    console.log(typeof arguments);
    for(let item in arguments){
        console.log(item);
    }
}
foo(1,2);

console.info('---------- demo2 ----------');
//function f(a,...b,c);//Rest parameter must be last formal parameter
console.log((function(...a){}).length);

