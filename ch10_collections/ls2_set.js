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

timeCompare(1);
timeCompare(2);

function timeCompare(state){
    var find = 'aaaaaa';

    if(state == 1){
        console.time('indexOf');
        libs.indexOf(find);
        console.timeEnd('indexOf')
    }
    else{
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
var arr = [1,3,5];
var set = new Set(arr);
console.log(set);
for(let item  of set){
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