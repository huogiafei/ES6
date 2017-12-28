'use strict';
console.info('\n---------- Copy Array ----------')
const items = ['a', 'b', 'c']

//bad
const len = items.length
const itemsCopy = []

for (let i = 0; i < len; i++) {
    itemsCopy[i] = items[i]
}

//good
const itemsCopy2 = [...items]
