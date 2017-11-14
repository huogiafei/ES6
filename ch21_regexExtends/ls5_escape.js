'use strict';
console.info('\n---------- demo1 ----------')
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

var str = 'hello. world?';
var regex = new RegExp(escapeRegExp(str))
console.log(regex)


