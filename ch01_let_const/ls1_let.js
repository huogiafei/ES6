"use strict";

/**basic**/
//demo1
console.info('---------- demo1 ----------');
var arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
console.log(i)

//demo2
console.info('---------- demo2 ----------');
for (var i = 0; i < arr.length; i++) {
    setTimeout(function () {
        console.log('var: ' + i);
    }, 10);
}

//node6:throw error
/*for (var i = 0; i < arr.length; i++) {
    setTimeout((function (j) {
        console.log('var2: ' + j);
    })(i), 10)
}*/

for (let j = 0; j < arr.length; j++) {
    setTimeout(function () {
        console.log('let: ' + j);
    }, 10)
}

/** 不存在变量提升 **/
//demo3
console.info('---------- demo3 ----------');
console.log(`foo: ${foo}`);
//console.log(`bar: ${bar}`); //not defined
var foo = 3;
let bar = 1;

/** 暂时性死区 **/
//demo4
console.info('---------- demo4 ----------');
var tmp = 234;
if (1) {
    tmp = 'abc';
    //let tmp = 1; //tmp is not defined
    //const tmp =1; //the same as let
}

function car(x = y, y = 2) {
    return [x, y];
}
function toon(x = 2, y = x) {
    return [x, y];
}
//car();//y not defined
toon();

/** 不允许同作用域下声明同一变量**/
(function fun1() {
    let f = 1;
    var f = 2; //Identifier 'f' has already been declared
})();
