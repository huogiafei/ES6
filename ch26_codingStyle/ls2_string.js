'use strict';
console.info('\n---------- 静态字符串使用单引号或者反引号，不使用双引号 ----------')
//bad
const a = "foobar"
const b = 'foo' + a + 'bar'

//acceptable
const c = `foobar`

//good
const d = `foo${a}bar`
const e = 'foobar'
const f = '<p class="red">foobar<p>'