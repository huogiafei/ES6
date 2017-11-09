//demo1
console.info('---------- demo1 ----------');
{
    let {fu, foo, bar} = {foo: 'hello', bfar: 'world', fu: '123'};
    console.log(foo, bar, fu);
    console.log(typeof  fu);
}

//demo2
console.info('---------- demo2 ----------');
{
    let {foo: baz} = {foo: '123'};
    console.log(baz);
    //console.log(foo) //foo is not defined

    let foo = 'abc';
    ({foo} = {foo: 'hello'})
    console.log(foo)
}

//demo3
console.info('---------- demo3 ----------');
{
    var node = {
        loc: {
            start: {
                line: 1,
                col: 3
            }
        }
    };

    var {loc: {start: {line, col}}} = node;
    console.log(line, col);
    //console.log(line, loc, start);
}

//demo4
console.info('---------- demo4 ----------')
{
    let {abs, round, log:LOG,random,PI} = Math;
    console.log(abs(-2),round(3.4),LOG(1000),random(),PI)
    //console.log(sin(3))  //not defined



}

