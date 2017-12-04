'use strict';
/**
 * WeakSet成员只能是对象
 * 没有size属性，无法遍历
 */
{
    console.info('\n---------- Basic ----------')
    let ws = new WeakSet();
    //ws.add(1) //Invalid value used in weak set
    let b = [ 5, 6]
    //let ws2 = new WeakSet(b) //Invalid value used in weak set

    ws.add({})
    console.log(ws)
    ws.add([1,2],[3,4],{a:'hello',b:'world'})
    console.log(ws,ws.size)
}

{
    console.info('\n---------- Method ----------')
    //add，delete, has
    let ws = new WeakSet()
    let foo = {};
    let bar = {};
    
    ws.add(foo)
    console.log(ws.has(foo))
    console.log(ws.has(bar))

    console.log(ws)
    ws.delete(foo)
    console.log(ws.has(foo))
}