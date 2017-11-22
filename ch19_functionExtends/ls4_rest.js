'use strict';
//es5 arguments
console.info('---------- demo1 ----------');
function foo(){
    console.log(typeof arguments);
    for(let item in arguments){
        console.log(item);
    }
}
foo(1,2,'abc');

console.info('---------- demo2 ----------');
//function f(a,...b,c);//Rest parameter must be last formal parameter
console.log((function(...a){}).length);

//demo3 sum
console.info('\n---------- demo3 ----------')
function add(...values) {
    let sum = 0;
    for(let item of values){
        sum += Number.parseInt(item);
    }
    return sum
}
console.log(add(2,4,6))
console.log(add(...[2, 4, 6]))

let tel = '18825146432'
const nums = (tel => Array.from(tel))
console.log(add(...nums(tel)))

//demo4 sort
console.info('\n---------- demo4 ----------')
function es5Sort() {
    return Array.prototype.slice.call(arguments).sort();
}

const es6Sort = ((...args) => args.sort())

console.log(es5Sort(2,1,5,6,9,3))
console.log(es6Sort(2,1,5,6,9,3))

//demo5
console.info('\n---------- demo5 ----------')
console.log((function (a){}).length)
console.log((function (a,...b){}).length)
console.log((function (...a){}).length)

/* error : Rest parameter must be last formal parameter
function fun(a,...b,c) {}
*/



