'use strict';
/** Iterator **/

console.info('---------- demo1 ----------');

function myIterator(array) {
    var nextIndex = 0;
    return {
        next() {
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
//原生自带迭代接口的三种类型: 数组，类数组对象，Set & Map
var foo = ['1', '3', '4'];
var foo_iter = foo[Symbol.iterator]();
console.log(foo_iter)

var set = new Set([2, 5, 6]);
var set_iter = set[Symbol.iterator]();
console.log(set_iter)

var map = new Map([['a', 10], ['b', 20]]);
var map_iter = map[Symbol.iterator]();
console.log(map_iter)

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
                next() {
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

console.info('\n---------- demo5 ----------')

class RangeIterator {
    constructor(start, stop) {
        this.value = start;
        this.stop = stop
    }

    [Symbol.iterator]() {
        return this;
    }

    next() {
        var value = this.value;
        if (value < this.stop) {
            this.value++
            return {done: false, value: value}
        } else {
            return {done: true, value: undefined}
        }
    }
}

function range(start, stop) {
    return new RangeIterator(start, stop)
}

let r = range(0, 4)
for (let item of r) {
    console.log(item)
}

console.info('\n---------- demo6 ----------')

//自定义Symbol.iterator方法1
function Obj(val) {
    this.value = val;
    this.next = null
}

Obj.prototype[Symbol.iterator] = function () {
    var iterator = {
        next: next
    };
    var current = this;

    function next() {
        if (current) {
            var value = current.value;
            current = current.next;
            return {
                done: false,
                value: value
            }
        } else {
            return {
                done: true
            }
        }
    }

    return iterator
}

{
    let [one, two, three] = [new Obj(1), new Obj(2), new Obj(3)]
    console.log(one, two, three)
    one.next = two
    two.next = three

    for (let item of one) {
        console.log(item)
    }
}

//自定义Symbol.iterator方法2
let obj2 = {
    data: ['hello', 'world'],
    [Symbol.iterator]() {
        const self = this;
        let index = 0;
        return {
            next() {
                if (index < self.data.length) {
                    return {
                        value: self.data[index++],
                        done: false
                    }
                } else {
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
}

for (let item of obj2) {
    console.log(item)
}

console.info('\n---------- demo7 ----------')
//类数组对象（键值名和length属性）
//NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
//NodeList.prototype[Symbol.iterator] = [][Symbol.iterator];
{
    let obj = {
        0: 'a',
        1: 'b',
        2: 'c',
        length: 2,
        [Symbol.iterator]: Array.prototype[Symbol.iterator]
    }
    console.log(obj[Symbol.iterator])
    for (let i of obj) {
        console.log(i)
    }

    let obj2 = {};
    //Error : Result of the Symbol.iterator method is not an object
    //obj2[Symbol.iterator] = () => 1;
    //console.log([...obj2])
}




