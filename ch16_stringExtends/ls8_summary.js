'use strict';
/**String method*/
//MDN: 30+ method

//es5
/*
* 1.substr(s,l),substring(s,e)
* 2.slice,split,concat
* 3.toLowerCase,toUpperCase,(toLocaleUpperCase,toLocaleLowerCase)中文基本用不上
* 4.indexOf,lastIndexOf,
* 5.charCodeAt,fromCharCode,charAt
* 6.search,match,replace
* 7.toString,valueOf
* 8.trim
* 9.localCompare (中文排序)
* 10.anchor,link (创建html标签)
* */

//es6
/*
* 1.codePointAt,fromCodePoint
* 2.startWith,endWith,includes
* 3.repeat
* 4.normalize
* */

//es7
/*
* 1.padStart,padEnd(自动补全)
* */

/**Demo**/
const hello = 'hello world';

//demo1:es5.1 : substr(s,l),substring(s,e)
console.info('---------- demo1:substr,substring ----------');
{

    console.log(hello.substr(1, 2));
    console.log(hello.substring(1, 2));
}

//demo2:es5.2 : slice,split,concat
console.info('\n---------- demo2:slice,split,concat ----------');
{
    console.log(hello.slice(1,3));//slice(s,[e])
    console.log(hello.split(' '));
    console.log(hello.concat(',Good morning',"!"));
}

//demo3:es5.3 : toLowerCase,toUpperCase
console.info('\n---------- demo3: toLowerCase,toUpperCase ----------');
{
    let HELLO = hello.toUpperCase();
    console.log(HELLO);
    console.log(HELLO.toLowerCase());
}

//demo4:es5.4 : indexOf,lastIndexOf
console.info('\n---------- demo4: indexOf,lastIndexOf ----------');
{
    console.log(hello.indexOf('l'));
    console.log(hello.lastIndexOf('e'));
    console.log(hello.indexOf('k'));
}

//demo5:es5.5 : charCodeAt,fromCharCode,charAt
console.info('\n---------- demo5: charCodeAt,fromCharCode,charAt ----------');
{
    console.log(hello.charCodeAt(0));//h(Unicode):104
    console.log(String.fromCharCode(104));
    console.log(hello.charAt(0));
}

//demo6:es5.6 : match,replace,search
console.info('\n---------- demo6: match,replace,search ----------');
{
    let str = hello.concat('123');
    console.log(str);
    console.log(str.search(/\d+/));
    console.log(str.search(/\d{3,5}/));
    console.log(str.search('/\d{5}/'));

    let str2 = ('456').concat(str);
    console.log(str2.match(/\d+/g));
    console.log(str2.match(/\d+/i));

    console.log(str.replace('123','***'));
    console.log(str);
    console.log(str2.replace(/\d+/gi, ''));
}

//demo7:es5.7 : toString,valueOf
console.info('\n---------- demo7: toString,valueOf ----------');
{
    //基本不会显示使用
    //在进行强转字符串类型时将优先调用toString方法，强转为数字时优先调用valueOf
    //在有运算操作符的情况下，valueOf的优先级高于toString
}

console.info('\n---------- demo8: trim ----------');
{
    var tmp = " "+ hello + " ";
    console.log(tmp);
    console.log(tmp.trim());
}

console.info('\n---------- demo9: localCompare ----------');
{
    let arrayCN = ['一','二','三'];
    let compareCN = function (a,b){
        return b.localeCompare(a);
    }
    console.log(arrayCN.sort(compareCN));
}

console.info('\n---------- demo10: includes,startWith,endsWith ----------');
{
    console.log(hello.includes('hel'));
    console.log(hello.startsWith('hel'));
    console.log(hello.endsWith('hel'));
}

console.info('\n---------- demo11: repeat ----------');
{
    //console.log(hello.repeat(-1));//RangeError
    console.log(hello.repeat(0));
    console.log(hello.repeat(2));
    console.log(hello.repeat(1.5));
}










