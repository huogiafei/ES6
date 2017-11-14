'use strict';

const foobar = "Hello World!";

//demo1 ES5 checkInclude
console.info('---------- demo1 ----------');
console.log(foobar.indexOf('a'));
console.log(foobar.indexOf('o'));

//demo2 ES6 includes(),startWith,endWith
console.info('---------- demo2 ----------');
console.log(foobar.includes('o W'));
console.log(foobar.startsWith('Hel'));
console.log(foobar.endsWith('rld'));

//demo3
console.info('---------- demo3 ----------');
console.log(foobar.includes('o W', 7));
console.log(foobar.startsWith('Hal', 0));
console.log(foobar.endsWith('rld', foobar.length - 1));
console.log(foobar.endsWith('rld', 1));

//demo4 custom extend
console.info('\n---------- demo4 ----------')

String.prototype.myStartsWith = function (str, index) {
    var origin = this.toString()
    for (var i = index, j = 0; i < str.length+1; i++, j++) {
        console.log(str[j],origin[i])
        if (str[j] !== origin[i]) {
            return false
        }
    }
    return true
}

console.log('Austrlia'.myStartsWith('uat', 1))


