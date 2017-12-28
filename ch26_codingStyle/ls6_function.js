'use strict';
console.info('\n---------- 简单函数尽量使用箭头函数 ----------');
(() => {
    console.log('Hello World')
})();

//bad
[2, 4, 6].map(function (x) {
    return x * x
});

//good
[2, 4, 6].map((x) => {
    return x * x
});

//best
[2, 4, 5].map(x => x * x);

console.info('\n---------- 箭头取代Function.prototype.bind, 不应再用self/_this/that绑定 this----------');
// bad
const self = this;
const boundMethod = function (...params) {
    return method.apply(self, params);
}
// acceptable
const boundMethod = method.bind(this);
// best
const boundMethod = (...params) => method.apply(this, params);

console.info('\n---------- ，放在最后一个参数，布尔值不可以直接作为参数 ----------')

//bad
function divide(a, b, option = false) {

}

//good
function divide(a, b, {option = false} = {}) {

}

console.info('\n---------- 用rest(...)代替arguments ----------')
//argument是一个类似数组的对象
//rest可以提供一个真正的数组

//bad
function concatAll() {
    let args = Array.prototype.slice.call(arguments);
    return args.join('')
}

//good
function concatAll2(...args) {
    return args.join('')
}

console.info('\n---------- 函数参数使用默认值 ----------')
//bad
function handler(opts) {

}

//good
function handler2(opts = {}) {

}




