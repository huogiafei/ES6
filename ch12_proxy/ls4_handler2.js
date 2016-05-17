'use strict';
/** demo6:handler.getPrototypeOf() **/
console.info('---------- demo6 ----------');
var obj = {};
var luckyNum = {};
var handler = {
    getPrototypeOf(target){
        console.log(target === obj);
        console.log(this === handler);
        return luckyNum;
    }
};
var p = new Proxy(obj, handler);
console.log(Object.getPrototypeOf(p) === luckyNum);

/**5 ways trigger getPrototypeOf**/
console.info('---------- demo6 ----------');
var obj2 = {};
var p2 = new Proxy(obj2,{
    getPrototypeOf(target){
        return Array.prototype;
    }
});
console.log(
    Object.getPrototypeOf(p2) === Array.prototype,
    Reflect.getPrototypeOf(p2) === Array.prototype,
    p2.__proto__ == Array.prototype,
    Array.prototype.isPrototypeOf(p2),
    p2 instanceof Array
)

/** Two kinds of Exception **/
console.info('---------- demo7 ----------');
var obj3 = {};
var p3 = new Proxy(obj,{
   getPrototypeOf: function(target){
       return 'foll'
   }
});
//Object.getPrototypeOf(p3);
//'getPrototypeOf' on proxy: trap returned neither object nor null
var obj4 = Object.preventExtensions({});
var p4 = new Proxy(obj4,{
    getPrototypeOf(target){
        return {};
    }
});
//Object.getPrototypeOf(p4);
//'getPrototypeOf' on proxy: proxy target is non-extensible but the trap did not return its actual prototype

/** handler:has()**/
console.info('---------- demo8 ----------');
var dog = {
    name:'cookie'
}
console.log('name' in dog);
var p5 = new Proxy({},{
    has:function(target){
        return false;
    }
});
p5.color = 'green';
console.log('color' in p5);

var obj5 = {b:'123'};
Object.preventExtensions(obj5);
var p6 = new Proxy(obj5,{
    has:function(target){
        //return false;
        //'has' on proxy: trap returned falsish for property 'b' but the proxy target is not extensible

        return true;
    }
});
console.log("b" in p6);

/** handler.isExtensible() **/
console.info('---------- demo9 ----------');
var p7 = new Proxy({},{
    isExtensible:function(target){
        console.log('p7 has called');
        return true;

        //return false
        //'isExtensible' on proxy: trap result does not reflect extensibility of proxy target (which is 'true')
    }
})
Object.isExtensible(p7);

/** handler.ownKeys **/
console.info('---------- demo10 ----------');
var tmp = {a:123,b:234,c:345};
console.log(Object.getOwnPropertyNames(tmp));
var p8 = new Proxy({},{
    ownKeys: function(target) {
        console.log('called');
        return ["a", 'b'];
        //must return an array with only string and symbol elements
        //error:true,false,undefined,null,{},[]}
    }
});
console.log(Object.getOwnPropertyNames(p8));





