'use strict';
/** Object.assign
 * 对象的合并
 * **/

//demo1
console.info('---------- demo1 ----------');
var target = {a: 'N'};
var src1 = {b: 'B', a: 'C'};//overwrite a
var src2 = {c: 'A'};

console.log('a'.concat(src1, src2));
console.log(Object.assign(target));
console.log(Object.assign(2));
console.log(Object.assign(target, src1, src2));

//demo2
console.info('\n---------- demo2 ----------');
//Cannot convert undefined or null to object
//console.log(Object.assign(undefined));
//console.log(Object.assign(null));
console.log(Object.assign(target, undefined));
console.log(Object.assign(target, null));

//demo3
console.info('\n---------- demo3 ----------');
var v1 = 'hello';//String
var v2 = true;
var v3 = 10;
var obj1 = Object.assign({}, v1, v2, v3);
var obj2 = Object.assign(v1, v2, v3);
var obj3 = Object.assign(v2, v1, v3);
var obj3 = Object.assign(v3, v1, v2);
console.log(obj1);
console.log(obj2);
console.log(obj3);

//chrome run
console.log(Object(true)) // {[[PrimitiveValue]]: true}
console.log(Object(1)) //{[[PrimitiveValue]]: 1}
console.log(Object('abc')) // {0: "a", 1: "b", 2: "c", length: 3, [[PrimitiveValue]]: "abc"}

//demo4
console.info('\n---------- demo4 ----------');
console.log(Object.assign({b: "c"},
    Object.defineProperty({}, 'invisible', {
        enumerable: false,
        value: 'hello'
    })
));
console.log(Object.assign({a: 'b'}, {[Symbol('c')]: 'd'}));

//demo5:careful
console.info('\n---------- demo5 ----------')
var obj1 = {a: {b: 2}};
var obj2 = Object.assign({}, obj1);

obj1.a.b = 200;
console.log(obj2.a.b);

var foo = {a: {b: 1, c: 2}};
var bar = {a: 'foobar'};
console.log(Object.assign(foo, bar));

console.log(Object.assign([1, 2, 3], [5, 6]))


console.info('\n---------- demo6 ----------')

/*SAMPLE*/

//sample1:add props
class Point {
    constructor(x = 0, y = 0) {
        Object.assign(this, {x, y});
    }
}

var p1 = new Point()
console.log(p1)

//sample2:add methods
Array.prototype.slice = function () {
};//es5
Object.assign(Array.prototype, { //es6
    slice(arg1, arg2) {
    }
})

//sample3:clone
var dog = {
    name: 'cookie',
    age: 0.6,
    other: {
        item: 1
    }
}
const clone = (origin) => Object.assign({}, dog);

var dog2 = clone(dog);
dog2.name = 'bunny';
dog2.other.item = 2 //浅层复制

console.log(dog.name, dog2.name);
console.log(dog.other.item, dog.other.item)

//sample4: merge objects
const merge = (...sources) => Object.assign({}, ...sources);
console.log(merge(obj1, dog));

//sample5
const DEFAULTS = {
    logLevel: 0,
}

function processContent(opts) {
    let options = Object.assign({}, DEFAULTS, options);
}

