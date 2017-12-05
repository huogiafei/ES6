'use strict';
/**
 * for...of循环
 */
console.info('\n---------- Array ----------')
{
    let arr = ['a','b','c'];
    let itar = arr[Symbol.iterator]();
    for(let item of itar){
        console.log(item)
    }
}

console.info('\n---------- Set & Map ----------')
{
    let set = new Set(['apple','banana','pearl'])
    let map = new Map([['a','apple'],['b','banana'],['p','pearl']]);
    for(let i of set){
        console.log(i)
    }
    for(let j of map){
        console.log(j)
    }
}

console.info('\n---------- computed data structure ----------')
{
    let arr = ['a','b','c'];
    for(let pair of arr.entries()){
        console.log(pair[1])
    }
}

console.info('\n---------- 类数组对象 ----------')
{
    let str = 'foobar'
    console.log(...str)
    for(let item of str){
        console.log(item)
    }

    let showArgs = function () {
        for(let item of arguments){
            console.log(item)
        }
    }
    showArgs('suk',123)

    let arr2 = {length:3,0:'t',1:'e',2:'a'}
    for(let item of Array.from(arr2)){
        console.log(item)
    }
}

console.info('\n---------- Object ----------')
{
    let es6 = {
        edition: 6,
        committee: "TC39",
        standard: "ECMA-262"
    }
    

    for(let key of Object.keys(es6)){
        console.log(key,es6[key])
    }
}

console.info('\n---------- 其他遍历对比 ----------')
{
    let arr = ['u',8,7]

    for(let i = 0;i<arr.length;i++){
        console.log(arr[i])
    }
    
    //forEach 不支持中途跳出（break,return）
    arr.forEach(function (val) {
        console.log(val)
    })
    
    //for...in,主要针对对象，不适用遍历数组
    for(let item in arr){
        console.log(item)
    }

    //for...of有统一操作接口，还可以中途退出
    for(let item of arr){
        if(item === 8) break;
        console.log(item)
    }
}
