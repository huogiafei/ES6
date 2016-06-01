'use strict';
//demo1: 7 type
console.info('---------- demo1 ----------');
/*undefined,null,Boolean,Number,String,Object*/
/*ES6 : Symbol*/
/*funny memory method: unn(SC2),boss*/
console.log(`'u','n','N','B','S','O','S'`);
console.log(`undefined,null,Number,Boolean,String,Object,Symbol`);
console.log(`UNN,BOSS`);

//demo2:funny random prop name
console.info('---------- demo2 ----------');
var man = {
    name:'man'
}
var funnyProp = getRandomName(8);
man[funnyProp] = '123';
for(let k of Object.keys(man)){
    console.log(`${k},${man[k]}`);
}

function getRandomName(len){
    let [startCode,result] = ['a'.charCodeAt(0),''];
    for(let i = 0;i<len;i++){
        var temp = Math.floor(Math.random()*len);
        result += String.fromCharCode(startCode+temp)+"";
    }
    return result;
}

//demo3；Symbol
console.info('---------- demo3 ----------');
let mySymbol = Symbol();
console.log(mySymbol);
man[mySymbol] = '456';
console.log(typeof mySymbol);
mySymbol = 'a';
console.log(man[mySymbol]);
console.log(Symbol('test') == Symbol('test'));

//demo4:Symbol scope
console.info('---------- demo4 ----------');
{
    var dog = {};
    let dogSymbol = Symbol();
    dog[dogSymbol] = 'cookies';
    console.log(dog[dogSymbol]);
}

//demo5: Symbol parse into String
var sym = Symbol('u3');
//console.log(sym + '');//Cannot convert a Symbol value to a string

//demo6: Symbol get method
console.info('---------- demo6 ----------');
{
    //m1:Symbol()
    console.log(typeof Symbol());

    //m2:Symbol.for(string) symbol register
    console.log(Symbol.for('abc'));

    //m3:Symbol.iterator
}

//demo7: other
console.info('---------- demo7 ----------');
{
    let round = {
        type:'ellipse',
        x:10,
        y:20,
        [Symbol('isMoving')]:false
    }
    console.log(Object.keys(round));
    console.log(Object.getOwnPropertyNames(round));
    console.log(Object.getOwnPropertySymbols(round));
    console.log(Reflect.ownKeys(round));

}