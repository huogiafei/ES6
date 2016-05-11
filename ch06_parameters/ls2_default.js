"use strict";
//demo1
function foobar(foo='hello',bar='world'){
    console.log(`My name is ${foo} ${bar}`);
}
foobar();
foobar('wonderful');
foobar('Edward','Huo');

//demo2
function roundCalc(r=1,d=Math.PI*2*r){
    console.log(`this round distance is ${d}`);
}
roundCalc();

//demo3: do not use `arguments` anymore
function argsTest(r1=1,...r2){
    console.log(arguments);
}
argsTest(10,20,40);