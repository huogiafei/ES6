'use strict';
var obj = new Proxy({}, {
    get: function (target, key, receiver) {
        console.log(`getting ${key}!`);
        return Reflect.get(target, key, receiver);
    },
    set: function (target, key, value, receiver) {
        console.log(`setting ${key}!`);
        return Reflect.set(target, key, value, receiver);
    }
});

var obj2 = {
    show:show
}

var Obj3 = function(name){
    var foo = function(){
        console.log('100');
    }
    return foo();
}

function show(){
    console.log('show Obj');
}

console.info('---------- demo1 ----------');
obj.count = 1;
console.log(++obj.count);

/*7 inner method*/
/**1**/
console.info('---------- demo2 ----------');
console.log(obj.count);//[Get]
/**2**/
console.log(++obj.count);//[Set]
/**3**/
console.log(obj.hasOwnProperty('count'));//[hasProperty];
/**4**/
for(let key in obj){console.log(key);}//[Enumerate]
/**5**/
console.log(obj.__proto__);//[GetPrototypeOf]
console.log(Object.getPrototypeOf(obj));//[GetPrototypeOf]
/**6**/
obj2.show();//[Call]
show.call(obj2);//[Call]
/**7**/
var obj3 = new Obj3('o3');//[Construct]


