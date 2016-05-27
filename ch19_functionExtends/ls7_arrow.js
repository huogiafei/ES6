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

    const isEven = n=>n % 2 == 0;
    const square = n =>n * n;
    const cube = n =>n * n * n;

    console.log(isEven(3), square(3), cube(5));
}

//sort
console.info('---------- demo3 ----------');
{
    const sortArrays = [3, 20, 1, 43, 56];
    //es5
    let mySort = function (arr) {
        return arr.sort(function (a, b) {
            console.log(a, b);
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
    var temp = () => {console.log(this.id)};
    temp.call({id:'abc'});
    temp();

