"use strict";
console.info('---------- demo1 ----------');
function* demo(name){
    yield `hello + ${name},welcome to my first demo.`;
    if(name.startsWith('F')){
        yield 'your name is cool';
    }
    else{
        yield 'Bye Bye';
    }
}

var p1 = demo('Fason');
console.log(p1);
console.log(p1.next());
console.log(p1.next());
console.log(p1.next());
console.log(p1.next());

console.info('---------- demo2 ----------');
function* demo2(){
    yield `落雨大，广州水浸街`;
    yield `阿哥担拆上街买`;
    yield `阿嫂出街着花鞋`;
    yield `花鞋花袜花腰带`;
}

var p2 = demo2();
var tmp = p2.next();
while(1){
    if(tmp.done === false){
        console.log(tmp.value);
    }
    else{
        break;
    }
    tmp = p2.next();
}
