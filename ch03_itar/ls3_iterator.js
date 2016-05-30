'use strict';
/** Iterator **/

console.info('---------- demo1 ----------');
function myIterator(array) {
    var nextIndex = 0;
    return {
        next(){
            return nextIndex < array.length ?
            {value: array[nextIndex++], done: false} :
            {value: undefined, done: true}
        }
    }
}

var myArray = Array.from('遗弃这棵花');
var flower = myIterator(myArray);

console.log(flower.next());
console.log(flower.next());
console.log(flower.next());
console.log(flower.next());
console.log(flower.next());
console.log(flower.next());

console.info('---------- demo2 ----------');
//原生自带迭代接口的三种类型
var foo = ['1', '3', '4'];
var foo_iter = foo[Symbol.iterator]();
var set = new Set([2, 5, 6]);
var set_iter = set[Symbol.iterator]();
var map = new Map([['a', 10], ['b', 20]]);
var map_iter = map[Symbol.iterator]();
console.log(foo_iter.next(), set_iter.next(), map_iter.next());

var obj = {
    name: '369'
}
console.log(map[Symbol.iterator], obj[Symbol.iterator]);

console.info('---------- demo3 ----------');
//add iterator for Object
{
    let obj = {
        data: ['hello', 'world'],
        [Symbol.iterator]() {
            const self = this;
            let index = 0;
            return {
                next(){
                    return index < self.data.length ?
                    {value: self.data[index++], done: false} :
                    {value: undefined, done: true}
                }
            }
        }
    }

    for (let item of obj) {
        console.log(item);
    }
}

console.info('---------- demo4 ----------');
//extends form Array
{
    let myIter = {
        0: 'abc',
        1: 'mnl',
        2: 'xyz',
        a: '123',
        b: '456',
        c: '789',
        length: 6,
        [Symbol.iterator]: Array.prototype[Symbol.iterator]
    };
    for (let item of myIter) {
        console.log(item)
    }
}

