'use strict';
/** Generator VS ES5(filter,map,foreach,every,some) **/

console.info('---------- Demo1:Foreach ----------');
const arr = [1, 2, 3, 5, 10, 21, 4];
const obj = {name: 'cookie'};
//foreach
function *foreach(arr) {
    for (let i = 0; i < arr.length; i++) {
        yield arr[i];
    }
}

/*function myForEach(arr, fun) {
 for (let item of foreach(arr)) {
 //do something
 fun(item);
 }
 }*/

/*better*/
Array.prototype.myForEach = function (fun) {
    for (let item of foreach(this)) {
        fun(item);
    }
}

arr.myForEach(show);
//obj.myForEach(show);

//Handler Function
function show(item) {
    console.log(item);
}

console.info('---------- Demo2:Map ----------');
Array.prototype.myMap = function (fun) {
    let newArray = [];
    for (let item of foreach(this)) {
        newArray.push(fun(item));
    }
    return newArray;
}

//Handler Function
function cube(item) {
    return Math.pow(item, 3);
}

console.log(arr.myMap(cube));

console.info('---------- Demo3:Filter ----------');
Array.prototype.myFilter = function (fun) {
    let newArray = [];
    for (let item of foreach(this)) {
        if (fun(item)) {
            newArray.push(item)
        }
    }
    return newArray;
};

console.log(arr.myFilter(function (item) {
    return item > 5;
}));

/**es5 syntax**/
console.info('---------- Demo4:Every ----------');
Array.prototype.myEvery = function (fun) {
    var arr = this;
    for (var i = 0; i < arr.length; i++) {
        if(!fun(arr[i])){
            return false;
        }
    }
    return true;
};

console.log(arr.myEvery(function(item){
    return item % 2 == 0; //false
    //return item > -1;   //true
}));


console.info('---------- Demo4:Some ----------');
Array.prototype.mySome = function (fun) {
    var arr = this;
    for (var i = 0; i < arr.length; i++) {
        if(fun(arr[i])){
            return true;
        }
    }
    return false;
};

console.log(arr.mySome(function(item){
    return item % 2 == 0; //true
    //return item <-1;   //false
}));







