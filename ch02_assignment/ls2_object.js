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
    let {foo:baz} = {foo: '123'};
    console.log(baz);
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

    var {loc:{start:{line, col}}} = node;
    console.log(line, col);
    //console.log(line, loc, start);
}

