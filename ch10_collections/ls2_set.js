'use strict';
//demo1 set optimised
console.info('---------- demo1 ----------');
let libs = [];
for (let i = 0; i < 100; i++) {
    var tmp = getRandomName(6, 'a');
    libs.push(tmp);
}

let libsSet = new Set(libs);
//console.log(libsSet);
//console.log(libs);

function getRandomName(len, start) {
    let [startCode,result] = [start.charCodeAt(0), ''];
    for (let i = 0; i < len; i++) {
        var temp = Math.floor(Math.random() * len);
        result += String.fromCharCode(startCode + temp) + "";
    }
    return result;
}

const type = {
    array: Symbol.for('Array'),
    set: Symbol.for('Set')
}

timeCompare(type.array);
timeCompare(type.set);

function timeCompare(state) {
    var find = 'aaaaaa';

    if (state == type.array) {
        console.time('indexOf');
        libs.indexOf(find);
        console.timeEnd('indexOf')
    }
    else {
        console.time('has');
        libsSet.has(find);//more faster
        console.timeEnd('has');
    }
}

/*but Set no index*/
console.log(libs[2]);
console.log(libsSet[2]);//undefined
console.log(libs.length == libsSet.size);//true,maybe false

//demo2 the iter order
console.info('---------- demo2 ----------');
var arr = [1, 3, 5];
var set = new Set(arr);
console.log(set);
for (let item  of set) {
    console.log(item);
}

//demo3 Set method
console.info('---------- demo3 ----------');
set.add(1);
console.log(set);
console.log(set.has(3));
set.delete(5);
console.log(set);

//for fallback Map
console.log(set.keys());
console.log(set.values());
console.log(set.entries());

console.log(set.clear());
console.log(set);

//demo4
console.info('---------- demo4 ----------');
var set2 = new Set([1, 4, 'a']);
console.log([...set2]);

//demo5:unique Array
console.info('---------- demo5 ----------');
var array = [1, 3, 4, 5, 3, {}, 2, 4, '5', 6, 7, 8, NaN, 9, 4, 2, 3, 1, 10, NaN, {}];
console.log(NaN === NaN);
console.log([...new Set(array)]);

//demo6 convert to Array
console.info('---------- demo6 ----------');
//1
var set3 = new Set([1, 4, 6]);
console.log(Array.from(set3));
console.log([...set3]);

console.log(set3.forEach);
console.log(Set.prototype[Symbol.iterator] === Set.prototype.values);
console.log(Set.prototype[Symbol.iterator] === Set.prototype.keys);
console.log(Set.prototype[Symbol.iterator] === Set.prototype.entries);