'use strict';
/** handler.preventExtensions() **/
console.info('---------- demo11 ----------');
var p = new Proxy({}, {
    preventExtensions: function(target) {
        console.log("called");
        Object.preventExtensions(target);
        return true;
    }
});

console.log(Object.preventExtensions(p));

var p2 = new Proxy({}, {
    preventExtensions: function(target) {
        return true;
    }
});

//Object.preventExtensions(p2);
//'preventExtensions' on proxy: trap
// returned truish but the proxy target is extensible

/** handler.setPrototypeOf() **/
console.info('---------- demo12 ----------');
var handlerReturnsFalse = {
    setPrototypeOf(target, newProto) {
        return false;
    }
};

var newProto = {};
var p2 = new Proxy({},handlerReturnsFalse);
//Object.setPrototypeOf(p2,newProto);
//'setPrototypeOf' on proxy: trap returned falsish

Reflect.setPrototypeOf(p2,newProto);

/**handler summary**/
//apply (for function call)
//get,set (props)
//construct (for the new operator)
//defineProperty (for Object.defineProperty())
//deleteProperty (for the delete operator)
//getOwnPropertyDescriptor (for Object.getOwnPropertyDescriptor())
//getPrototypeOf() (for the [[GetPrototypeOf]] internal method)
//has (for the in operator)
//isExtensible (for Object.isExtensible)
//ownKeys (Object.getOwnPropertyNames)
//preventExtensions (for Object.preventExtensions())
//setPrototypeOf (for Object.preventExtensions)


