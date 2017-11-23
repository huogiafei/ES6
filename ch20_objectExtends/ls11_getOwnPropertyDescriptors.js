/**
 * ES5 : getOwnPropertyDescriptor 单个属性
 * ES7 : getOwnPropertyDescriptors
 */

console.info('\n---------- demo1 ----------')
let obj1 = {
    title: 'taotai',
    year: 2006
}

Object.defineProperty(obj1, 'secret', {
    value: 'm',
    writable: false,
    enumerable: false,
    configurable: false
});

console.log(Object.getOwnPropertyDescriptors(obj1))

function myGetOwnPropertyDescriptors(obj) {
    let result = {}
    for (let item of Reflect.ownKeys(obj)) {
        result[item] = Object.getOwnPropertyDescriptor(obj, item)
    }
    return result
}

//console.log(myGetOwnPropertyDescriptors(obj1))

console.info('\n---------- demo2 ----------')
const source = {
    set foo(val) {
        console.log(val)
    },
    bar: function (val) {
        console.log(val)
    }
};

const target = {}
Object.assign(target, source)
//target.foo('hello') target.foo is not a function
target.bar('hello')
console.log(Object.getOwnPropertyDescriptor(target, 'foo'))
console.log(Object.getOwnPropertyDescriptor(target, 'bar'))

//defineProperties & getOwnPropertyDescriptors
const target2 = {}
Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source))
console.log(Object.getOwnPropertyDescriptor(target2, 'foo'))




