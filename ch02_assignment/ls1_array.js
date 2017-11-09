//demo1
console.info('---------- demo1 ----------');
var a = 1;
var b = 2;
var c = 3;

{
    let [x, y, z] = [4, 5, 6];
    console.log(z);
}

{
    let [x, , z] = [7, 8, 9];
    console.log(z);
}

{
    let [x, y, ...z] = ['a'];
    console.log(x, y, z);
}

{
    let x = [];
    let [y, z] = [1];
    console.log(x, y, z);
}

{
    //不完全解构
    let [x, y] = [1, 2, 3];
    let [a, [b], c] = [1, [2, 3], 4];
    console.log(y, b);
}

//demo2
console.info('---------- demo2:error ----------');
{

    let [foo] = 'str';
    console.log(foo);
    //let [foo] = 1; //false , NaN , undefined , null; {} ;

    const [x, y, z] = new Set(['a', 'b', 'c']);
    console.log(x);
}

//demo3
console.info('---------- demo3:default value ----------');
{
    let [x = 2, y = 1] = [];
    console.log(x, y);

    var [z = 1] = [undefined];
    var [z = 1] = [null];
    console.log(z);

    function f() {
        console.log('hello');
        return 'abc'
    }

    let [a = f()] = [1];
    console.log(a);

    // 等价上面的代码
    let i;
    if ([1][0] === undefined) {
        i = f();
    } else {
        i = [1][0];
    }
    console.log(i)


    let [m = 1, n = m] = [];
    console.log(m, n);


}

//demo4
console.info('---------- generator fibs ----------')

function* fibs() {
    let [a, b] = [0, 1]
    while (1) {
        yield a;
        [a, b] = [b, a + b]
    }
}

let [a1, b1, c1, d1, e1, f1] = fibs();
console.log(f1)
