'use strict';
//demo1 : Object.create
console.info('---------- demo1 ----------');
var Dog = {
    name: 'cookie',
    method(){
        console.log('hello world');
    }
};

var d1 = Object.create(Dog);
d1.method();
Dog.name = 'Orange';
console.log(d1.name);
console.log(Dog.name);
console.info('----- split -----');
d1.name = "Danny";
console.log(d1.name);
console.log(Dog.name);
console.info('----- split -----');
console.log(d1.__proto__ === Dog.prototype);
console.log(Dog.constructor);

console.info('----- split -----');
var Cat = function(){
    this.name = 'cat'
}
var c1 = new Cat();
console.log(c1.__proto__ === Cat.prototype);
console.info('----- split -----');

console.info('---------- demo2 ----------');
class Father{
    get age(){
        return this._age;
    }
    set age(n){
        this._age = n;
    }
}

class Child extends  Father{
    get age(){
        super.age();
    }
    set age(n){
        super.age(n);
    }
}

var cookie = new Child();
cookie.age('ccc');



