'use strict';
/**
 * return 返回给定的值，并终结遍历generator
 * 和遍历器内部的return一样也会终结函数
 */
{
    console.info('\n---------- demo1 ----------')
    let gen = function* gen() {
        yield 1;
        yield 2;
        yield 3;
    }
    let g = gen()
    console.log(g.next())
    console.log(g.return('foo'))
    console.log(g.next())

    console.info('----- split -----')

    let gen2 = function* gen2() {
        yield 4;
        return 5;
        yield 6;
    }
    let g2 = gen2()
    console.log(g2.next())
    console.log(g2.next())
    console.log(g2.next())

    console.info('----- split -----')
    let g3 = gen()
    console.log(g3.next())
    console.log(g3.return())
    console.log(g3.next())
}

{
    console.info('\n---------- demo2 ----------')
    //try...finally
    let num = function* numbers() {
        yield 1;
        try {
            yield 2;
            yield 3;
        } finally {
            yield 4;
            yield 5;
        }
        yield 6;
    }
    let g = num()
    console.log(g.next())
    console.log(g.next())
    console.log(g.return(7))
    console.log(g.next())
    console.log(g.next())
}

