'use strict';
console.info('\n---------- import 取代 require ----------')
//bad
const moduleA = require('moduleA');
const func1 = moduleA.fun1
const func2 = moduleA.fun2

//good
import {func1,func2} from 'moduleA'

// commonJS的写法
var React = require('react');
var Breadcrumbs = React.createClass({
    render() {
        return <nav />;
    }
});

//bad
module.exports = Breadcrumbs;

//good
export default Breadcrumbs

// bad
import * as myObject './importModule';
// good
import myObject from './importModule';

/* 认输出一个函数，函数名的首字母应该小写 */
function makeStyleGuide() {
}
export default makeStyleGuide;

/* 如果模块默认输出一个对象，对象名的首字母应该大写 */
const StyleGuide = {
    es6: {
    }
};
export default StyleGuide;

