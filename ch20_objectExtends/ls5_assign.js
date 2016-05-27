'use strict';
/** Object.assign **/

//demo1
console.info('---------- demo1 ----------');
var target = {a:'N'};
var src1 = {b:'B',a:'C'};//overwrite a
var src2 = {c:'A'};

console.log('a'.concat(src1,src2));
console.log(Object.assign(target));
console.log(Object.assign(2));
console.log(Object.assign(target, src1, src2));

//demo2
console.info('---------- demo2 ----------');
//Cannot convert undefined or null to object
//console.log(Object.assign(undefined));
//console.log(Object.assign(null));
console.log(Object.assign(target,undefined));
console.log(Object.assign(target,null));

//demo3
console.info('---------- demo3 ----------');
var v1 = 'hello';//String
var v2 = true;
var v3 = 10;
var obj1 = Object.assign({},v1,v2,v3);
var obj2 = Object.assign(v1,v2,v3);
var obj3 = Object.assign(v2,v1,v3);
var obj3 = Object.assign(v3,v1,v2);
console.log(obj1);
console.log(obj2);
console.log(obj3);

//demo4
console.info('---------- demo4 ----------');
console.log(Object.assign({b:"c"},
    Object.defineProperty({},'invisible',{
        enumerable:false,
        value:'hello'
    })
));
console.log(Object.assign({a:'b'},{[Symbol('c')]: 'd'}));

//demo5:careful
var obj1 = {a:{b:2}};
var obj2 = Object.assign({},obj1);

obj1.a.b = 200;
console.log(obj2.a.b);

var foo = {a:{b:1,c:2}};
var bar = {a:'foobar'};
console.log(Object.assign(foo, bar));

/*SAMPLE*/
//sample1:add props
class Point{
    constructor(x,y) {
        Object.assign(this,{x,y});
    }
}

//sample2:add methods
Array.prototype.slice = function(){};//es5
Object.assign(Array.prototype,{ //es6
    slice(arg1,arg2){}
})

//sample3:clone
var dog = {
    name:'cookie',
    age:0.6
}
function clone(origin){
    return Object.assign({},dog);
}

var dog2= clone(dog);
dog2.name = 'bunny';
console.log(dog.name,dog2.name);

//sample4: merge objects
const merge = (...sources) => Object.assign({}, ...sources);
console.log(merge(obj1,dog));

//sample5
const DEFAULTS = {
    logLevel: 0 ,
}
function processContent(opts){
    let options = Object.assign({},DEFAULTS,options);
}

