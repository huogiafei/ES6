'use strict';
//demo1 String.codePointAt
console.info('---------- demo1 ----------');
//𠮷: \uD842\uDFB7
var s = "得个𠮷囍";
console.log(s.length);
console.log(s.charAt(2));
console.log(s.charAt(3));
console.log(s.charCodeAt(2).toString(16));
console.log(s.charCodeAt(3).toString(16));

console.log(s.codePointAt(2).toString(16));//20bb7

//demo2 String.fromCodePoint()
console.info('---------- demo2 ----------');
console.log(String.fromCharCode(0x20bb7));
console.log(String.fromCodePoint(0x20bb7));
console.log(String.fromCodePoint(65));



