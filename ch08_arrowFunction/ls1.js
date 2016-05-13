'use strict';
<!-- tmd comment -->
//comment
/**comment too **/
//demo1 `>=  not =>`
console.info('---------- demo1 ----------');
var i = 5;
while (i-- >= 3) {
    console.log(i);
}

//demo2 `--> tend to`
console.info('---------- demo2 ----------');
var j = 1;
while (j-- > 1) { //if i--> 0 死循环
    console.log(j);
    j++;
}

//demo3 ES6 new arrow `=>`
{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8];
    //es5
    var result1 = arr.filter(function (item) {
        return item % 2 == 0;
    });

    //es6 less function ,return and brackets
    var result2 = arr.filter(item => item%2 == 0);//or item => {return item%2 == 0}
    console.log(result1);
    console.log(result2);
}

//demo4 warn: '{}' is object or block?
let arr = [1,2,3];
var init = arr.map(item => ({"name":item})); //error : (item => {"name":item})
console.log(init);

//demo5 this in `=>`function
//TODO





