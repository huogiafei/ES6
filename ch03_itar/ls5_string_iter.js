'use strict';
/** String Iterator **/

console.info('\n ---------- demo1 ----------');
var foo = 'Hello world';
console.log(typeof foo[Symbol.iterator]);
var iter = foo[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

console.info('\n---------- demo2 ----------')
//modify str [Symbol iterator]
//_first
var bar = new String('abc');
//var bar = 'abc';
bar[Symbol.iterator] = function () {
    return {
        next: function () {
            console.log('_first: ' + this._first);
            if (this._first) {
                this._first = false;
                return {value: "bye", done: false};
            } else {
                return {done: true};
            }
        },
        _first: true
    };
};
console.log([...bar]);

