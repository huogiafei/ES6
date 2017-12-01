'use strict';

console.info('\n---------- demo1 ----------')
/**
 * ArrayBuffer 与 String 互转
 * ab * 8 / v = length 长度计算
 */
let buffer = new ArrayBuffer(8)
let v1 = new Uint16Array(buffer)
v1[0] = 1
v1[1] = 3
v1[2] = 6
v1[3] = 5
console.log(v1)

let array = [1, 'abc', 3, true]
let letters = ['h', 'e', 'l', 'l', 'o']
let word = 'hello'
let chinese = "今生今世"
let nums = [3, 4, 0, 5, 1, 2, 9]


console.log(v1.join(''), array.join(''), letters.join(''))


var buffer2 = new Uint16Array(nums)
console.log(buffer2)

//FUNCTION
function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf))
}

function myAb2str(buf) {
    let v = new Uint16Array(buf)
    return v.join('')
}

console.info('\n---------- demo2 ----------')
console.log(ab2str(buffer))
console.log(myAb2str(buffer))

function str2ab(str) {
    let buf = new ArrayBuffer(str.length * 2) //16
    let v1 = new Uint16Array(buf)
    for(let i = 0 ;i<str.length;i++){
        v1[i] = str.charCodeAt(i)
    }
    return buf
}

//console.log(str2ab(nums),str2ab(word))
//console.log(myAb2str(str2ab(nums)))
//console.log(myAb2str(str2ab(word)))
console.log(ab2str(str2ab(word)))
console.log(ab2str(str2ab(chinese)))

console.info('\n---------- demo3 溢出 ----------')
/**
 * 不同视图的溢出规则不同
 */
{
    let ui8 = new Uint8Array(1)
    ui8[0] = 257 //overflow 正向溢出
    console.log(ui8[0])

    ui8[0] = -1 //underflow 负向溢出
    console.log(ui8[0]) //256 -1

    let i8 = new Int8Array(1)
    i8[0] = 128
    console.log(i8[0])
    
    i8[0] = -129
    console.log(i8[0])

    //Uint8ClampedArray 8位无符号整型固定数组
    let ui8c = new Uint8ClampedArray(1)

    ui8c[0] = 260 //正向溢出返回最大值255
    console.log(ui8c[0])

    ui8c[0] = -10
    console.log(ui8c[0]) //负向溢出返回0

}




