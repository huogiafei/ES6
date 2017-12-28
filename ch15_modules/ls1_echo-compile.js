"use strict";

var _ls1_basicCompile = require("./ls1_basic-compile");

var _defaultCompile = require("./default-compile");

var _defaultCompile2 = _interopRequireDefault(_defaultCompile);

var _circleCompile = require("./circle-compile");

var circle = _interopRequireWildcard(_circleCompile);

var _circleplusCompile = require("./circleplus-compile");

var m = _interopRequireWildcard(_circleplusCompile);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//不需要大括号

console.log(_ls1_basicCompile.stuName);
console.log((0, _ls1_basicCompile.multiply)(4, 5));
console.log((0, _ls1_basicCompile.random)(100));
console.log(_ls1_basicCompile.foo);

console.log(circle.area(2), circle.long(3));

//defult
console.log(_defaultCompile2.default);

//extend

console.log(m.area(3), (0, m.default)(m.e));

//# sourceMappingURL=ls1_echo-compile.js.map