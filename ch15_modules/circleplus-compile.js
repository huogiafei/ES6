'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _circleCompile = require('./circle-compile');

Object.keys(_circleCompile).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _circleCompile[key];
        }
    });
});

exports.default = function (x) {
    return Math.exp(x);
};

var e = exports.e = 2.71828182846;

//# sourceMappingURL=circleplus-compile.js.map