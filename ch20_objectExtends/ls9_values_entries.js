'use strict';
/** Object.values() & Object.entries() **/

//demo1:ES5 Object.keys()
var obj = {foo:'bar',hello:'world'};
var map = new Map([['a',1],['b',3]]);
console.log(Object.keys(obj));


//demo2:ES7 Object.values
//console.log(Object.values(obj));
console.log(map.values());

//demo3:ES7 Object.values
//console.log(Object.entries(obj));
console.log(map.entries());

//demo4:entries polyfill
function* myEntries(obj){
    for(var prop in obj){
        yield [prop,obj[prop]];
    }
}

for(var item of myEntries(obj)){
    console.log(item);
}

