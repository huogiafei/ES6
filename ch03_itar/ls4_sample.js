'use strict';
/**  以下例子都会默认调用[Symbol.iterator] **/
//sample1
console.info('\n----- sample1 -----');
{
    let set = new Set().add('3').add('6').add('9');
    let [x,y] = set;
    let [m,...n] = set;
    console.log(x, y, m, n);
}

//sample2
console.info('\n----- sample2 -----');
{
    let str = 'foobar';
    console.log([...str]);
    let arr = ['b', 'c'];
    console.log(['a', arr, 'd']);
}

//sample3
console.info('\n----- sample3 -----');
{
    let generator = function*() {
        yield 1;
        yield* [2, 3, 4];
        yield 5;
    };

    let iterator = generator();
    console.log(iterator.next());
}

//sample4
/*
 * for...of
 * Array.from()
 * Map(),Set,WeakMap(),WeakSet()
 * Promise.all()?
 * Promise.race()
 */

