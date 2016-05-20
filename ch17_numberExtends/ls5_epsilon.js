'use strict';
console.log(Number.EPSILON);

function withinErrorMargin(a,b){
    return Math.abs(a-b) < Number.EPSILON;
}

console.log(withinErrorMargin(0.4,0.5));
console.log(withinErrorMargin(0.4 + 0.7,1.1));
console.log(withinErrorMargin(0.1 + 0.2,0.3));