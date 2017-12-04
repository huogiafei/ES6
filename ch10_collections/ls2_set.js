'use strict';
//demo1 set optimised
console.info('\n---------- demo1 ----------');
{
    let array = [1, 3, 4, 3, 5, '5', null, undefined, NaN, NaN, {}, {}]
    console.log([...new Set(array)])
}

//demo2 the iter order 遍历顺序
console.info('\n---------- demo2 ----------');
{
    let arr = [1, 3, 5];
    let set = new Set(arr);
    console.log(set);
    for (let item  of set) {
        console.log(item);
    }
}

//demo3 Set method 属性与方法
console.info('\n---------- demo3 ----------');
{
    let set = new Set([1, 3, 5]);
    set.add(1);
    console.log(set);
    console.log(set.has(3));
    set.delete(5);
    console.log(set);

//for fallback Map
    console.log(set.keys());
    console.log(set.values());
    console.log(set.entries());// 键名和键值相同

    console.log(set.clear());
    console.log(set);

    console.log(Set.prototype[Symbol.iterator] === Set.prototype.values)

}

//demo4 数组去重
console.info('\n---------- demo4 ----------');
{
    //es6
    let arr = [1, 4, 'a', 4, NaN, NaN]
    let set2 = new Set(arr);
    console.log([...set2]);
    console.log(Array.from(set2))

    //es5
    let dedupe = function (arr) {
        var copy = arr;
        for (var i = 0; i < copy.length; i++) {
            var target = copy[i]
            for (var j = i + 1; j < copy.length; j++) {
                if (target === copy[j]) {
                    arr.splice(j, 1)
                }
            }
        }
        return arr
    }
    console.log(dedupe(arr))
}

//demo5:unique Array
console.info('\n---------- demo5 ----------');
{
    /*set内部 两个NaN是相等的*/
    var array = [1, 3, 4, 5, 3, {}, 2, 4, '5', 6, 7, 8, NaN, 9, 4, 2, 3, 1, 10, NaN, {}];
    console.log(NaN === NaN);
    console.log([...new Set(array)]);
    /*set内部 对象又是不相等的*/
    let set = new Set()
    set.add({})
    console.log(set)
    set.add(new Object())
    console.log(set)
}

//demo6 convert to Array
console.info('\n---------- demo6 ----------');
//1
var set3 = new Set([1, 4, 6]);
console.log(Array.from(set3));
console.log([...set3]);

console.log(set3.forEach);
console.log(Set.prototype[Symbol.iterator] === Set.prototype.values);
console.log(Set.prototype[Symbol.iterator] === Set.prototype.keys);
console.log(Set.prototype[Symbol.iterator] === Set.prototype.entries);

//demo7
console.info('\n---------- demo7 ----------')
let libs = [];
for (let i = 0; i < 100; i++) {
    var tmp = getRandomName(6, 'a');
    libs.push(tmp);
}

let libsSet = new Set(libs);
//console.log(libsSet);
//console.log(libs);

//生成随机6位字符（a-f）
function getRandomName(len, start) {
    let [startCode, result] = [start.charCodeAt(0), ''];
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

//比较has 和 indexOf 的执行速度
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