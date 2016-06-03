'use strict';

//demo1
console.info('---------- demo1 ----------');
function *foo() {
    try {
        var x = yield 3;
        console.log( "x: " + x ); // may never get here!
    }
    catch (err) {
        console.log( "Error: " + err );
    }
}

var test = foo();
test.next();
test.next();
test.next();

//demo2
console.info('---------- demo2 ----------');
function* concat(iter1,iter2) {
    for(let val of iter1){
        yield val;
    }
    for(let val of iter2){
        yield val;
    }
}

function* concat2(iter1,iter2){
    yield* iter1;
    yield* iter2;
}

function* concat_copy(iter1,iter2){
    yield* concat2(iter1,iter2);
}

{
    const [a1,a2] = [[1,2,3],[4,5,6]];

    for(let val of concat(a1,a2)){
        console.log(val);
    }

    console.info('\n----- split -----');

    for(let val of concat2(a1,a2)){
        console.log(val);
    }

    console.info('\n----- split -----');

    for(let val of concat_copy(a1,a2)){
        console.log(val);
    }
}

//demo3
{
    let myIter = {
        num : [1,4,56,7,8,5,3,2,1,5,4,7]
    }
    let myiter2 = {};
    myIter[Symbol.iterator] = function* (){
        console.log(this);
        yield* this.num;
    };
    console.log([...myIter]);
}
