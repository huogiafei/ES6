'use strict';
console.info('---------- 使用数组成员对变量赋值 ----------')
const array = [1, 2, 3, 4]
//bad
const c = array[2]
//good
const [a, b] = array

console.info('\n---------- 函数参数是对象成员 ----------')

//bad
function getName(user) {
    let firstName = user.firstName;
    let lastName = user.lastName;
}

//good
function getName2(obj) {
    let {firstName, lastName} = obj
}

//best
function getFullName({firstName,lastName}) {

}

console.info('\n----------  函数返回多个值 ----------')
const [x,y,z] = [2,4,6]
//bad
function foobar(){
    return [x,y]
}

//good
function foobar2(){
    return {x,y}
}






