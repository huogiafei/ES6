'use strict';
/**
 * Byte Order 字节序
 */
{
    console.info('\n---------- demo1 ----------')
    let buffer = new ArrayBuffer(16)
    let i32v = new Int32Array(buffer)
    let i16v = new Int16Array(buffer)

    console.log(i32v.length, i16v.length)
    console.log(i32v.byteLength, i16v.byteLength)

    for (let i = 0; i < i32v.length; i++) {
        i32v[i] = i * 2
    }
    console.log(i32v, i16v)
}

{
    console.info('\n---------- demo2 ----------')
    let buffer = new ArrayBuffer(4)
    let v1 = new Int32Array(buffer)
    v1[0] = 30
    v1[1] = 100
    console.log(v1)
}

{
    console.info('\n---------- demo3 ----------')
    let buffer = new ArrayBuffer(4);
    let v1 = new Uint8Array(buffer)
    v1[0] = 2;
    v1[1] = 1;
    v1[2] = 3;
    v1[3] = 7;

    let v2 = new Uint16Array(buffer)
    console.log(v1.length, v2.length)

    console.log(v2[0], v1[0])
    console.log(v2[0], v2[1], v2[2])
}

{
    console.info('\n---------- BYTES_PER_ELEMENT ----------')
    console.log(Int8Array.BYTES_PER_ELEMENT)
    console.log(Uint16Array.BYTES_PER_ELEMENT)
    console.log(Float32Array.BYTES_PER_ELEMENT)
}

