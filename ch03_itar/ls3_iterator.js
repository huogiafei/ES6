'use strict';
/** Iterator **/
function myIterator(array) {
    var nextIndex = 0;
    return {
        next(){
            return nextIndex < array.length ?
            {value: array[nextIndex++], done: false} :
            {value: undefined, done: true}
        }
    }
}

var myArray = Array.from('遗弃这棵花');
var flower = myIterator(myArray);

console.log(flower.next());
console.log(flower.next());
console.log(flower.next());
console.log(flower.next());
console.log(flower.next());
console.log(flower.next());

