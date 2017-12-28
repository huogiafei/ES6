'use strict';
console.info('\n---------- 逗号结尾 ----------')
//bad
const a = {k1: v1, k2: v2,};
const b = {
    k1: v1,
    k2: v2
}

//good
const a2 = {k1: v1, k2: v2};
const b2 = {
    k1: v1,
    k2: v2,
}

console.info('\n---------- 对象静态化 ----------')
//bad
const c = {}
c.x = 123

//acceptable
Object.assign(c, {y: 456})

//good
const d = {x: null}
d.x = 123

