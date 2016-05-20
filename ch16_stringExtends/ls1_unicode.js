'use strict';
//demo1: Unicode
console.info('---------- demo1 ----------');
var person = '\u5357'+'\u6d77'+'\u5341'+'\u4e09'+'\u90ce';
console.log(person);

//demo2: Unicode all
/**fromCharCode  &  charCodeAt**/
console.info('---------- demo2 ----------');
var strTemp = '';
for(let i = 0x6d77,j=1;i>0x5357;i--,j++){
    var code = '0x'+ i.toString(16);
    var isNewLine = j%16 == 0? '\n' : '';
    strTemp += String.fromCharCode(parseInt(code)) + isNewLine;
}
//console.log(strTemp);

//demo3: {}
console.info('---------- demo3 ----------');
console.log("\uD842\uDFB7");//uDFB7 > uFFFF,需要双字节
console.log("\u20bb007");//`007`前面跟空格
console.log("\u{20bb7}");

//demo4:syntax
console.info('---------- demo4 ----------');
console.log('\z' === 'z');
//console.log('\172' === z); not allow in strict mode
console.log('\u007a');
console.log('\u{7a}');
console.log('\x7A'); //16进制

