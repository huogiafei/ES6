'use strict';
/** Array method **/

/*es5 20 methods*/
// push,op,shift,unshift,
// map,foreach,filter,some,every
// indexOf,indexOf
// splice,slice,concat
// reverse,sort
// join
// reduce,reduceRight

/*es6 */
// from(类数组对象，可遍历对象)，of(一组值)
// copyWithin
// find,findIndex
// fill
// entries,keys,values
// includes


/*method1*/
console.info('\n---------- method1:push,pop,shift,unshift ----------');
{
    let arr = [1, 2, 3];
    arr.push(4);
    console.log(arr);
    arr.pop();
    console.log(arr);
    arr.shift();
    console.log(arr);
    arr.unshift(0, 3);
    console.log(arr);
}

/*method2*/
console.info('\n---------- method2:map,forEach,filter,some,every ----------');
{
    //map
    let arr = Array.from('black jack');
    var a1 = arr.map((word) => word.toUpperCase());
    console.log(a1);

    //filter
    let a2 = arr.filter(word => word !== 'a');
    console.log(a2);

    //some
    console.log(
        arr.some(word => word === 'a'));

    //every
    console.log(
        arr.every(word => word != 'f'));

    //forEach
    arr.forEach((word, i, arr) => {
            arr[i] = String.fromCharCode(word.charCodeAt(0) + 1);
        }
    );
    console.log(arr.join(''));
}

/*method3*/
console.info('\n---------- method3:index,includes----------');
{
    let song = ['天', '梯'];
    console.log(song.indexOf('他'));
    console.log(song.lastIndexOf('梯'));
    console.log(song.includes('天'));
}

/*method4*/
console.info('\n---------- method4:splice,slice,concat ----------');
{
    let arr = [1, 2, 3, 4, 5, 6];
    //slice(s,e)
    console.info('----- slice -----');
    console.log(arr.slice(1, 2));
    console.log(arr.slice(1, 4));
    console.log(arr);
    console.info('----- splice -----');
    //splice(s,count,text)
    console.log(arr.splice(0, 2));//delete
    console.log(arr);
    console.log(arr.splice(0, 2, 'a', 'b', 'c'));//replace
    console.log(arr);
    //concat()
    console.info('----- concat -----');
    console.log(arr.concat([8, 9, 7]));
}

/*method5*/
console.info('\n---------- method5: reverse,sort ----------');
{
    let arr = ['d', 'l', 'o', 'r', 'w'];
    console.log(arr.reverse());
    console.log(arr);
    console.log(arr.sort());
    console.log(arr);
}

/*method6*/
console.info('\n---------- method6: join ----------');
{
    let arr = ['h', 'e', 'l', 'l'];
    let a1 = arr.join('');
    console.log(a1);
    console.log(a1.split(''));
}

/*method7*/
console.info('\n---------- method7: reduce,reduceRight ----------');
{
    var arr = [1, 3, 5, 7, 9];
    console.log(arr.reduce(function (prev, cur) {
        return prev += cur;
    }));
    console.log(arr.reduceRight((prev, cur) => prev - cur));
    console.log(arr.reduce((prev, cur) => prev - cur));
}

/*method8*/
console.info('\n---------- method8:from,of ----------');
{
    console.log(Array.of(1, 2, 'a', 'ac', NaN, undefined));
    console.log(Array.from(new Set(['h', 'l', 'l'])));
    console.log(Array.from(new Map([['1', 'h'], ['2', 'e'], [3, 'l']])));
    console.log(Array.from({
        '0': 'a',
        '1': 'a',
        '2': 'n',
        '3': 't',
        length: 4
    }));
}

/*method9*/
console.info('\n---------- method9: find,findIndex ----------');
{
    let song = '沧海一声笑'.split('');
    console.log(song.find((z) => z == '一'));
    console.log(song.findIndex((z) => z == '一'));
}

/*method10*/
console.info('\n---------- method10: fill ----------');
{
    let arr = new Array(5).fill(9);
    console.log(arr);
    console.log(['a', 'b', 'c', 'd'].fill('7', 2, 4));
}

/*method11*/
console.info('\n---------- method1: entries,keys,values ----------');
{
    let arr = new Map([[1, 'a'], [2, 'b']]);
    console.log(Array.from(arr.entries()));
    console.log(Array.from(arr.keys()));
    console.log(Array.from(arr.values()));
}





