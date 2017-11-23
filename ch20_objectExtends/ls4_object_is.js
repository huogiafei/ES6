'use strict';
/** Object.is() **/
//demo1
console.info('---------- demo1 ----------');
console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));

//demo2
console.info('---------- demo2 ----------');
console.log(+0 == -0);
console.log(+0 === -0);
console.log(Object.is(+0, -0));
console.log(Object.is({},{}))

//demo3:polyfill
Object.defineProperty(Object,'is',{
    value:function(x,y){
        if(x===y){
            //+0 -0
            return x!==0 || 1/x === 1/y
        }
        //NaN
        return x!==x && y!==y;
    },
    configurable:true,
    enumerable:false,
    writable : true
});