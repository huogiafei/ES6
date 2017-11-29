'use strict';
function NOPE() {
    throw new Error("can't modify read-only view");
}
var handler = {
    set: NOPE,
    defineProperty: NOPE,
    deleteProperty: NOPE,
    preventExtensions: NOPE,
    setPrototypeOf: NOPE,

    get: function (target, key, receiver) {
        // 从执行默认行为开始。
        var result = Reflect.get(target, key, receiver);
        // 确保返回一个不可变对象！
        if (Object(result) === result) {
            // result是一个对象。
            return readOnlyView(result);
        }
        // result是一个原始原始类型，所以已经具备不可变的性质。
        return result;
    }

};
function readOnlyView(target){
    return new Proxy(target,handler);
}

var newMath = readOnlyView(Math);
//newMath.color = 'red';
//console.log(newMath.color);
console.log(newMath.min(45, 30));
//newMath.max = Math.min;
//delete newMath.sin;



