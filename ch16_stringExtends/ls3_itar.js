'use strict';
//demo1
console.info('---------- demo1 ----------');
for(let word of "HELLO"){
    console.log(word);
}

for(let i = 0,str = "World";i<str.length;i++){
    console.log(str[i]);
}

//demo2
console.info('\n---------- demo2 ----------');
var s = "𠮷";
for(let word of s){
    console.log(word);
}
console.info('----- split -----');

for(let i = 0,str = s;i<str.length;i++){
    console.log(str[i]);
}

//demo3 at()
console.info('\n---------- demo3 ----------')
console.log('Amazon'.charAt(0))
console.log(String.fromCharCode(65))

console.log("亚马逊".charAt(0).toString())
//console.log("亚马逊".at(0))