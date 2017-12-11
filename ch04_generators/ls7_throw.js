'use strict';
/**
 * Generator.prototype.throw
 */
{
    console.info('\n---------- demo1 ----------')
    let g = function* () {
        try {
            yield;
        } catch (e) {
            console.log('inner catch', e)
        }
    }

    let i = g();
    i.next()

    //遍历器的throw
    try {
        i.throw('a')
        i.throw('b')
    } catch (e) {
        console.log('outer catch', e)
    }

    //全局throw
    try {
        throw new Error('a2')
        throw new Error('b2')
    } catch (e) {
        console.log('outer catch', e)
    }
}

{
    console.info('\n---------- demo2 ----------')
    //没有部署try...catch
    let gen = function* gen() {
        yield console.log('hello')
        yield console.log('world')
    }

    let g = gen();
    g.next();
    //g.throw(); undefined

    //捕获后附带执行一次next
    let gen2 = function* gen() {
        try {
            yield console.log('a')
        } catch (e) {
            //do something    
        }
        yield console.log('b')
        yield console.log('c')
    }

    let g2 = gen2()
    g2.next()
    g2.throw()
    g2.next()
}

{
    console.info('\n---------- demo3 ----------')
    //内部抛出错误没有被内部捕获，不再执行，后面的next会返回undefined
    let f = function *foo(){
        var x = yield 3;
        var y = x.toUpperCase();
        yield y;
        yield 'end'
    }

    let it = f();
    console.log(it.next());

    try{
        it.next(10)
    }catch(err){
        console.log(err)
    }
    console.log(it.next())
    console.log(it.next())
}







