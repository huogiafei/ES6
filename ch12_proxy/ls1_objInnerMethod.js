'use strict';
var obj = new Proxy({}, {
    get: function (target, key, receiver) {
        console.log(`Get ${key}!`);
        return Reflect.get(target, key, receiver);
    },
    set: function (target, key, value, receiver) {
        console.log(`Set ${key}!`);
        return Reflect.set(target, key, value, receiver);
    }
});

var obj2 = {
    show: show
}

var Obj3 = function (name) {
    var foo = function () {
        console.log('100');
    }
    return foo();
}

function show() {
    console.log('show Obj');
}

console.info('\n---------- demo1 ----------');
obj.count = 1;
console.log(++obj.count);

/*7 inner method*/
/**1**/
console.info('\n---------- demo2 ----------');
console.log(obj.count);//[Get]
/**2**/
console.log(++obj.count);//[Set]
/**3**/
console.log(obj.hasOwnProperty('count'));//[hasProperty];
/**4**/
for (let key in obj) {
    console.log(key);
}//[Enumerate]
/**5**/
console.log(obj.__proto__);//[GetPrototypeOf]
console.log(Object.getPrototypeOf(obj));//[GetPrototypeOf]
/**6**/
obj2.show();//[Call]
show.call(obj2);//[Call]
/**7**/
var obj3 = new Obj3('o3');//[Construct]

//demo3
console.info('\n---------- demo3 ----------')
{
    let proxy = new Proxy({}, {
        get: function (target, property) {
            return 'Not recognized'
        }
    })

    let obj = {}

    console.log(proxy.name)
    console.log(proxy.title, obj.title)
}

//demo4
console.info('\n---------- demo4 ----------')
{
    let target = {};
    let handler = {};
    let proxy = new Proxy(target, handler);
    target.a = 2;
    console.log(handler.a, proxy.a)
    proxy.a = 3;
    console.log(target.a, handler.a)
}

//demo5
console.info('\n---------- demo5 ----------')
{
    let proxy = new Proxy({}, {
        get: function (target, property) {
            return 20;
        }
    });
    let obj = Object.create(proxy)
    console.log(obj.time)
}

//demo6
console.info('\n---------- demo6 ----------')
{
    var handler = {
        get: function (target, name) {
            if (name === 'property') {
                return Object.prototype
            }
            return `Name: ${name}`
        },

        apply: function (target, thisBinding, args) {
            return args[0];
        },

        construct: function (target, args) {
            return {value: args[1]}
        }
    };

    var fproxy = new Proxy(function (x, y) {
        return x + y;
    }, handler)

    console.log(fproxy(1, 2)) //apply
    console.log(new fproxy(1, 2)) //construct
    console.log(fproxy.property) //get
    console.log(fproxy.foo) //get
}

/**
 * Proxy支持的拦截操作
 *
 * get(target, propKey, receiver)
 * set(target,propKey,value,receiver)
 * has(target,propKy)  //propKey in proxy ,hasOwnProperty
 * deleteProperty(target,propKey)
 * ownKeys(target)
 * getOwnPropertyDescriptor(target , propKey)
 * defineProperty(target, propKey , propDesc)
 * preventExtensions(target)
 * getPrototypeOf(target)
 * isExtensible(target)
 * setPrototypeOf(target, proto)
 * apply(target, object, args) //proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)
 * construct(target,args)
 */

console.info('\n---------- demo7 ----------')
{
    var handler = {
        get:function (target, propKey, receiver) {
            console.log('get')
            return target[propKey]
        },
        set:function (target,propKey,value,receiver) {
            console.log('set')
            target[propKey] = value
            return target
        },
        has:function (target,propKy) {
            console.log('has')
        },
        deleteProperty: function(target,propKey){
            console.log('deleteProperty')
            delete target[propKey]
            return target
        },
        ownKeys:function (target) {
            console.log('ownKeys')
            return Object.keys(target)
        }
    }
    var proxy = new Proxy({},handler)
    console.log(proxy.a)
    proxy.a = 'abc'
    console.log(proxy.a)
    console.log(Object.keys(proxy))
    delete proxy.a
    console.log(proxy.a)
}


