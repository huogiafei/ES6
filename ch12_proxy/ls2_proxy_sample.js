"use strict";
console.info('\n---------- GET ----------')
{
    let obj = {}
    console.log(obj.a)

    let person = {
        name: 'Eric'
    }
    var stu1 = new Proxy(person, {
        get: function (target, prop) {
            if (prop in target) {
                return target[prop]
            }
            else {
                //throw new ReferenceError(`Property ${prop} does not exist.`)
                throw new ReferenceError('Property \'' + prop + '\' does not exist.')

            }
        }
    });
    stu1.name = 'Edward'
    //console.log(stu1.age)

    var stu2 = Object.create(stu1)
    //console.log(stu2.sex) //Error
}

function createArray(...elements) {
    let handler = {
        get(target, propKey, receiver) {
            let index = Number(propKey);
            if (index < 0) {
                propKey = String(target.length + index)
            }
            return target[propKey]
        }
    }

    let target = [];
    target.push(...elements)
    return new Proxy(target, handler)
}

let array = createArray(2, 4, 6, 8)
let array2 = [1, 3, 5, 7]
console.log(array[-1], array2[-1])

console.info('\n---------- SET ----------')
let validator = {
    set: function (obj, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError("The age is not an integer")
            }
            if (value > 200 || value < 0) {
                throw new ReferenceError('The age seems invalid');
            }
        }
        obj[prop] = value
        return obj
    }
}

let student = new Proxy({}, validator);
student.sex = 'm'
//student.age = -1

console.info('\n---------- APPLY ----------')
//call , apply , 函数调用
{
    var handler = {
        apply(target, ctx, args) {
            console.log('apply')
            return Reflect.apply(...arguments)
        }
    }

    var target = function () {
        return 'I am the target'
    }
    var p = new Proxy(target, handler);
    p();
    Reflect.apply(p, null, [1, 2])
}

console.info('\n---------- HAS ----------')
{
    let obj = {
        a: 123,
        _b: 234
    }
    console.log(obj.a, obj._b)

    let handler = {
        get(target, prop) {
            if (prop[0] === '_') {
                return undefined
            } else {
                return target[prop]
            }
        },
        has(target, prop) {
            if (prop[0] === '_') {
                return false
            } else {
                return prop in target
            }
        }
    }

    var proxy = new Proxy(obj, handler)
    console.log('_b' in obj)
    Object.preventExtensions(obj);
}

console.info('\n---------- CONSTRUCT ----------')
{
    let handler = {
        construct(target, args) {
            console.log('construct')
            return new target(...args)
        }
    }
    var p = new Proxy(function () {
    }, handler)
    var p1 = new p()
}

console.info('\n---------- deleteProperty ----------')
{
    var handler = {
        deleteProperty(target, key) {
            invariant(key, 'delete');
            return true;
        }
    };

    var target = {
        _m : 'erdo',
        title:'test'
    }
    var proxy = new Proxy(target,handler)
    //delete proxy._m
    delete proxy.title
}

function invariant(key, action) {
    if (key[0] === '_') {
        throw new Error(`Invalid attempt to ${action} private "${key}" property`)
    }
}

console.info('\n---------- defineProperty ----------')
{
    var handler = {
        defineProperty(target, key, desc){
            return false
            //return target[key] = desc
        }
    }
    var foo = {};
    var proxy = new Proxy(foo,handler)
    //proxy.a = '123'
}

console.info('\n---------- getOwnPropertyDescriptor ----------')
{
    let handler = {
        getOwnPropertyDescriptor(target , key){
            if(key[0] === "_"){
                return;
            }
            return  Object.getOwnPropertyDescriptor(target,key)
        }
    }
    let target = {
        __foo : 'bar',
        name : 'hello'
    }

    let proxy = new Proxy(target,handler)
    console.log(Object.getOwnPropertyDescriptor(proxy,'__foo'))
    console.log(Object.getOwnPropertyDescriptor(proxy,'name'))
}

console.info('\n---------- getPrototypeOf() ----------')
/**
 * Object.prototype.__proto__
 * Object.prototype.isPrototypeOf
 * Object.getPrototypeOf
 * Reflect.getProtypeOf
 * instance
 */
{
    let proto = {};
    let p = new Proxy({},{
        getPrototypeOf(target){
            return proto
        }
    })
    console.log(Object.getPrototypeOf(p) === proto)
}

console.info('\n---------- isExtensible ----------')
{
    let parent = {
        name:'f',
        age:42
    }
    console.log(Object.isExtensible(parent))

    var p = new Proxy({},{
        isExtensible:function (target) {
            console.log('isExtensible')
            return true;
        }
    })
    console.log(Object.isExtensible(p))
}

console.info('\n---------- ownKeys ----------')
{
    
    let obj = {
        title:'test',
        id:'43e'
    }
    console.log(Object.keys(obj))
    let p = new Proxy(obj,{
        ownKeys:function(target){
            console.log('ownKeys')
            return ['hello','world']
        }
    })

    console.log(Object.keys(p))
}

console.info('\n---------- preventExtensions ----------')
{
    let target = {}
    //Object.preventExtensions(target)
    let p = new Proxy(target,{
        preventExtensions:function (target) {
            Object.preventExtensions(target)
            console.log('prevent extensions')
            return true
        }
    })
    Object.preventExtensions(target)
}

console.info('\n---------- setPrototypeOf ----------')




























