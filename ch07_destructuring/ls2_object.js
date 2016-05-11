'use strict';
//demo1
console.info('---------- demo1 ----------');
var robotA = {name: 'gogo'};
var robotB = {name: 'tony'};
var {name:nameA} = robotA;
var {name:nameB} = robotB;
console.log(nameA);
console.log(robotA);

//demo2
console.info('---------- demo2 ----------');
var {robotC, robotD} ={robotC: 'jenny', robotD: {'name': '123', 'age': '123'}};
console.log(robotC);
console.log(robotD);

//demo3
console.info('---------- demo3 ----------');
var temp = {
    arrayData: [ '1a', {
        name: 'kin'
    }]
};
var {arrayData:[first,{name}]} = temp;
console.log(first,name);

//demo4
//{abc} = {};
//({abc}= {abc:10}); //error in strict mode
//console.log(abc);



