'use strict';
/*proxy handler 14 methods*/
/** demo1:handler.apply() **/
var p = new Proxy(function () {
}, {
    apply: function (target, thisArg, argumentsList) {
        console.log(`called:${argumentsList.join(",")}`);
    }
});
p(1, 2, 3);
var p2 = new Proxy({}, {
    apply: function (target, thisArg, argumentsList) {
        console.log(`called:${argumentsList.join(",")}`);
    }
});
p2.color = 'white';
p2.show = function () {
    console.log(this.color)
};

/** demo2:handler.construct() **/
console.info('---------- demo2 ----------');
var p3 = new Proxy(function () {
}, {
    construct: function (target, args, newTarget) {
        console.log(('called' + args.join(',')));
        return {value: args[0] * 100};
    }
});
console.log(new p3(2).value);
var p4 = new Proxy(function () {
}, {
    construct: function (target, args, newTarget) {
        //return 1;//TypeError: 'construct' on proxy: trap returned non-object
        return {val: 1}
    }
});
console.log(new p4().val);

/** demo3:handler.defineProperty **/
console.info('---------- demo3 ----------');
var p5 = new Proxy({}, {
    defineProperty: function (target, prop, desc) {
        console.log('called ' + prop);
        return true;
    }
});
var desc = {configurable: true, enumerable: true, value: 19};
Object.defineProperty(p5, 'a', desc);
console.log(p5.a);

var p6 = {
    name: '123'
}
//Object.defineProperty(p6,'age','20');//Property description must be an object
var desc2 = {configurable: false, enumerable: true, value: 19};//enumerable:false(default)
Object.defineProperty(p6, 'age', desc2);
console.log(p6);
//p6.age = 21;//Cannot assign to read only property 'age' of object '#<Object>'

/** demo4:handler.deleteProperty() **/
console.info('---------- demo4 ----------');
var p7 = new Proxy({}, {
    deleteProperty: function (target, prop) {
        console.log("called:" + prop + ' delete');
        return true;
    }
});
p7.a = 123;
delete p7.a;

/** demo5: handler get and set **/
console.info('---------- demo5 ----------');
var p8 = new Proxy({}, {
    get: function (target, prop, receiver) {
        console.log(`called: ${prop} get`);
        return 200;
    },
    set: function (target, prop, receiver) {
        console.log(`called: ${prop} set`);
        return 100;
    }
});
p8.count = 1;
console.log(p8.count);
console.log(++p8.count);

var obj3 = {};
Object.defineProperty(obj3, 'number', {
    configurable: false,
    enumerable: false,
    value: 100,
    writable: false
});
var p9 = new Proxy(obj3, {
    get: function (target, prop) {
        return 100;
        //return 20
        //'get' on proxy: property 'number' is a read-only
// and non-configurable data property on the proxy
// target but the proxy did not return its actual
// value (expected '100' but got '20')
    }
});

p9.number;

/** demo6: handler.getOwnPropertyDescriptor() **/
console.info('---------- demo6 ----------');
var p10 = new Proxy({a: 20}, {
    getOwnPropertyDescriptor: function (target, prop) {
        console.log('called:' + prop);
        return {configurable: true, enumerable: true, value: 100};
    }
});
console.log(Object.getOwnPropertyDescriptor(p10, "a").value);




