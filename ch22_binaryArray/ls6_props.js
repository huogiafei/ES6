/**
 * buffer
 * byteLength
 * byteOffset
 * length
 * set
 * subarray
 * slice
 * of
 * from
 */
'use strict';
{
    console.info('\n---------- Buffer ----------')
    let a = new Float32Array(8)
    let b = new Uint8Array(a.buffer)
    //console.log(b)
}

{
    console.info('\n---------- ByteLength & ByteOffset ----------')
    let b = new ArrayBuffer(8)
    let v1 = new Int32Array(b)
    let v2 = new Uint8Array(b,2)
    let v3 = new Int16Array(b,2,2) //2*2

    console.log(v1.byteLength,v2.byteLength,v3.byteLength)
    console.log(v1.byteOffset,v2.byteOffset,v3.byteOffset)
}

{
    console.info('\n---------- Length ----------')
    //字节长度 byteLength
    //成员长度 length
    let b = new ArrayBuffer(8)
    let v1 = new Uint16Array(b)
    let v2 = new Uint32Array([3,6,9])
    v1[0] = 1
    console.log(v1.byteLength,v1.length)
    console.log(v2.byteLength,v2.length)
}

{
    //整段内存复制
    console.info('\n---------- Set ----------')
    let a = new Uint16Array(8)
    let b = new Uint16Array(10)
    a[1] = 100
    b.set(a)
    console.log(b)
    b.set(a,2)
    console.log(b)
}

{
    console.info('\n---------- Subarray ----------')
    //子视图 subarray (from , to) 不包含结束序号成员 to
    let a = new Int8Array([1,3,5,7,9])
    let b = a.subarray(2,4)
    console.log(b)
}

{
    //返回新的TypedArray实例
    console.info('\n---------- Slice ----------')
    let ui8 = new Uint8Array([2,4,6,8,10])
    let copy = ui8.slice(1,3)
    console.log(typeof copy,copy)
}

{
    //静态方法of,参数转为TypedArray
    console.info('\n---------- Of ----------')
    let f32a = Float32Array.of(0.1,-8,3.7)
    console.log(f32a)
}

{
    console.info('\n---------- From ----------')
    //接受可遍历的数据结构作为参数，返回TypedArray
    let i8 =  Int8Array.from([1,2,4,8])
    console.log(i8)
    
    let u16 = Uint16Array.from(Uint8Array.of(1,3,5,7))
    console.log(u16 instanceof Uint16Array,u16)

    // 先复制，再处理
    let a = Int8Array.of(127,126,-125).map(x=>x*2)
    console.log(a) //overflow
    let b = Int16Array.from(Int8Array.of(127,126,-125),x => x*2)
    console.log(b)
}




