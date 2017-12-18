/**
 * 之前的异步编程方法
 * 回调函数
 * 事件监听
 * 发布/订阅
 * Promise对象
 */

//1. callback
let fs = require('fs'),
    path = require('path');
readFile = require('fs-readfile-promise');

fs.readFile(__dirname + '/a.txt', function (err, data) {
    if (err) throw err;
    console.log(data);
});

//2 Promise & Callback Hell
/*fs.readFile(fileA,function (err,data) {
    fs.readFile(fileA,function (err,data) {})
})*/
{
    let final = ''
    readFile(__dirname + '/a.txt')
        .then(function (data) {
            final += data.toString()
            console.log(final)
        })
        .then(function () {
            fs.writeFile(__dirname + '/a_copy.txt', final + 'v'
                + parseInt(Math.random() * 100), function (err) {
                if (err) console.error(err);
                console.log('write done')
            });
        })

}


