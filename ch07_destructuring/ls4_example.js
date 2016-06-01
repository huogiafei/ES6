'use strict';
//demo1 : iterator map
console.info('---------- demo1 ----------');
var data = new Map();
data.set('window', 'the global');
data.set('$', 'JQuery');
data.set('document', 'the document');
for (let [k,v] of data) {
    console.log(`${k} : ${v}`);
}
console.info('----- split -----');
for (let [,v] of data) {
    console.log(v);
}

//demo2 return multiply values
console.info('---------- demo2 ----------');
function multiVals() {
    return {             //return obj
        a: 1,
        b: 2
    }
}
var temp1 = multiVals();
console.log(temp1.a, temp1.b);

function multiVals2() {
    return [1, 2];       //destructuring
}
let [a,b] = multiVals2();
console.log(a, b);

function multiVals3(k) { //special method : CPS
    k(1, 2);
}
multiVals3((foo, bar) => console.log(foo, bar));

(function(a,b){
    console.log(a, b);
})(3,4);

//demo3 : import commonJS module
/*TODO*/

