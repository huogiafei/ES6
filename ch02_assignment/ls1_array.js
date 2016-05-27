
//demo1
console.info('---------- demo1 ----------');
var a = 1;
var b = 2;
var c = 3;

{
    let [x,y,z] = [4, 5, 6];
    console.log(z);
}

{
    let [x, ,z] = [7, 8, 9];
    console.log(z);
}

{
    let [x,y, ...z] = ['a'];
    console.log(x, y, z);
}

{
    let x = [];
    let [y,z]=[1];
    console.log(x, y, z);
}

{
    //不完全解构
    let [x,y] = [1, 2, 3];
    let [a,[b],c]= [1, [2, 3], 4];
    console.log(y, b);
}

//demo2
console.info('---------- demo2:error ----------');
{

    let [foo] = 'str';
    console.log(foo);
    //let [foo] = 1; //false , NaN , undefined , null; {} ;

    const [x,y,z] = new Set(['a', 'b', 'c']);
    console.log(x);
}

//demo3
console.info('---------- demo3:default value ----------');
{
    let [x=2,y=1] = [];
    console.log(x, y);

    var [z = 1] = [undefined];
    var [z = 1] = [null];
    console.log(z);

    function f() {
        console.log('hello');
    }

    let [a=f()] = [];
    console.log(a);

    let [m=1,n=m] = [];
    console.log(m, n);
}

//demo3
