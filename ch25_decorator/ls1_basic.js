/**
 * 修饰器是一个函数
 * 改变对类的行为，代码编译时执行
 */
function test(target){
    target.isTest = true
}

@test
class MyTestClass{}

console.log(MyTestClass.isTest)
