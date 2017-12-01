'use strict';
console.info('\n---------- Multiple View ----------')
{
    //复合视图
    let buffer = new ArrayBuffer(24)

    let idView = new Uint32Array(buffer, 0, 1)
    let usernameView = new Uint8Array(buffer, 4, 16)
    let amountDueView = new Float32Array(buffer, 20, 1)

    console.log(idView.byteLength, usernameView.byteLength, amountDueView.byteLength)
}

{
    console.info('\n---------- DataView ----------')
    /**
     * DataView视图
     * 支持设定字节序
     * TypeArray 本机字节序，一般是小端序
     * DataView视图 处理网络设备的数据，大端字节序和小端字节序可以自定义
     */

    let buffer = new ArrayBuffer(24)
    let dv = new DataView(buffer)
    console.log(typeof dv)
    console.log(dv)

    //以下属性与TypedArray一样
    /* buffer ,byteLength , byteOffset */

    let v1 = dv.getUint8(0)
    let v2 = dv.getUint16(1)
    let v3 = dv.getUint16(3)

    console.log(v1,v2,v3)

    //默认大端字节序解读
    let v4 = dv.getUint16(2,true)
    //写入
    dv.setUint32(0,12)
}
