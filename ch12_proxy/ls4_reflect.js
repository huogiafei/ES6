/**
 * Reflect 13 Methods
 * apply
 * construct
 * get
 * set
 * defineProperty
 * deleteProperty
 * has
 * ownKeys
 * isExtensible
 * preventExtensions
 * getOwnPropertyDescription
 * getPrototype
 * setPrototypeOf
 */
'use strict';
{
    let foobar = (...args) => {
        let r = 1;
        for (let i = 0; i < args.length; i++) {
            r *= (1 + Number(args[i] * .01))
        }
        return ((r - 1) * 100).toFixed(2) + "%"
    }
    //console.log(foobar(.85, -.6))
}

{
    console.log(Reflect.has(Object, 'assign'))
    console.log(Reflect.apply(Math.sign,undefined,[-1,2]))
}

