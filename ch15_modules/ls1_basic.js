//Node CommonJS
//let {stat,exitsts,readFile} = require('fs')

//es6 module
import {stat,exists,readFile} from 'fs'

//export
let stuName = 'Tom';
let year = 1992;

export {stuName,year};'use strict';
export function multiply(a,b) {
    return a*b
}
export {getRandomInt as random};

function getRandomInt(range){
    let r = Number.parseInt(range)
    return Number.parseInt(Math.random() * r)
}

export let foo = 'abc'
setTimeout(() => foo = 'xyz',5)

//error
/*
function foo() {
    export default 'bar' // SyntaxError
}
foo()*/
