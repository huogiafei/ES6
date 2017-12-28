"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 修饰器是一个函数
 * 改变对类的行为，代码编译时执行
 */
function test(target) {
  target.isTest = true;
}

var MyTestClass = function MyTestClass() {
  _classCallCheck(this, MyTestClass);
};

console.log(MyTestClass.isTest);

//# sourceMappingURL=ls1_basic-compile.js.map