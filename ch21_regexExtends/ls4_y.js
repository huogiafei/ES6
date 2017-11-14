'use strict';
console.info('\n---------- demo1 ----------')
const s = 'xxx-xx-x'
let reg1 = /x+/g;
let reg2 = /x+/y;
let reg3 = /x+\-/y
console.log(`1:${reg1.exec(s)}`)
console.log(`1:${reg2.exec(s)}`)
console.log(`1:${reg3.exec(s)}`)

console.log(`2:${reg1.exec(s)}`)
console.log(`2:${reg2.exec(s)}`)
console.log(`2:${reg3.exec(s)}`)

console.info('\n---------- demo2 ----------')
let [reg4,reg5] = [/x+/g,/x+/y]
reg4.lastIndex = 3
reg5.lastIndex = 3 //xx<x>-xx-x
console.log(reg4.exec(s))
console.log(reg4.lastIndex)

console.log(reg5.exec(s))
console.log(reg5.lastIndex)

console.info('\n---------- demo3 ----------')
const s2 = 'x##';
const s3 = '##x';
//replace split
console.log(s2.split(/#/y))
console.log(s2.split(/#/g))
console.log(s3.split(/#/y))
console.log(s3.split(/#/g))

console.log('#x#'.split(/#/y))
console.log('##'.split(/#/y))

console.info('\n---------- demo4 ----------')
//sticky prop
console.log(reg1.sticky)
console.log(reg2.sticky)





