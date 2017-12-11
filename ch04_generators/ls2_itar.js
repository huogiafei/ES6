"use strict";
//demo1
console.info('---------- demo1 ----------');

function* range(start, stop) {
    for (var i = start; i <= stop; i++) {
        yield i;
    }
}

console.log(range(1, 5));
for (var item of range(6, 10)) {
    console.log(item);
}

//demo2:split arr
console.info('---------- demo2 ----------');
const labels = ['cool', 'fun', 'hot', 'latest', 'most', 'popular'];

function splitIntoRows(arr, rowLength) {
    var rows = [];
    for (var i = 0, len = arr.length; i < len; i += rowLength) {
        rows.push(arr.slice(i, i + rowLength));
    }
    return rows;
}

console.log(splitIntoRows(labels, 2));

function* splitIntoRows2(arr, rowLength) {
    for (var i = 0, len = arr.length; i < len; i += rowLength) {
        yield arr.slice(i, i + rowLength);
    }
}

var p3 = splitIntoRows2(labels, 2);
for (let item of p3) {
    console.log(item);
}

//demo3
console.info('\n---------- demo3 ----------')

let arr = [1, [2, 3], [4, 5, 6], 7]
//console.log(...arr)
//arrSlice1(arr)
console.log(arrSlice1(arr))


function arrSlice1(arr, result = []) {
    for (var i = 0; i < arr.length; i++) {
        //console.log(arr[i])
        if (typeof arr[i] === 'object') {
            arrSlice1(arr[i], result)
        } else {
            result.push(arr[i])
        }
    }
    return result
}

let flat = function* (a) {
    let length = a.length;
    for (let i = 0; i < length; i++) {
        var item = a[i];
        if (typeof item !== 'number') {
            yield* flat(item)
        } else {
            yield item;
        }
    }
}

for (let f of flat(arr)) {
    console.log(f)
}

console.log(...flat(arr))






