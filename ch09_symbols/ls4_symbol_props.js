'use strict';
/**Symbol 11 inner properties
 * hasInstance
 * isConcatSpreadable
 * species
 * match
 * replace
 * search
 * split
 * iterator
 * toPrimitive
 * toStringTag
 * unscopables
 *
 * **/

console.info('---------- hasInstance ----------')

class IsArray {
    [Symbol.hasInstance](foo) {
        return foo instanceof Array;
    }
}

console.log([1, 2, 3] instanceof Array)
console.log([1, 2, 3] instanceof new IsArray())

class Even {
    static [Symbol.hasInstance](obj) {
        return Number(obj) % 2 === 0
    }
}

console.log(1 instanceof Even)
console.log(0 instanceof Even)

console.info('---------- isConcatSpreadable ----------')
let arr1 = [1, 2]
let mix1 = ['a', 'b'].concat(arr1, 'c')
console.log(mix1)
console.log(arr1[Symbol.isConcatSpreadable])

let arr2 = ['k', 'm']
arr2[Symbol.isConcatSpreadable] = false;
let mix2 = ['a', 'b'].concat(arr2, 'c')
console.log(mix2)

let obj = {length: 3, 0: 'k', 1: 'u', text: 'u'}
console.log(['a', 'b'].concat(obj))
obj[Symbol.isConcatSpreadable] = true
console.log(['a', 'b'].concat(obj))

console.info('\n---------- species ----------')

class B {
    static get [Symbol.species]() {
        return this
    }
}

console.info('\n---------- match ----------')
//String.prototype.match(regexp)
// the same as
//regexp[Symbol.match](this)

class MyMatcher {
    [Symbol.match](string) {
        return 'abc'.indexOf(string)
    }
}

console.log('e'.match(new MyMatcher()));

console.info('\n---------- replace ----------')
console.log('abc'.replace('b', '1'));
//String.prototype.replace(searchValue,replaceValue)
// the same as
//searchValue[Symbol.replace](this,replaceValue)

console.info('\n---------- search ----------')
//String.prototype.search(regexp)
//the same as
//regexp[Symbol.search(this)]

console.info('\n---------- split ----------')
//String.prototype.split(separator, limit)
//the same as
//separator[Symbol.split](this, limit)

console.info('\n---------- iterator ----------')
let myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
console.log([...myIterable])

console.info('\n---------- toPrimitive ----------')
let objRaw = {
    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case 'number':
                return 123;
            case 'string':
                return 'str';
            case 'default':
                return 'default';
            default:
                throw new Error()
        }
    }
};

console.log(123 * objRaw)
console.log(123 + objRaw)
console.log(123 + Number(objRaw))
console.log(objRaw == 'default')

console.info('\n---------- toStringTag ----------')
console.log(({[Symbol.toStringTag]: 'Foo'}.toString()))

console.log(JSON[Symbol.toStringTag])
console.log(Symbol.prototype[Symbol.toStringTag])

console.info('\n---------- unscopables ----------')
















