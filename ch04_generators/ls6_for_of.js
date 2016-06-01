'use strict';
/** for...of **/

//demo1
function* fibonacci(){
    let [prev,cur] = [0,1];
    while(1){
        [prev,cur] = [cur,prev+cur];
        yield cur;
    }
}

let arr = [];
for(let n of fibonacci()){
    if(n>100) break;
    arr.push(n);
}
console.log(arr);

/*add for...of for Object*/
let dog = {
    name:'cookie',
    color:'brown',
    age:0.6
}
//demo1
function* foo(obj){
    let propKeys = Reflect.ownKeys(obj);
    console.log(propKeys);
    for(let propKey of propKeys){
        yield [propKey, obj[propKey]];
    }
}

for(let [key,value] of foo(dog)){
    console.log(key + ':' +value);
}

console.info('\n----- split -----');

//demo2
function* bar(){
    //let propKeys = Reflect.ownKeys(this);
    console.log(Reflect.ownKeys(this));
    let propKeys = Object.keys(this);
    for(let propKey of propKeys){
        yield [propKey, this[propKey]];
    }
}
dog[Symbol.iterator] = bar;
for(let [key,value] of dog){
    console.log(key + ':' +value);
}