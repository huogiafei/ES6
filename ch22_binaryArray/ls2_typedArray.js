/**
 *  两种视图 : TypedArray  DataView
 *  TypedArray : 同种数据类型
 *  DataView : 不同数据类型
 *
 *  9种TypedArray视图
 *  Int8Array
 *  Uint8Array
 *  Uint8ClampedArray
 *  Int16Array
 *  Uint16Array
 *  Int32Array
 *  Uint32Array
 *  Float32Array
 *  Float64Array
 */
'use strict';

console.info('\n---------- demo1：Array & TypedArray ----------')
{
    //TypedArray数组的所有成员，都是同一种类型
    let array1 = [1, 2, '3', 'abc', true]
    console.log(...array1)

    let t_array1 = new Int8Array([1, 2, '3', 'abc', true])
    let t_array2 = new Float64Array([1, 2, '3', 'abc', true])
    console.log(t_array1)
    console.log(t_array2)
    console.info('----------')

    //TypedArray数组的成员是连续的，不会有空位
    let array2 = [1, , 3]
    console.log(...array2)
    let t_array3 = new Int8Array([1, 2, , 4])
    console.log(t_array3)
    console.info('----------')

    //TypedArray数组成员的默认值为0
    let buffer = new ArrayBuffer(10)
    let t_array4 = new Int8Array(buffer)
    console.log(array2[1], t_array4[5])

    //TypedArray数组只是一层视图，本身不储存数据，
    // 它的数据都储存在底层的ArrayBuffer对象之中，
    // 要获取底层对象必须使用buffer属性。
}

console.info('\n---------- demo2:构造方法 ----------')
{
    //TypedArray(buffer,byteOffset=0，length?)
    let b = new ArrayBuffer(8)
    let v1 = new Int8Array(b)
    let v2 = new Uint8Array(b, 2)
    let v3 = new Int16Array(b, 2, 2)
    //let v4 = new Int32Array(b,2,2) //start offset of Int32Array should be a multiple of 4
    v1[2] = 32
    console.log(v1, v2, v3)

    //TypedArray(length)
    let v4 = new Int8Array(2)
    console.log(v4)

    //TypedArray(typedArray)
    let v5 = new Int16Array(v4)
    v5[1] = 100
    console.log(v5, v4)

    let x = new Int8Array([1, 1])
    let y = new Int8Array(x);
    console.log(`y: ${y}`)
    y[0] = 100
    console.log(x)

    //TypedArray(arrayLikeObject)
    let z = new Int16Array([9, 5, 2, 7])
    console.log(z.byteLength)
    var normalArray = Array.from(z)
    console.log(normalArray)
}

console.info('\n---------- demo3：数组方法 ----------')
/**
 *  copyWithin
 *  entries
 *  every
 *  fill
 *  filter
 *  find
 *  findIndex
 *  forEach
 *  indexOf
 *  join
 *  keys
 *  lastIndexOf
 *  map
 *  reduce
 *  reduceRight
 *  reverse
 *  slice
 *  some
 *  sort
 *  toLocaleString
 *  toString
 *  values
 */
{
    var a = ['a', 'b']
    console.log(a.entries().next())

    let b = new ArrayBuffer(8)
    let b2 = new ArrayBuffer(8)
    let v1 = new Int8Array(b)
    let v2 = new Int8Array(b2)
    v1[0] = 1
    v2[0] = 2
    let b3 = concatenate(Int8Array, v1, v2, Uint8Array.of(3, 4))
    console.log(b3)

}

//TypedArray没有concat
function concatenate(resultConstructor, ...arrays) {
    let totalLength = 0;
    for (let arr of arrays) {
        totalLength += arr.length;
    }
    console.log(totalLength)

    let result = new resultConstructor(totalLength)
    let offset = 0;
    for (let arr of arrays) {
        result.set(arr, offset);
        offset += arr.length;
    }
    return result;
}

let ui8 = Uint8Array.of(0, 1, 2)
for (let byte of ui8) {
    console.log(byte)
}




