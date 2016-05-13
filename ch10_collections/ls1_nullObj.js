'use strict';
/** This question from Stackoverflow.com**/
//http://stackoverflow.com/questions/32262809/is-it-bad-practice-to-use-object-createnull-versus


//demo1 Object.create(null) or {};
console.info('---------- demo1 ----------');
var o1 = Object.create(null);
var o2 = {};//Object.prototype;

console.log({} == Object.create(Object.prototype));
/*
 Note that you can't just do object.hasOwnProperty('toString')
 because you may have inserted a key "hasOwnProperty" into object,
 so we force it to use the implementation in Object.
 */
//console.log(o2.hasOwnProperty('toString'));

String.prototype.toString = () => 'you are fool';
Object.prototype.toString = () => 'you are fool';
console.log(typeof(o1), typeof(o2));
console.log(({}).toString());
console.log(o2.toString());

//demo2 hasOweProperty & if(obj[key])
console.info('---------- demo2 ----------');
if(o2['toString']){
    console.log('o2 have `toString`');//unreliable,inherit from Object
}

console.log(Object.prototype.hasOwnProperty.call('o2','toString'));

if(o2.hasOwnProperty('true')){ //overwrite prototype origin property is dangerous
    console.log('o2 hasOwnProperty `toString`');//unreliable,inherit from Object
}

o2.hasOwnProperty = function(){
    return true;
}

//demo3
console.info('---------- demo3 ----------');
var dog = {
    name:'cookies',
    age : 0.5
}
for(let item in dog){
    console.log(item);
}


