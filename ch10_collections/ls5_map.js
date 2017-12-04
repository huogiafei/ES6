'use strict';
//map init
console.info('\n---------- demo1 ----------');

var map1 = new Map();
map1.set('name', 'funny');
var map2 = new Map([["name", 'interest'], ["age", "24"]]);
console.log(map1, map2);

var map3 = new Map();
map3.set('a', '111');
map3.set('a', '222');
console.log(map3);

//map iterator
console.info('\n---------- demo2 ----------');
console.log(map2.keys());
console.log(map2.values());
console.log(map2[Symbol.iterator]());
console.log(map2.entries());
console.log(map2[Symbol.iterator] == map2.entries);

//demo3
console.info('\n---------- demo3 ----------');
{
    let map = new Map();
    map.set(['b'], 'hello');
    console.log(map.get(['b']));

    map.set(Symbol.for('t'), 'world');
    console.log(map.get(Symbol.for('t')));

    map.set(NaN, 123);
    console.log(map.get(NaN));

    map.set(-0, 123);
    map.set(+0, 456);
    console.log(
        map.get(-0),
        map.get(+0),
        map.get(0)
    )
}

//demo4
console.info('\n---------- demo4 ----------');
{
    console.log(Map.prototype[Symbol.iterator] === Map.prototype.values);
    console.log(Map.prototype[Symbol.iterator] === Map.prototype.keys);
    console.log(Map.prototype[Symbol.iterator] === Map.prototype.entries);
}

//demo5 convert to Map
console.info('\n---------- demo5 ----------');
{
    let map = new Map([
        [3, 'hello'],
        [6, 'world'],
        [9, 'cookie']
    ]);

    console.log(map);
    console.log([...map]);
    console.log([...map.keys()]);
    console.log([...map.values()]);
    console.log([...map.entries()]);

}

console.info('\n---------- demo6 ----------')
{
    let m = new Map([[true,'foo'],['true','bar']])
    console.log(m.get(true),m.get('true'))

    let m2 = new Map()
    m2.set('a',123)
    m2.set('a',456)
    console.log(m2.get('a'))
    
    let s = Symbol('s');
    m2.set(s,'shall')
    console.log(m2.get(s))
    console.log(new Map().get('b'))
}
