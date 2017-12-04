'use strict';

{
//Union,Intersect,Difference
    console.info('\n---------- demo1 ----------')
    let a = [1, 4, 5, 6, 2, 13];
    let b = [2, 4, 5, 6, 7, 23];
    console.log([a, b]);
    console.log([...a, ...b]);
    console.log(a.concat(b));

    console.log(new Set([...a, ...b]));//union

    //Intersect 交集
    console.log(
        new Set([...a].filter(x => new Set(b).has(x)))
    )

    //Difference 差集
    console.log(
        new Set([...a].filter(x => !(new Set(b).has(x))))
    )
}

{
    console.info('\n---------- demo2 ----------')
    //直接改变set解构
    let set = new Set([1, 2, 3])
    set = new Set([...set].map(val => val * 2))
    console.log(set)

    let set2 = new Set([1, 2, 3])
    set2 = new Set(Array.from(set,val => val *2))
    console.log(set)
}

