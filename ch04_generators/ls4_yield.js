'use strict';

//demo1
console.info('---------- demo1 ----------');
function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

var hw = helloWorldGenerator();
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());

for (let item of helloWorldGenerator()) {
    console.log(item);
}

//delay run
console.info('---------- demo2 ----------');
function* foo() {
    console.log('started');
}

var bar = foo();
setTimeout(function () {
    bar.next();
}, 2000);

//SyntaxError
/*
(function(){
    yield 1;
})();*/

//allowable but do nothing
(function* (){
    yield 1;
})();

