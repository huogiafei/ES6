'use strict';
/** props name **/
//sample1
console.info('\n---------- demo1 ----------')
var b = 'nt';
let obj = {};
obj.foo = true;
obj[1 + 2 + 'a' + b] = 123;
for (let p in obj) {
    console.log(p);
}


console.info('\n---------- demo2 ----------')
//sample2
let propStr = "bar2"
let foo = {
    ['b' + 'a' + 'r']() {
        return 'hello world.';
    },
    [propStr]:'婚礼的祝福',
    'street name':['弥敦道','歌和老街'],
    ['h'+'ello']: () => 'song'

}
console.log(foo.bar(),foo[`${propStr}`],...(foo['street name']),foo.hello());

console.info('\n---------- demo3 ----------')
//sample3
var a = 1;
var aObj = {a};
var tmp = 'c';
var c = 2;
//var bObj = {[tmp]} //SyntaxError
