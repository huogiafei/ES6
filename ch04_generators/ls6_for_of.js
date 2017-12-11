'use strict';
/** for...of **/

console.info('\n---------- demo1 ----------')

function* test() {
    yield 1;
    yield 2;
    yield 3;
    return 0;
}

let t = test()
console.log(...t)

console.info('\n---------- demo2 ----------')

//demo2
function* fibonacci() {
    let [prev, cur] = [0, 1];
    while (1) {
        [prev, cur] = [cur, prev + cur];
        yield cur;
    }
}

let arr = [];
for (let n of fibonacci()) {
    if (n > 100) break;
    arr.push(n);
}
console.log(arr);


console.info('\n---------- demo3 ----------')
/*add for...of for Object*/
let dog = {
    name: 'cookie',
    color: 'brown',
    age: 0.6
}

//1
function* foo(obj) {
    let propKeys = Reflect.ownKeys(obj);
    console.log(propKeys);
    for (let propKey of propKeys) {
        yield [propKey, obj[propKey]];
    }
}

for (let [key, value] of foo(dog)) {
    console.log(key + ':' + value);
}

console.info('\n----- split -----');

//2
function* bar() {
    //let propKeys = Reflect.ownKeys(this);
    console.log(Reflect.ownKeys(this));
    let propKeys = Object.keys(this);
    for (let propKey of propKeys) {
        yield [propKey, this[propKey]];
    }
}

dog[Symbol.iterator] = bar;
for (let [key, value] of dog) {
    console.log(key + ':' + value);
}