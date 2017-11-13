console.info('---------- demo1 ----------')
function add([a,b])  {
    return a+b;
}
let array = [1,2]
let array2 = [2,3,4]
console.log(add(array), add(array2), add([3,5]))

console.info('\n---------- demo2 ----------')
let array3 = [[1,3],[2,4]].map(([x,y]) => x+y)
let array4 = [[1,3],[2,4]].map((x,y) => x+y)
console.log(array3,array4)

console.info('\n---------- demo3 ----------')
function foo({x,y} = {x:0, y :0}){
    return [x,y]
}

function bar({x=0,y=0} = {}){
    return [ x,y]
}

console.log(foo({x:3,y:6}))
console.log(foo({x:3}))
console.log(foo({}))
console.log(foo())

console.log(bar({}))






