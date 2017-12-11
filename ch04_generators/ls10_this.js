'use strict';
console.info('\n---------- demo1 ----------')

function* g() {
}

g.prototype.hello = function () {
    return 'hi'
}

let obj = g();
console.log(obj instanceof g)
console.log(obj.hello())

function* g2() {
    this.a = 11;
}

let obj2 = g2()
console.log(obj2.a)
//new g2() // not a constructor


console.info('\n---------- demo2 ----------')

function* F() {
    this.a = 11;
    yield this.b = 22;
    yield this.c = 33;
}

{
    let obj = {}
    let f = F.call(obj)

    console.log(f.next())
    console.log(obj.a, obj.b, obj.c)
    f.next()
    console.log(obj.a, obj.b, obj.c)

    let f2 = F.call(F.prototype)
    console.log(f2.next())
    console.log(f2.a, f2.b)
}
console.info('----- split -----')
function Fc(){
    return F.call(F.prototype)
}

{
    let f = new Fc()
    console.log(f.a,f.b,f.c)
    f.next()
    f.next()
    console.log(f.a,f.b,f.c)
}






