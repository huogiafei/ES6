'use strict';

//demo1
console.info('---------- demo1 ----------');
function* gen(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}
var g = gen();
g.next();
console.log(g.return('foo'));
console.log(g.next());

//demo2
console.info('---------- demo2 ----------');
function* numbers(){
    yield 1;
    try{
        yield 2;
        yield 3;
    }
    finally  {
        yield 4;
        yield 5;
    }
    yield 6;
}
var num1 = numbers();
var num2 = numbers();
var num3 = numbers();
//yield -> try -> return -> return
num1.next();
num1.next();
console.log(num1.return(10));//force return
console.log(num1.return(10));//force return again

console.info('\n----- split -----\n');

//yield -> return
console.log(num2.next());
console.log(num2.return(10));//force return
console.log(num2.next());

console.info('\n----- split -----\n');

//yield -> try -> return -> yield -> yield
console.log(num3.next());
console.log(num3.next());
console.log(num3.return(10));//force return
console.log(num3.next());
console.log(num3.next());//return 10

console.info('\n----- split -----\n');

//ps:死唔断气
console.log(num2.next());
console.log(num2.return('a'));
console.log(num2.next());
console.log(num2.return('b'));








