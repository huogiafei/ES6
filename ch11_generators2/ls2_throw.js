'use strict';
var foo = function* (){
    try {
        yield;
    }catch(e){
        console.log('inner catch',e);
    }
};

var i = foo();
i.next();

try{
    i.throw('a');
    i.throw('b');
}catch(e){
    console.log('outer catch',e);
}