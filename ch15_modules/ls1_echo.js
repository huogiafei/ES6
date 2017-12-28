import {stuName} from "./ls1_basic-compile";
import {multiply} from "./ls1_basic-compile";
import {random} from "./ls1_basic-compile";
import {foo} from "./ls1_basic-compile";
import customName from "./default-compile" //不需要大括号

console.log(stuName)
console.log(multiply(4, 5))
console.log(random(100))
console.log(foo)

import * as circle from './circle-compile'
console.log(circle.area(2),circle.long(3))

//defult
console.log(customName);

//extend
import * as m from './circleplus-compile'
import exp from './circleplus-compile'
console.log(m.area(3),exp(m.e))