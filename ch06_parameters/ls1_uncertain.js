"use strict";
//demo1: concat
let title = "hel".concat('lo','world','!');
console.log(title);

//demo2 check contain all args : fun(str,w1,w2)
function containsAll(str){
    for (var i = 1, len = arguments.length; i < len; i++) {
        if(str.indexOf(arguments[i]) === -1){
            return false;
        }
    }
    return true;
}

console.log(containsAll(title,'hel','ow','wk'));

//demo2-1 forEach break
var arr = [1,2,3,4,5];
arr.forEach(function(item){
    if(item == 3){
        //break; // error
    }
    else{
        //console.log(item);
    };
});

//demo2-2 for...of
for(var item of arr){
    if(item == 3){
        console.log('this is for...of');
        break;
    }
    else{
        //console.log(item);
    };
}

//demo3 refactoring demo2 with ES6
function containsAllEs6(str,...words){
    for(var item of words){
        if(str.indexOf(item) === -1){
            return false;
        }
        else{
            return true;
        }
    }

}
console.log(containsAllEs6(title,'he','wo'));


