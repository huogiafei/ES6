'use strict';
//match(),replace(),search(),split(),test()
let regex1 = /a/ig;
let regex2 = /a/i;

const str = 'Any profession was worthy of respect to men who for ' +
    'centuries earned bread by the sweat of their brows.'

console.info('---------- Match ----------')
console.log(str.match(str.regex1))
console.log(str.match(str.regex2))

console.info('\n---------- Replace ----------')
console.log(str.replace(regex1,'*'))
console.log(str.replace(regex2,'*'))

console.info('\n---------- Search ----------')
console.log(str.search(regex1))
console.log(str.search(regex2))

console.info('\n---------- Split ----------')
console.log(str.split(regex1))
console.log(str.split(regex2))
console.log(str.split(' '))
console.log(str.split(regex1,3))
