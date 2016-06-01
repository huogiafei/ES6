'use strict';
//demo1
console.info('\n----- demo1 -----');
var foo = Symbol('text');
//console.log('Symbol' + foo);//Cannot convert a Symbol value to a string
console.log(String(foo));
console.log(foo.toString());

//demo2
console.info('\n----- demo2 -----');
var mySymbol = Symbol('foo');
var obj = {
    mySymbol: '123',
    [mySymbol]: 'bar'
}
console.log(obj.mySymbol);
console.log(obj['mySymbol']);
console.log(obj[mySymbol]);

//demo3
console.info('\n----- demo3 -----');
var log = {
    INFO: Symbol('info'),
    WARN: Symbol('warn')
}
console.log(log.INFO);

//demo4
console.info('\n----- demo4 -----');
//no Symbol
function getArea(shape, opts) {
    var area = 0;
    switch (shape) {
        case 'Triangle':
            area = .5 * opts.width * opts.height;
            break;
        case 'Round':
            area = Math.PI * opts.radius * opts.radius;
            break;
    }
    return area;
}
console.log(getArea('Triangle', {width: 4, height: 5}));
console.log(getArea('Round', {radius: 4}));

//use Symbol
const shapeType = {
    triangle : Symbol.for('Triangle'),
    round : Symbol.for('Round'),
}
function getArea2(shape,opts){
    switch(shape){
        case shapeType.triangle:
            return .5 * opts.width * opts.height;
        case shapeType.round:
            return Math.PI * opts.radius * opts.radius;
    }
}
console.log(getArea2(shapeType.triangle, {width: 4, height: 5}));
console.log(getArea2(shapeType.round, {radius: 4}));
console.info('----- split -----');
console.log(Symbol.keyFor(shapeType.triangle));
console.log(Symbol.keyFor(shapeType.round));

//demo5 compare
console.info('\n----- demo5 -----');
console.log(Symbol('foo') === Symbol('foo'));
console.log(Symbol.for('foo') === Symbol.for('foo'));

//demo6
console.info('\n----- demo6 -----');
var s1 = Symbol('foo');
console.log(Symbol.keyFor(s1));
var s2 = Symbol.for('foo');
console.log(Symbol.keyFor(s2));
