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
        rows.push(arr.slice(i,i+rowLength));
    }
    return rows;
}
console.log(splitIntoRows(labels,2));

function* splitIntoRows2(arr,rowLength){
    for (var i = 0, len = arr.length; i < len; i += rowLength) {
        yield arr.slice(i,i+rowLength);
    }
}

var p3 = splitIntoRows2(labels,2);
for(let item of p3){
    console.log(item);
}