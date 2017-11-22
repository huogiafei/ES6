'use strict';
/** Array arrow function**/

console.info('---------- demo1 ----------');
{
    var f1 = () => 5;
    console.log(f1());
    var f2 = (x, y) => x + y;
    console.log(f2(3, 4));
    var f3 = (a, b, c) => {
        var tmp = a + b;
        return tmp - c;
    }
    console.log(f3(10, 20, 4));
}

console.info('---------- demo2 ----------');
{
    //return obj
    var sum = (a, b) => ({id: a + b, num: a - b});
    console.log(sum(2, 3));

    const isEven = n => n % 2 == 0;
    const square = n => n * n;
    const cube = n => ( n **= 3);
    console.log(isEven(3), square(3), cube(5));
}

//sort
console.info('---------- demo3 ----------');
{
    const sortArrays = [3, 20, 1, 43, 56];
    //es5
    let mySort = function (arr) {
        return arr.sort(function (a, b) {
            return a - b;
        })
    }
    console.log(mySort(sortArrays));

    //es6
    let mySort2 = (arr) => arr.sort(
        (a, b) => a - b
    );
    console.log(mySort2(sortArrays));
}

//sort warning
console.info('---------- demo4 ----------');
var id = 147;
var temp = () => {
    console.log(this.id)
};
temp.call({id: 'abc'});
temp();

//sort  & ...
console.info('\n---------- demo5 ----------')
const numbers = (...nums) => nums;
console.log(numbers(2, 4, 6, 8))

//warning
console.info('\n---------- demo6 ----------')

function foo() {
    setTimeout(() => {
        console.log(`id: ${this.id}`)
    }, 100)
}

var id = 123;
console.log(foo.call({id: 456}))

//this
console.info('\n---------- demo7 ----------')

function Time() {
    this.s1 = 0;
    this.s2 = 0;
    setTimeout(() => this.s1++, 1000)
    setTimeout(function () {
        this.s2++
    }, 1000)
}

var timer = new Time
console.log(`s1: ${timer.s1}`)
console.log(`s2: ${timer.s2}`)
setTimeout(() => console.log(`s1: ${timer.s1}`), 3100)
setTimeout(() => console.log(`s2: ${timer.s2}`), 3100)

console.info('\n---------- demo8 ----------')

function insert1(value) {
    return {
        into: function (array) {
            return {
                after: function (afterValue) {
                    array.splice(array.indexOf(afterValue), 0, value);
                    return array;
                }
            }
        }
    }
}

console.log(insert1(4).into([1,2,8,5,6]).after(8));

let insert2 = (value) => ({
    into: (array) => ({
        after: (afterValue) => {
            array.splice(array.indexOf(afterValue), 0, value)
            return array;
        }
    })
});


console.log(insert2(4).into([1,2,8,5,6]).after(8));




