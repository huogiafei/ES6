'use strict';
console.info('---------- demo1 ----------')
console.log('\uD83D\uDC2A')
console.log(/^\uD83D/u.test('\uD83D\uDC2A'))
console.log(/^\uD83D/.test('\uD83D\uDC2A'))

console.info('\n---------- demo2 ----------')
let s="⼳"
console.log(s.codePointAt())
console.log(/^.$/.test(s));
console.log(/^.$/u.test(s));

console.info('\n---------- demo3 ----------')
console.log(/a{2}/.test('aa') )
console.log(/{2}/u.test(''))





