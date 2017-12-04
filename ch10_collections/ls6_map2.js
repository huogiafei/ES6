'use strict';

/**
 * 和Set属性一样
 * size()
 * set(k,v)
 * get(k)
 * has(k)
 * delete(k)
 * clear()
 */


/** Map Convert **/
//demo1 map => array
console.info('\n----- demo1 -----');
{
    let map = new Map().set('a', 'Hello').set('k', {name: 'cookie'});
    console.log(map);
    console.log([...map]);
}

//demo2 array => map
console.info('\n----- demo2 -----');
{
    let array = [1,'a',NaN,undefined,true,Symbol('new')];
    //let map = new Map(array);
    let map = new Map([['a','abc'],[1,123]]);
    console.log(map);
}

//demo3 map => object
console.info('\n----- demo3 -----');
{
    let map = new Map([['a','abc'],[1,123]]);
    let obj = Object.create(null);
    for(let [k,v] of map){
        obj[k] = v;
    }
    console.log(obj);
}

//demo4 object => map
console.info('\n----- demo4 -----');
{
    let obj = { '1': 123, a: 'abc' };
    let map = new Map();
    for(let k in obj){
        map.set(k,obj[k]);
    }
    console.log(map);
}

//demo5 map => json
console.info('\n----- demo5 -----');
{
    let map = new Map([['a','abc'],[1,123]]);
    let json = JSON.stringify([...map]);
    console.log(json);
}


