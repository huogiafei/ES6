'use strict';
console.info('\n---------- DEMO11 ----------')

//1.异步操作的同步化表达
function* loadingUI() {
    showLoading()
    yield loadDataAsync()
    hideLoading()
}

let [showLoading, loadDataAsync, hideLoading] = [
    function () {
        console.log('show')
    },
    function () {
        return true
    },
    function () {
        console.log('hide')
    }
]

var loader = loadingUI()
loader.next()
loader.next()

console.info('----- DEMO2 -----')

//2.控制流管理
function f1(func) {
    //do something
}

function f2(val, func) {
    //do something
}

function f3(val, func) {
    //do something
}

f1(function (val1) {
    f2(1, function (val2) {
        f3(1, function (val3) {
            //do something
        })
    })
})

function* task() {
    try {
        var val2 = yield step1(val1)
        var val3 = yield step2(val2)
    } catch (e) {
        //handle error
    }
}

function scheduler(task) {
    var taskObj = task.next(task.value)
    if (!taskObj.done) {
        task.value = taskObj.value
        scheduler(task);
    }
}

let steps = ['step1', 'step2', 'step3']

function* iterStep(steps) {
    for (let item = 0; i < steps.length; i++) {
        let step = steps[i]
        yield step();
    }
}

console.info('\n---------- DEMO3 ----------')
//部署Iterator接口
function * iterObj(obj) {
    let keys = Object.keys(obj)
    for(let key of keys){
        yield [key,obj[key]]
    }
}

{
    let obj = {foo:123,bar:'abc'}
    console.log(...iterObj(obj))
}

console.info('\n---------- DEMO4 ----------')
//作为数据解构
function *doStuff() {
    //yield fs.readFile.bind(null, 'hello.txt');
    //yield fs.readFile.bind(null, 'world.txt');
    //yield fs.readFile.bind(null, 'and-such.txt');
}

for (task of doStuff()) {

}










