"use strict";
/**
 * const init
 */
const arr = ['a', 'b', 1, 2, 3];
const obj = {
    name: 'Cookie',
    age: 0.5
}
const str = 'hello';
const myMap = new Map();
myMap.set('type', 'map');
myMap.set('val', '12390');

const mySet = (['a', 't', 32]);

/*demo1 : for(var i = ...; i< len ; i++)*/
console.info('\n---------- demo1 ----------');
for (let i = 0, len = arr.length; i < len; i++) {
    //do something
}

/*demo2 : for in*/
console.info('\n---------- demo2 ----------');
for (let item in arr) {
    console.log(item);
}

for (let item in obj) {
    console.log(item);
}

/*demo3 : forEach(ES5)*/
console.info('---------- demo3 ----------');
arr.forEach(function (item) {
    //do something
    //no break ,continue
});

//obj.forEach is not a function
/*obj.forEach(function(item){
 console.log(item);
 })*/

/*demo4 : for of*/
console.info('---------- demo4 ----------');
for (let item of arr) {
    console.log(item);
}

//obj[Symbol.iterator] is not a function
/*for(let item of obj){
 console.log(item);
 }*/

console.info('----- split -----');

function forOf(arr) {
    for (let item of arr) {
        console.log(item);
    }
}

forOf(str);
forOf(myMap);
console.log(myMap.keys());

for (var [k, v] of myMap) {
    console.log(`key:${k} ,value:${v}`);
}

forOf(mySet);

/*demo5 : obj props enum */
console.info('---------- demo5 ----------');
//method1 for...in
for (var prop in obj) {
    console.log(prop + ":" + obj[prop]);
}

//method2 for...of + Object.keys
for (var key of Object.keys(obj)) {
    console.log(key + ':' + obj[key]);
}

console.info('\n---------- My Iterator ----------')

function myIterator(array) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < array.length ?
                {value: array[nextIndex++], done: false} :
                {value: undefined, done: true}
        }
    }
}

{
    let arr = [2,4,6];
    let myIter = myIterator(arr)
    console.log(myIter.next())
    console.log(myIter.next())
    console.log(myIter.next())
    console.log(myIter.next())
}










