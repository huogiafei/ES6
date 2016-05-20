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
console.info('---------- demo2 ----------');
var s = "𠮷";
for(let word of s){
    console.log(word);
}
console.info('----- split -----');

for(let i = 0,str = s;i<str.length;i++){
    console.log(str[i]);
}