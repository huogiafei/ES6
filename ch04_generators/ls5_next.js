'use strict';
/** Iterator.next() **/

//demo1:next args with boolean
console.info('---------- demo1 ----------');
function* foo() {
    for(var i = 0;; i++) {
        var reset = yield i;
        if (reset) {
            i = -10;
        }
    }
}

var f = foo();
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next(true));
console.log(f.next(true));
console.log(f.next(false));
console.log(f.next());
console.log(f.next(false));

//demo2:next() args with number
console.info('---------- demo2 ----------');
function* fun(x) {
    var y = 10 * (yield(x + 2));
    var z = yield (y / 4);
    return [x,y ,z];
}

var a = fun(5);
console.log(a.next(),a.next(),a.next());
var b = fun(5);
console.log(b.next(), b.next(10), b.next(20));
var c = fun(5);
console.log(c.next(100));//same as c.next()

//demo3:input yield value
console.info('---------- demo3 ----------');
function* say(){
    let num = 0;
    console.log('Start');
    while(1){
        console.log(`${num++}. ${yield }`);
    }
}
let s1 = say();
s1.next();
s1.next('hello');
s1.next();
s1.next('');
s1.next('world');


