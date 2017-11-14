'use strict';
//demo1 : repeat int
console.info('---------- demo1 ----------');
var num = 520;//today is 5.20,but symbol nothing.
console.log(num.toString().repeat(3));
var nan = NaN;
console.log(nan.toString().repeat(3));
var one = -1;
console.log(one.toString().repeat(3));
//console.log(one.toString().repeat(one));//Invalid count value

//demo2 : repeat float
console.info('---------- demo2 ----------');
var fl = 1.6;
console.log(fl.toString().repeat(2));
console.log(fl.toString().repeat(fl)); //Math.floor(fl) => 1

var fl2 = -1.2;
console.log(fl2.toString().repeat(2));
//console.log(fl2.toString().repeat(fl2)); //RangeError

var fl3 = -0.2;
console.log(fl3.toString().repeat(2));
console.log('f3:' + fl3.toString().repeat(fl3)); //repeat(0)

console.log('f3:' + fl3.toString().repeat(NaN));//repeat(0)

//demo3 : myRepeat

console.info('\n---------- demo3 ----------')
String.prototype.myRepeat = function (num) {
    var str = this.toString();
    try {
        if (isNaN(num) && typeof num !== 'string') return '';
        else if (typeof num === "string") {
            throw "(>_<)RangeError: Invalid count value"
        }
        else if (num <= 0 || num === NaN) {
            return ''
        }
        else {
            num = Math.floor(num)
            for (var i = 0, result = str; i < num - 1; i++) {
                result += str
            }
        }
    }
    catch (err) {
        console.log(err)
    }
    return result;
}

console.log('yun'.myRepeat('abc'))
console.log('yun'.myRepeat(2.6))
console.log('yun'.myRepeat(-2))
console.log('yun'.myRepeat(NaN))









