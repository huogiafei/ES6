'use strict';
/** Simple props**/

console.info('---------- demo1 ----------');
//sample1
let bar = {foo: 'funny'};
console.log(bar);

let foo = 'bar';
let baz = {foo};
console.log(baz);

//sample2
function hello( x, y) {
    return {
        name:x,
        age:y
    }
}

function world(x,y){
    return {name,age};
}

console.log(hello('Albert', 12));
console.log(hello('John', 13));

//sample3

var dog = {
    type,
    bark: function(){
        return 'Woo';
    }
};

var cat = {
    type,
    miaows() {
        return 'Miao';
    }
}

console.log(dog.bark());
console.log(cat.miaows());

//sample4

var bike = {
    _wheels:2,
    get wheels() {
        return this._wheels;
    },
    set wheels(num) {
        if(num < this._wheels){
            throw new Error('at least 2 ');
        }
        this._wheels = num;
    }
}

console.log(bike._wheels);
bike.wheels = 3;
console.log(bike._wheels);
