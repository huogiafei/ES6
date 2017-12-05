'use strict';

console.info('\n---------- demo1 ----------')
{
    var myIterable = {}
    myIterable[Symbol.iterator] = function* () {
        yield 1;
        yield 2;
        yield 3;
    };
    console.log([...myIterable])
}

console.info('\n---------- demo2 ----------')
{
    let obj = {
        * [Symbol.iterator]() {
            yield 'hello';
            yield 'world'
        }
    }
    
    for(let i of obj){
        console.log(i)
    }
}
