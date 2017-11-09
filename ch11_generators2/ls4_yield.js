'use strict';
/** Generators yield* **/

//demo1
console.info('---------- demo1 ----------');
function* foo(){
    yield 'a';
    yield 'b';
}

function* bar(){
    yield 'x';
    foo();
    yield 'y';
}

for(let item of bar()){
    console.log(item);
}

//demo2
console.info('---------- demo2 ----------');
function* bar2(){
    yield 'x';
    yield* foo();
    yield 'y';
}

for(let item of bar2()){
    console.log(item);
}

//demo3
console.info('---------- demo3 ----------');
function* inner(){
    yield 'hello';
}

function* outer(){
    yield 'outer';
    yield inner();
    yield 'world';
}

var o = outer();
console.log(o.next().value);
console.log(o.next().value);
console.log(o.next().value);

//demo4
console.info('---------- demo4 ----------');
const arr = [1,4,6,7];
function* gen3(){
    yield* arr;
}
for(let item of gen3()){
    console.log(item);
}

function* gen4(){
    yield* 'hello';
}
console.info('\n----- split -----\n');
console.log(gen4().next());
var g4 = gen4();
console.log(g4.next());
console.log(gen4().next());
console.log(g4.next());




