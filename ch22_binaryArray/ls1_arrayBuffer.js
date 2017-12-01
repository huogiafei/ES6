'use strict';

console.info('\n---------- demo1 ----------')
let buf = new ArrayBuffer(32)
console.log(buf)
let dataView = new DataView(buf)
console.log(dataView.getUint8(0))

console.info('\n---------- demo2 ----------')
let buf2 = new ArrayBuffer(12)
var x1 = new Int32Array(buf2);
x1[0] = 1;
var x2 = new Uint8Array(buf2);
x2[0] = 2;

console.log(x1[0])

console.info('\n---------- demo3 ----------')
let typedArray = new Uint8Array([0, 1, 2])
console.log(typedArray.length)
typedArray[0] = 5
console.log(typedArray)

console.info('\n---------- demo4 ----------')
let buf3 = new ArrayBuffer(17)
console.log(buf3.byteLength)

console.info('---------- demo5 ----------')
//ArrayBuffer.prototype.slice()
var buf4 = new ArrayBuffer(8)
var newbuf = buf4.slice(0,3)
var newbuf2 = buf4.slice(1,10)
console.log(buf4.byteLength,newbuf.byteLength)
console.log(newbuf2)

console.info('\n---------- demo6 ----------')
//判断是否ArrayBuffer的视图实例，返回Boolean
var buf5 = new ArrayBuffer(8)
console.log(ArrayBuffer.isView(buf5))
var view = new Int32Array(buf5)
console.log(ArrayBuffer.isView(view))





